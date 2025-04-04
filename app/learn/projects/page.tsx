'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  BookOpen,
  Code2,
  Brain,
  Bot,
  Sparkles,
  Terminal,
  Database,
  Network
} from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'AI Chatbot Assistant',
    description: 'Build a conversational AI assistant using modern language models.',
    difficulty: 'Beginner',
    duration: '2-3 hours',
    technologies: ['Next.js', 'OpenAI API', 'TailwindCSS'],
    topics: ['Natural Language Processing', 'API Integration', 'UI Design'],
    icon: Bot
  },
  {
    title: 'Image Recognition App',
    description: 'Create an application that can identify objects in images using AI.',
    difficulty: 'Intermediate',
    duration: '4-5 hours',
    technologies: ['React', 'TensorFlow.js', 'Computer Vision API'],
    topics: ['Computer Vision', 'Machine Learning', 'Frontend Development'],
    icon: Sparkles
  },
  {
    title: 'Code Generation Tool',
    description: 'Develop a tool that generates code snippets using AI models.',
    difficulty: 'Advanced',
    duration: '6-8 hours',
    technologies: ['TypeScript', 'GPT-4 API', 'Node.js'],
    topics: ['Code Generation', 'AST Parsing', 'AI Prompting'],
    icon: Terminal
  },
  {
    title: 'AI-Powered Database',
    description: 'Build a smart database system with AI-enhanced query capabilities.',
    difficulty: 'Advanced',
    duration: '8-10 hours',
    technologies: ['Python', 'SQLite', 'Machine Learning'],
    topics: ['Database Design', 'Natural Language Queries', 'Data Processing'],
    icon: Database
  },
  {
    title: 'Neural Network Visualizer',
    description: 'Create an interactive visualization tool for neural networks.',
    difficulty: 'Intermediate',
    duration: '5-6 hours',
    technologies: ['React', 'D3.js', 'TensorFlow.js'],
    topics: ['Data Visualization', 'Neural Networks', 'Interactive Graphics'],
    icon: Network
  }
];

export default function ProjectsPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/learn">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learning Hub
            </Button>
          </Link>
          <Badge variant="secondary">Projects</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Hands-on AI Projects</h1>
          <p className="text-xl text-muted-foreground">
            Apply your knowledge by building real-world AI applications.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <Badge variant="outline">{project.difficulty}</Badge>
                      </div>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Learning Topics:</p>
                    <ul className="grid gap-1.5 text-sm text-muted-foreground">
                      {project.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      Estimated time: {project.duration}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      <Button size="sm">
                        <Code2 className="mr-2 h-4 w-4" />
                        Start Project
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}