'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  User,
  Clock,
  Tag,
  Search,
  Filter,
  ArrowUpDown,
  Heart,
  MessageSquare,
  Share2,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Building Scalable AI Systems',
    excerpt: 'Learn the best practices for creating scalable and maintainable AI-powered applications.',
    content: 'In this comprehensive guide, we explore the fundamental principles and advanced techniques for building AI systems that can scale effectively...',
    author: 'Emily Chen',
    date: 'March 22, 2024',
    readTime: '8 min read',
    tags: ['Architecture', 'AI', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    likes: 234,
    comments: 45
  },
  {
    title: 'Machine Learning for Web Developers',
    excerpt: 'A comprehensive guide to implementing machine learning models in web applications.',
    content: 'Discover how web developers can leverage machine learning capabilities to enhance their applications...',
    author: 'David Kim',
    date: 'March 21, 2024',
    readTime: '10 min read',
    tags: ['Machine Learning', 'Web Development', 'Tutorial'],
    image: 'https://images.unsplash.com/photo-1675557009875-436f7a7fff03?q=80&w=2070&auto=format&fit=crop',
    likes: 189,
    comments: 32
  },
  {
    title: 'The Ethics of AI Development',
    excerpt: 'Understanding the ethical considerations and responsibilities in AI development.',
    content: 'As AI becomes more prevalent in our daily lives, it\'s crucial to consider the ethical implications...',
    author: 'Sarah Johnson',
    date: 'March 20, 2024',
    readTime: '7 min read',
    tags: ['Ethics', 'AI', 'Development'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    likes: 156,
    comments: 28
  },
  {
    title: 'Optimizing Neural Networks',
    excerpt: 'Advanced techniques for improving neural network performance and efficiency.',
    content: 'Learn how to fine-tune your neural networks for better performance and reduced computational costs...',
    author: 'Michael Zhang',
    date: 'March 19, 2024',
    readTime: '12 min read',
    tags: ['Neural Networks', 'Performance', 'AI'],
    image: 'https://images.unsplash.com/photo-1676277791608-ac54907a3b68?q=80&w=2070&auto=format&fit=crop',
    likes: 203,
    comments: 37
  },
  {
    title: 'AI-Driven Code Generation',
    excerpt: 'Exploring the future of automated code generation using AI models.',
    content: 'Discover how AI is revolutionizing the way we write code and what it means for developers...',
    author: 'Alex Thompson',
    date: 'March 18, 2024',
    readTime: '9 min read',
    tags: ['Code Generation', 'AI', 'Future Tech'],
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070&auto=format&fit=crop',
    likes: 178,
    comments: 29
  }
];

export default function BlogPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/news">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
          <Badge variant="secondary">Blog Posts</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Featured Blog Posts</h1>
          <p className="text-xl text-muted-foreground">
            Insights and tutorials from our community of AI developers.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg border bg-card p-4">
          <div className="flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search blog posts..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <h2 className="text-2xl font-semibold">{post.title}</h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <Button variant="ghost" size="sm">
                      <Heart className="mr-2 h-4 w-4" />
                      {post.likes} Likes
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      {post.comments} Comments
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-video md:aspect-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            <BookOpen className="mr-2 h-4 w-4" />
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
}