import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">NovaX Edu</h1>
          <nav className="flex gap-4">
            <Link href="/login" className="btn-secondary">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">
            Welcome to NovaX Edu
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            The comprehensive Learning Management System for modern education. Access live classes, recordings, study materials, and much more in one place.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Live Classes</h3>
              <p className="text-sm text-muted-foreground">
                Join interactive live classes with experienced teachers and real-time engagement.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Recordings</h3>
              <p className="text-sm text-muted-foreground">
                Access recorded sessions organized by topic, month, and category for your convenience.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Study Materials</h3>
              <p className="text-sm text-muted-foreground">
                Download notes, practice papers, and access quizzes to enhance your learning.
              </p>
            </div>
          </div>

          <div className="mt-12 flex gap-4 justify-center flex-wrap">
            <Link href="/register" className="btn-primary px-8 py-3">
              Get Started
            </Link>
            <Link href="/login" className="btn-secondary px-8 py-3">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 NovaX Edu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
