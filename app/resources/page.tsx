import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Book,
  Code2,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Library,
  PlayCircle,
  Search,
  Terminal,
  Youtube
} from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the fundamentals of AI-powered development with our comprehensive guide.',
      icon: Book,
      category: 'Documentation',
      link: '#',
      type: 'Guide'
    },
    {
      title: 'API Documentation',
      description: 'Detailed documentation for our AI development APIs and integrations.',
      icon: FileText,
      category: 'Documentation',
      link: '#',
      type: 'Docs'
    },
    {
      title: 'Code Examples',
      description: 'Real-world examples of AI integration in various programming languages.',
      icon: Code2,
      category: 'Development',
      link: '#',
      type: 'Examples'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for implementing AI features in your applications.',
      icon: Youtube,
      category: 'Learning',
      link: '#',
      type: 'Videos'
    }
  ];

  const tools = [
    {
      name: 'AI Model Explorer',
      description: 'Interactive tool for exploring and testing different AI models.',
      icon: Terminal,
      stars: 1240,
      link: '#'
    },
    {
      name: 'Code Generator CLI',
      description: 'Command-line tool for generating AI-powered code snippets.',
      icon: Code2,
      stars: 892,
      link: '#'
    }
  ];

  const courses = [
    {
      title: 'AI Development Fundamentals',
      instructor: 'Dr. Sarah Chen',
      duration: '8 hours',
      level: 'Beginner',
      icon: GraduationCap
    },
    {
      title: 'Advanced AI Integration',
      instructor: 'Prof. Michael Rodriguez',
      duration: '12 hours',
      level: 'Advanced',
      icon: Library
    }
  ];

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Developer Resources</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to build AI-powered applications.
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
          <div className="flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Button>Search</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{resource.title}</h3>
                      <Badge variant="secondary">{resource.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                    <Button variant="ghost" className="px-0">
                      <Globe className="mr-2 h-4 w-4" />
                      View Resource
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Terminal className="h-5 w-5" />
              Developer Tools
            </h2>
            <div className="mt-4 space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <tool.icon className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-medium">{tool.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Github className="h-4 w-4" />
                      <span>{tool.stars}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                  {index < tools.length - 1 && <hr className="my-4" />}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <GraduationCap className="h-5 w-5" />
              Learning Paths
            </h2>
            <div className="mt-4 space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{course.title}</h3>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{course.instructor}</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>
                  {index < courses.length - 1 && <hr className="my-4" />}
                </div>
              ))}
              <Button variant="outline" className="mt-2 w-full">
                <PlayCircle className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">Need More Help?</h2>
              <p className="text-muted-foreground">
                Check out our additional support resources
              </p>
            </div>
            <Link href="/resources/help">
              <Button>
                <Globe className="mr-2 h-4 w-4" />
                Visit Help Center
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}