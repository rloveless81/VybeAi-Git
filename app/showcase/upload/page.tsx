'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowLeft,
  Search,
  Upload,
  Flame,
  Clock,
  Tag,
  Link as LinkIcon,
  Github,
  Image as ImageIcon,
  Plus,
  Trash2,
  Filter,
  ArrowUpDown
} from 'lucide-react';
import Link from 'next/link';

const suggestedTags = [
  'AI', 'Machine Learning', 'Neural Networks', 'Natural Language Processing',
  'Computer Vision', 'Deep Learning', 'Reinforcement Learning', 'Data Science'
];

const myProjects = [
  {
    title: 'AI Code Assistant',
    status: 'published',
    date: '2024-03-20',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=256&auto=format&fit=crop',
    tags: ['AI', 'Code Generation', 'TypeScript']
  },
  {
    title: 'Neural Network Visualizer',
    status: 'draft',
    date: '2024-03-19',
    image: 'https://images.unsplash.com/photo-1676277791608-ac54907a3b68?q=80&w=256&auto=format&fit=crop',
    tags: ['Neural Networks', 'Visualization', 'React']
  },
  {
    title: 'ML Model Training Dashboard',
    status: 'published',
    date: '2024-03-18',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=256&auto=format&fit=crop',
    tags: ['Machine Learning', 'Dashboard', 'Analytics']
  }
];

export default function UploadProjectPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setCustomTag('');
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const filteredProjects = myProjects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/showcase">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Showcase
            </Button>
          </Link>
          <Badge variant="secondary">Upload Project</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Share Your Project</h1>
          <p className="text-xl text-muted-foreground">
            Showcase your AI-powered project to the community.
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">My Projects</h2>
              <div className="flex gap-2">
                <select
                  className="rounded-md border bg-background px-3 py-1 text-sm"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as 'all' | 'published' | 'draft')}
                >
                  <option value="all">All</option>
                  <option value="published">Published</option>
                  <option value="draft">Drafts</option>
                </select>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
                >
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  {sortOrder === 'newest' ? 'Newest' : 'Oldest'}
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 rounded-md border bg-background px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search your projects..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-4">
              {filteredProjects.map((project, index) => (
                <div key={index} className="flex items-center gap-4 rounded-lg border p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{project.title}</h3>
                      <Badge variant={project.status === 'published' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">Project Details</h2>
                  <p className="text-sm text-muted-foreground">
                    Fill in the information about your project.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Title</label>
                    <Input placeholder="Enter project title" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      placeholder="Describe your project..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Links</label>
                    <div className="space-y-3">
                      <div className="relative">
                        <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Demo URL" className="pl-9" />
                      </div>
                      <div className="relative">
                        <Github className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="GitHub repository URL" className="pl-9" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Image</label>
                    <div className="flex items-center justify-center rounded-lg border border-dashed p-6">
                      <div className="text-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                        <div className="mt-4">
                          <Button>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Image
                          </Button>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">Project Tags</h2>
                  <p className="text-sm text-muted-foreground">
                    Add tags to help others find your project.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-1 rounded-full hover:bg-muted"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Input
                    value={customTag}
                    onChange={(e) => setCustomTag(e.target.value)}
                    placeholder="Add custom tag"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && customTag.trim()) {
                        e.preventDefault();
                        addTag(customTag.trim());
                      }
                    }}
                  />
                  <Button
                    variant="outline"
                    onClick={() => customTag.trim() && addTag(customTag.trim())}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Suggested Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {suggestedTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        onClick={() => addTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-end gap-4">
              <Button variant="outline">Save as Draft</Button>
              <Button>Publish Project</Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Flame className="h-5 w-5 text-orange-500" />
                Popular Tags
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Neural Networks</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">NLP</Badge>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Clock className="h-5 w-5" />
                Recent Projects
              </h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=256&auto=format&fit=crop"
                    alt="Project thumbnail"
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium">AI Code Assistant</p>
                    <p className="text-sm text-muted-foreground">by Sarah Chen</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1676277791608-ac54907a3b68?q=80&w=256&auto=format&fit=crop"
                    alt="Project thumbnail"
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-medium">Neural Network Visualizer</p>
                    <p className="text-sm text-muted-foreground">by Michael Rodriguez</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}