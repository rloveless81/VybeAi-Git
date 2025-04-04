import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Star, 
  Download,
  Bot,
  Sparkles,
  Brain,
  Search,
  Filter,
  ArrowUpDown
} from 'lucide-react';
import Link from 'next/link';

export default function MarketplacePage() {
  const products = [
    {
      title: 'AI Component Generator',
      description: 'Generate React components from natural language descriptions with AI assistance.',
      price: 49.99,
      downloads: 2345,
      rating: 4.8,
      author: 'TechLabs AI',
      tags: ['React', 'TypeScript', 'AI'],
      icon: Bot
    },
    {
      title: 'Smart Code Refactor Kit',
      description: 'Automatically refactor and optimize your code using advanced AI algorithms.',
      price: 39.99,
      downloads: 1876,
      rating: 4.7,
      author: 'CodeOptimize',
      tags: ['Refactoring', 'Performance', 'AI'],
      icon: Sparkles
    },
    {
      title: 'Neural API Generator',
      description: 'Generate complete REST APIs from database schemas using neural networks.',
      price: 59.99,
      downloads: 3102,
      rating: 4.9,
      author: 'AI Systems Inc',
      tags: ['API', 'Backend', 'Neural Networks'],
      icon: Brain
    }
  ];

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">AI-Powered Developer Tools</h1>
          <p className="text-xl text-muted-foreground">
            Discover and purchase high-quality code templates and AI development tools.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg border bg-card p-4">
          <div className="flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search templates and tools..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Sort
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className="flex flex-col">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="font-mono">
                      ${product.price}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-auto border-t p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Download className="h-4 w-4" />
                      {product.downloads}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      By {product.author}
                    </span>
                    <Button>
                      <Code2 className="mr-2 h-4 w-4" />
                      Purchase
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/marketplace/more">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}