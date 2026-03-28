import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const publicPaths = ["/", "/login", "/register"];
  const isPublicPath = publicPaths.includes(pathname);

  // Protected paths
  const isStudentPath = pathname.startsWith("/student");
  const isAdminPath = pathname.startsWith("/admin");
  const isProtectedPath = isStudentPath || isAdminPath;

  // If user is not authenticated
  if (!user) {
    // Allow access to public paths
    if (isPublicPath) {
      return response;
    }

    // Redirect to login for protected paths
    if (isProtectedPath) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If user is authenticated
  if (user) {
    // Redirect authenticated users away from auth pages
    if (pathname === "/login" || pathname === "/register") {
      // Determine where to redirect based on user role
      // This will be refined based on the user's role
      return NextResponse.redirect(new URL("/student", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
