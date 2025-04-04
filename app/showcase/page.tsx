import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star, ArrowRight, Upload } from 'lucide-react';
import Link from 'next/link';

export default function ShowcasePage() {
  const projects = [
    {
      title: 'AI Code Assistant',
      description: 'A VS Code extension that helps developers write better code using AI suggestions.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
      tags: ['TypeScript', 'VS Code API', 'OpenAI'],
      stars: 1240,
      author: 'Sarah Chen',
      link: '#'
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive 3D visualization of neural networks for educational purposes.',
      image: 'https://images.unsplash.com/photo-1676277791608-ac54907a3b68?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'Three.js', 'TensorFlow.js'],
      stars: 856,
      author: 'Michael Rodriguez',
      link: '#'
    },
    {
      title: 'Code Generation Platform',
      description: 'Generate production-ready code from natural language descriptions.',
      image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070&auto=format&fit=crop',
      tags: ['Next.js', 'GPT-4', 'TypeScript'],
      stars: 2100,
      author: 'Alex Thompson',
      link: '#'
    }
  ];

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Project Showcase</h1>
            <p className="text-xl text-muted-foreground">
              Discover innovative projects built by our community using AI-powered development tools.
            </p>
          </div>
          <Link href="/showcase/upload">
            <Button size="lg" className="gap-2">
              <Upload className="h-5 w-5" />
              Upload Project
            </Button>
          </Link>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    By {project.author}
                  </span>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            View More Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}