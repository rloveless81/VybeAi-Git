'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Search,
  Filter,
  ArrowUpDown,
  Star,
  Download,
  Bot,
  Sparkles,
  Brain,
  Terminal,
  Database,
  Code2,
  Network,
  Cloud,
  Zap,
  Cpu
} from 'lucide-react';
import Link from 'next/link';

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
  },
  {
    title: 'AI Testing Suite',
    description: 'Automated testing framework powered by machine learning for better test coverage.',
    price: 44.99,
    downloads: 1543,
    rating: 4.6,
    author: 'TestMaster AI',
    tags: ['Testing', 'Automation', 'ML'],
    icon: Terminal
  },
  {
    title: 'Database Optimizer Pro',
    description: 'AI-powered database optimization and query performance enhancement tool.',
    price: 69.99,
    downloads: 987,
    rating: 4.8,
    author: 'DataSmart Solutions',
    tags: ['Database', 'Performance', 'SQL'],
    icon: Database
  },
  {
    title: 'Neural Network Builder',
    description: 'Visual tool for designing and training neural networks with no code.',
    price: 79.99,
    downloads: 2234,
    rating: 4.7,
    author: 'AI Architects',
    tags: ['Deep Learning', 'Visual', 'No-Code'],
    icon: Network
  },
  {
    title: 'Cloud AI Deployer',
    description: 'Streamline AI model deployment to various cloud platforms automatically.',
    price: 54.99,
    downloads: 1654,
    rating: 4.5,
    author: 'CloudTech AI',
    tags: ['Cloud', 'DevOps', 'Deployment'],
    icon: Cloud
  },
  {
    title: 'Performance Optimizer AI',
    description: 'Optimize application performance using machine learning algorithms.',
    price: 49.99,
    downloads: 1876,
    rating: 4.6,
    author: 'OptimizeAI',
    tags: ['Performance', 'Optimization', 'ML'],
    icon: Zap
  },
  {
    title: 'ML Model Manager',
    description: 'Comprehensive tool for managing and versioning machine learning models.',
    price: 64.99,
    downloads: 1432,
    rating: 4.7,
    author: 'ModelOps Pro',
    tags: ['MLOps', 'Management', 'Versioning'],
    icon: Cpu
  }
];

export default function MarketplaceMorePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/marketplace">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Marketplace
            </Button>
          </Link>
          <Badge variant="secondary">All Products</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">AI Development Tools</h1>
          <p className="text-xl text-muted-foreground">
            Browse our complete collection of AI-powered development tools and templates.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg border bg-card p-4">
          <div className="flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools and templates..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex gap-2">
            <select className="rounded-md border bg-background px-3 py-2 text-sm">
              <option value="all">All Categories</option>
              <option value="tools">Development Tools</option>
              <option value="templates">Templates</option>
              <option value="plugins">Plugins</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort
            </Button>
          </div>
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

        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg">
            Previous Page
          </Button>
          <Button variant="outline" size="lg">
            Next Page
          </Button>
        </div>
      </div>
    </div>
  );
}