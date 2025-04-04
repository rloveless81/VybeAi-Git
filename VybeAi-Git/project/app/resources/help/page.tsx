'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  ArrowLeft,
  Search,
  BookOpen,
  MessageSquare,
  Mail,
  Phone,
  Globe,
  FileQuestion,
  Lightbulb,
  Wrench,
  Bug,
  RefreshCw,
  Shield,
  Zap,
  Video,
  BookMarked,
  MessagesSquare
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of using our platform',
    icon: BookOpen,
    articles: [
      'Platform Overview',
      'Account Setup',
      'First Steps Guide',
      'Basic Concepts'
    ]
  },
  {
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    icon: Wrench,
    articles: [
      'Common Issues',
      'Error Messages',
      'Performance Tips',
      'Debug Guide'
    ]
  },
  {
    title: 'Security',
    description: 'Security best practices and guidelines',
    icon: Shield,
    articles: [
      'Security Overview',
      'Authentication',
      'Data Protection',
      'Best Practices'
    ]
  },
  {
    title: 'API Documentation',
    description: 'Detailed API references and guides',
    icon: FileQuestion,
    articles: [
      'API Overview',
      'Authentication',
      'Endpoints',
      'Rate Limits'
    ]
  }
];

const popularArticles = [
  {
    title: 'How to integrate AI models',
    views: 1234,
    category: 'Development'
  },
  {
    title: 'Setting up authentication',
    views: 987,
    category: 'Security'
  },
  {
    title: 'Optimizing API performance',
    views: 856,
    category: 'Performance'
  }
];

const supportChannels = [
  {
    title: 'Community Forums',
    description: 'Connect with other developers',
    icon: MessagesSquare,
    link: '#'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step visual guides',
    icon: Video,
    link: '#'
  },
  {
    title: 'Documentation',
    description: 'Detailed technical guides',
    icon: BookMarked,
    link: '#'
  }
];

export default function HelpCenterPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/resources">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
          <Badge variant="secondary">Help Center</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">How can we help you?</h1>
          <p className="text-xl text-muted-foreground">
            Search our knowledge base or browse categories below
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-lg border bg-card p-6">
          <div className="flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Button>Search</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h2 className="text-xl font-semibold">{category.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <Button variant="ghost" className="w-full justify-start px-2 text-sm">
                            {article}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Popular Articles</h2>
            <div className="mt-4 space-y-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">{article.title}</h3>
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {article.views} views
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold">Support Channels</h2>
            <div className="mt-4 space-y-4">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="rounded-lg bg-muted p-2">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">{channel.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Still need help?</h2>
              <p className="text-muted-foreground">
                Contact our support team through any of these channels
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Email Support
              </Button>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Live Chat
              </Button>
              <Button>
                <Phone className="mr-2 h-4 w-4" />
                Schedule Call
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}