'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  User,
  Settings,
  BookOpen,
  Star,
  Clock,
  Heart,
  MessageSquare,
  Share2,
  Code2,
  Bookmark,
  X,
  Camera,
  Mail,
  Briefcase,
  MapPin,
  Link as LinkIcon,
  Twitter,
  Github,
  Save,
  Moon,
  Sun,
  LogOut,
  User2,
  HelpCircle,
  Languages,
  Shield,
  Bell
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

export default function MembersPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = useState('English');
  const [profile, setProfile] = useState({
    name: 'Sarah Chen',
    title: 'Senior AI Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
    email: 'sarah.chen@example.com',
    location: 'San Francisco, CA',
    bio: 'Passionate about AI development and machine learning. Working on cutting-edge projects in natural language processing and computer vision.',
    company: 'TechCorp AI',
    website: 'https://sarahchen.dev',
    twitter: '@sarahchen',
    github: 'sarahchen',
    joinDate: 'March 2024',
    contributions: 156,
    followers: 243,
    following: 128
  });

  const activityFeed = [
    {
      type: 'comment',
      content: 'Commented on "Building Scalable AI Systems"',
      time: '2 hours ago'
    },
    {
      type: 'like',
      content: 'Liked "Neural Network Optimization Guide"',
      time: '4 hours ago'
    },
    {
      type: 'share',
      content: 'Shared "Advanced ML Techniques"',
      time: '1 day ago'
    }
  ];

  const savedContent = [
    {
      title: 'Advanced Model Architecture',
      type: 'Course',
      progress: 60
    },
    {
      title: 'AI Integration Best Practices',
      type: 'Article',
      saved: '2 days ago'
    },
    {
      title: 'Neural Network Visualizer',
      type: 'Project',
      saved: '1 week ago'
    }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="grid gap-6 md:grid-cols-[1fr,2fr]">
          <div className="space-y-6">
            <Card className="p-6">
              {isEditing ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="relative mx-auto h-24 w-24">
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                      <button className="absolute bottom-0 right-0 rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 space-y-3">
                      <Input
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        placeholder="Full Name"
                      />
                      <Input
                        value={profile.title}
                        onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                        placeholder="Title"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="pl-9"
                        placeholder="Email"
                      />
                    </div>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        value={profile.company}
                        onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                        className="pl-9"
                        placeholder="Company"
                      />
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                        className="pl-9"
                        placeholder="Location"
                      />
                    </div>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        value={profile.website}
                        onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                        className="pl-9"
                        placeholder="Website"
                      />
                    </div>
                    <div className="relative">
                      <Twitter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        value={profile.twitter}
                        onChange={(e) => setProfile({ ...profile, twitter: e.target.value })}
                        className="pl-9"
                        placeholder="Twitter"
                      />
                    </div>
                    <div className="relative">
                      <Github className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        value={profile.github}
                        onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                        className="pl-9"
                        placeholder="GitHub"
                      />
                    </div>
                    <Textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      placeholder="Bio"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                    <Button onClick={handleSaveProfile}>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="mx-auto h-24 w-24 rounded-full object-cover"
                  />
                  <h1 className="mt-4 text-2xl font-bold">{profile.name}</h1>
                  <p className="text-muted-foreground">{profile.title}</p>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center justify-center gap-1">
                      <Mail className="h-4 w-4" />
                      {profile.email}
                    </p>
                    <p className="flex items-center justify-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {profile.location}
                    </p>
                    <p className="flex items-center justify-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {profile.company}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>Settings</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <User2 className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={handleThemeChange}>
                            {theme === 'light' ? (
                              <Moon className="mr-2 h-4 w-4" />
                            ) : (
                              <Sun className="mr-2 h-4 w-4" />
                            )}
                            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <Languages className="mr-2 h-4 w-4" />
                              <span>Language</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem onClick={() => handleLanguageChange('English')}>
                                <span className={language === 'English' ? 'font-bold' : ''}>English</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleLanguageChange('Spanish')}>
                                <span className={language === 'Spanish' ? 'font-bold' : ''}>Spanish</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleLanguageChange('French')}>
                                <span className={language === 'French' ? 'font-bold' : ''}>French</span>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Shield className="mr-2 h-4 w-4" />
                            <span>Privacy Settings</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Bell className="mr-2 h-4 w-4" />
                            <span>Notification Preferences</span>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <HelpCircle className="mr-2 h-4 w-4" />
                          <span>Help & Support</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log Out</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )}

              <hr className="my-6" />

              <div className="grid grid-cols-3 text-center">
                <div>
                  <p className="text-2xl font-bold">{profile.contributions}</p>
                  <p className="text-sm text-muted-foreground">Contributions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{profile.followers}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{profile.following}</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Bookmark className="h-5 w-5" />
                Saved Content
              </h2>
              <div className="mt-4 space-y-4">
                {savedContent.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <Badge variant="secondary">{item.type}</Badge>
                    </div>
                    {'progress' in item ? (
                      <div className="h-2 w-20 rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.saved}</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <div className="mt-4 space-y-4">
                {activityFeed.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-muted p-2">
                      {activity.type === 'comment' && <MessageSquare className="h-4 w-4" />}
                      {activity.type === 'like' && <Heart className="h-4 w-4" />}
                      {activity.type === 'share' && <Share2 className="h-4 w-4" />}
                    </div>
                    <div>
                      <p>{activity.content}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold">Learning Progress</h2>
              <div className="mt-4 space-y-6">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-medium">Courses Completed</h3>
                    <Badge>4/6</Badge>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-full w-2/3 rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-medium">Projects Submitted</h3>
                    <Badge>3</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="h-auto py-4">
                      <div className="text-center">
                        <Code2 className="mx-auto h-6 w-6" />
                        <p className="mt-2 text-sm">AI Assistant</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="text-center">
                        <BookOpen className="mx-auto h-6 w-6" />
                        <p className="mt-2 text-sm">ML Model</p>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="text-center">
                        <Star className="mx-auto h-6 w-6" />
                        <p className="mt-2 text-sm">API Tool</p>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold">Achievements</h2>
              <div className="mt-4 grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="mx-auto rounded-full bg-primary/10 p-3">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-2 text-sm">Top Contributor</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto rounded-full bg-primary/10 p-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-2 text-sm">Course Master</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto rounded-full bg-primary/10 p-3">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-2 text-sm">Code Expert</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto rounded-full bg-primary/10 p-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <p className="mt-2 text-sm">Community Star</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}