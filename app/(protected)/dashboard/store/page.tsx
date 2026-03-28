'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { useState } from 'react';

export default function StorePage() {
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: 'Physics Textbook',
      price: 45.99,
      rating: 4.5,
      image: '📚',
      category: 'Books',
    },
    {
      id: 2,
      name: 'Lab Kit - Chemistry',
      price: 89.99,
      rating: 4.8,
      image: '🧪',
      category: 'Equipment',
    },
    {
      id: 3,
      name: 'Exam Prep Course',
      price: 129.99,
      rating: 4.7,
      image: '📖',
      category: 'Courses',
    },
    {
      id: 4,
      name: 'Calculator Pro',
      price: 34.99,
      rating: 4.3,
      image: '🧮',
      category: 'Tools',
    },
  ];

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Store</h1>
          <p className="text-muted-foreground mt-2">Browse and purchase learning materials.</p>
        </div>
        <Button>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart ({cart.length})
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4 flex flex-col">
            <div className="flex items-center justify-center h-32 bg-muted rounded-lg mb-4 text-4xl">
              {product.image}
            </div>
            <h3 className="font-semibold text-sm">{product.name}</h3>
            <div className="flex items-center gap-1 mt-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">{product.rating}</span>
            </div>
            <p className="text-2xl font-bold mt-2">${product.price}</p>
            <p className="text-xs text-muted-foreground">{product.category}</p>
            <Button
              className="w-full mt-4"
              onClick={() => addToCart(product.id)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
