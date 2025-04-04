import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper, TrendingUp, Star, ArrowRight, Clock, User, Tag, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const newsArticles = [
    {
      title: 'The Rise of AI-Powered Development',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we write and maintain code.',
      category: 'Trending',
      date: 'March 21, 2024',
      readTime: '5 min read',
      icon: TrendingUp,
      color: 'text-blue-500'
    },
    {
      title: 'New Features in Next.js 14',
      excerpt: 'Discover the latest features and improvements in Next.js 14 that are changing the game.',
      category: 'Featured',
      date: 'March 20, 2024',
      readTime: '4 min read',
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'Leading experts share their predictions on where web development is headed in 2025.',
      category: 'Latest',
      date: 'March 19, 2024',
      readTime: '6 min read',
      icon: Newspaper,
      color: 'text-green-500'
    }
  ];

  const blogPosts = [
    {
      title: 'Building Scalable AI Systems',
      excerpt: 'Learn the best practices for creating scalable and maintainable AI-powered applications.',
      author: 'Emily Chen',
      date: 'March 22, 2024',
      readTime: '8 min read',
      tags: ['Architecture', 'AI', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Machine Learning for Web Developers',
      excerpt: 'A comprehensive guide to implementing machine learning models in web applications.',
      author: 'David Kim',
      date: 'March 21, 2024',
      readTime: '10 min read',
      tags: ['Machine Learning', 'Web Development', 'Tutorial'],
      image: 'https://images.unsplash.com/photo-1675557009875-436f7a7fff03?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'The Ethics of AI Development',
      excerpt: 'Understanding the ethical considerations and responsibilities in AI development.',
      author: 'Sarah Johnson',
      date: 'March 20, 2024',
      readTime: '7 min read',
      tags: ['Ethics', 'AI', 'Development'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Latest News & Updates</h1>
          <p className="text-xl text-muted-foreground">
            Stay informed with the latest developments in AI-powered coding and web development.
          </p>
        </div>

        <div className="grid gap-6">
          {newsArticles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`rounded-lg p-2 ${article.color} bg-opacity-10`}>
                    <Icon className={`h-6 w-6 ${article.color}`} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-muted-foreground">{article.category}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold">{article.title}</h2>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                    <Button variant="ghost" className="mt-2 px-0">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Blog Posts</h2>
            <Link href="/news/blog">
              <Button variant="outline">
                <BookOpen className="mr-2 h-4 w-4" />
                View All Posts
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <h3 className="line-clamp-2 text-lg font-semibold">{post.title}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full">
                    Read Post
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}