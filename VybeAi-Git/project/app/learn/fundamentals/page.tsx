'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  CheckCircle2,
  Code2,
  ArrowLeft,
  PlayCircle,
  BookMarked,
  Brain,
  Terminal,
  Lightbulb,
  Lock,
  Clock,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  progress: number;
  locked: boolean;
  lessons: Lesson[];
  completed: boolean;
}

interface Lesson {
  id: number;
  title: string;
  completed: boolean;
  duration: string;
}

export default function FundamentalsPage() {
  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: 'Introduction to AI Development',
      description: 'Learn the basics of AI and its role in modern development.',
      duration: '45 mins',
      progress: 0,
      locked: false,
      completed: false,
      lessons: [
        { id: 1, title: 'Understanding AI fundamentals', completed: false, duration: '15 mins' },
        { id: 2, title: 'Types of AI systems', completed: false, duration: '15 mins' },
        { id: 3, title: 'AI in software development', completed: false, duration: '15 mins' }
      ]
    },
    {
      id: 2,
      title: 'Setting Up Your AI Environment',
      description: 'Configure your development environment for AI projects.',
      duration: '60 mins',
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        { id: 1, title: 'Development tools overview', completed: false, duration: '20 mins' },
        { id: 2, title: 'Environment setup', completed: false, duration: '20 mins' },
        { id: 3, title: 'Testing your setup', completed: false, duration: '20 mins' }
      ]
    },
    {
      id: 3,
      title: 'Basic AI Integration',
      description: 'Start integrating AI capabilities into your applications.',
      duration: '90 mins',
      progress: 0,
      locked: true,
      completed: false,
      lessons: [
        { id: 1, title: 'API integration basics', completed: false, duration: '30 mins' },
        { id: 2, title: 'Making AI calls', completed: false, duration: '30 mins' },
        { id: 3, title: 'Handling responses', completed: false, duration: '30 mins' }
      ]
    }
  ]);

  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  const totalProgress = Math.round(
    (modules.reduce((acc, module) => acc + module.progress, 0) / (modules.length * 100)) * 100
  );

  const startModule = (module: Module) => {
    if (module.locked) {
      return;
    }
    setSelectedModule(module);
    setCurrentLesson(module.lessons[0]);
  };

  const completeLesson = (moduleId: number, lessonId: number) => {
    setModules(modules.map(module => {
      if (module.id === moduleId) {
        const updatedLessons = module.lessons.map(lesson => 
          lesson.id === lessonId ? { ...lesson, completed: true } : lesson
        );
        
        const completedLessons = updatedLessons.filter(l => l.completed).length;
        const progress = Math.round((completedLessons / module.lessons.length) * 100);
        const completed = progress === 100;

        // Unlock next module if this one is completed
        let nextModule = modules.find(m => m.id === module.id + 1);
        if (completed && nextModule) {
          nextModule.locked = false;
        }

        return {
          ...module,
          lessons: updatedLessons,
          progress,
          completed
        };
      }
      return module;
    }));
  };

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
          <Badge variant="secondary">Fundamentals</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">AI Development Fundamentals</h1>
          <p className="text-xl text-muted-foreground">
            Master the essential concepts and practices of AI-powered development.
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-xl font-semibold">Course Overview</h2>
                  <p className="text-sm text-muted-foreground">3 modules • 3.5 hours total</p>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Progress value={totalProgress} className="w-[100px]" />
                <span className="text-sm text-muted-foreground">{totalProgress}% complete</span>
              </div>
            </div>
          </Card>

          {modules.map((module, index) => (
            <Card key={index} className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                  {module.locked ? (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => startModule(module)}>
                          <PlayCircle className="mr-2 h-4 w-4" />
                          {module.completed ? 'Review Module' : 'Start Module'}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{module.title}</DialogTitle>
                          <DialogDescription>
                            Select a lesson to begin or continue your learning journey.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between rounded-lg border p-4"
                            >
                              <div className="flex items-center gap-3">
                                {lesson.completed ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                                ) : (
                                  <PlayCircle className="h-5 w-5 text-primary" />
                                )}
                                <div>
                                  <p className="font-medium">{lesson.title}</p>
                                  <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                                </div>
                              </div>
                              <Button
                                variant={lesson.completed ? "outline" : "default"}
                                onClick={() => completeLesson(module.id, lesson.id)}
                              >
                                {lesson.completed ? 'Review' : 'Start'}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookMarked className="h-4 w-4" />
                    {module.lessons.length} lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </div>
                  {module.progress > 0 && (
                    <div className="flex items-center gap-2">
                      <Progress value={module.progress} className="w-[100px]" />
                      <span>{module.progress}%</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="flex items-center gap-2 rounded-lg border p-3"
                    >
                      {module.locked ? (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      ) : lesson.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className={module.locked ? 'text-muted-foreground' : ''}>
                        {lesson.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">Ready to begin?</h3>
                <p className="text-muted-foreground">
                  Start your journey into AI development today.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" disabled={modules[0].completed}>
                    <PlayCircle className="mr-2 h-4 w-4" />
                    {modules[0].completed ? 'Completed' : 'Start First Module'}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{modules[0].title}</DialogTitle>
                    <DialogDescription>
                      Select a lesson to begin your learning journey.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    {modules[0].lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex items-center gap-3">
                          {lesson.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <PlayCircle className="h-5 w-5 text-primary" />
                          )}
                          <div>
                            <p className="font-medium">{lesson.title}</p>
                            <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                          </div>
                        </div>
                        <Button
                          variant={lesson.completed ? "outline" : "default"}
                          onClick={() => completeLesson(1, lesson.id)}
                        >
                          {lesson.completed ? 'Review' : 'Start'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}