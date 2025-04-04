import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AiChat } from '@/components/ai-chat';
import Link from 'next/link';
import { BookOpen, Code2, Sparkles } from 'lucide-react';

export default function LearnPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Learn AI-Powered Development</h1>
          <p className="text-xl text-muted-foreground">
            Master the art of AI-enhanced coding with our comprehensive learning paths and tutorials.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <BookOpen className="h-12 w-12 text-blue-500" />
                <h2 className="mt-4 text-xl font-semibold">Fundamentals</h2>
                <p className="mt-2 text-muted-foreground">
                  Learn the basics of AI integration in modern development workflows.
                </p>
                <Link href="/learn/fundamentals">
                  <Button className="mt-4" variant="outline">Start Learning</Button>
                </Link>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <Code2 className="h-12 w-12 text-purple-500" />
                <h2 className="mt-4 text-xl font-semibold">Advanced Techniques</h2>
                <p className="mt-2 text-muted-foreground">
                  Deep dive into advanced AI models and their practical applications.
                </p>
                <Link href="/learn/advanced">
                  <Button className="mt-4" variant="outline">Explore</Button>
                </Link>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <Sparkles className="h-12 w-12 text-green-500" />
                <h2 className="mt-4 text-xl font-semibold">Projects</h2>
                <p className="mt-2 text-muted-foreground">
                  Build real-world projects using AI-powered development tools.
                </p>
                <Link href="/learn/projects">
                  <Button className="mt-4" variant="outline">View Projects</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AiChat />
          </div>
        </div>
      </div>
    </div>
  );
}