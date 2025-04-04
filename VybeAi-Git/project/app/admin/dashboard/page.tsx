'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Users,
  Settings,
  BarChart,
  Shield,
  Bell,
  AlertTriangle,
  Database,
  Server,
  Activity,
  User,
  Clock,
  Search,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Trash2,
  Edit,
  Lock,
  Upload,
  BookOpen,
  Newspaper,
  Sparkles,
  ShoppingBag,
  MessageSquare,
  FileText,
  PlusCircle,
  FolderPlus,
  Settings2,
  UserPlus,
  BookmarkPlus,
  Send,
  Circle,
  X,
  Check,
  Moon,
  Sun,
  LogOut,
  User2,
  HelpCircle,
  Languages
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

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [messageInput, setMessageInput] = useState('');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New User Registration',
      message: 'Sarah Chen has joined the platform',
      time: '2 minutes ago',
      type: 'info',
      read: false
    },
    {
      id: 2,
      title: 'System Alert',
      message: 'Database backup completed successfully',
      time: '10 minutes ago',
      type: 'success',
      read: false
    },
    {
      id: 3,
      title: 'Security Warning',
      message: 'Multiple failed login attempts detected',
      time: '15 minutes ago',
      type: 'warning',
      read: false
    }
  ]);

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = useState('English');

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const clearNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const stats = [
    { title: 'Total Users', value: '12,345', icon: Users, change: '+12%' },
    { title: 'Active Projects', value: '789', icon: Activity, change: '+5%' },
    { title: 'System Load', value: '67%', icon: Server, change: '-3%' },
    { title: 'Storage Used', value: '82%', icon: Database, change: '+8%' }
  ];

  const recentUsers = [
    { name: 'Sarah Chen', email: 'sarah@example.com', role: 'Developer', status: 'active' },
    { name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'active' },
    { name: 'Emma Wilson', email: 'emma@example.com', role: 'Developer', status: 'inactive' }
  ];

  const systemAlerts = [
    { type: 'warning', message: 'Storage capacity reaching 85% threshold', time: '5 minutes ago' },
    { type: 'error', message: 'User permissions conflict detected', time: '15 minutes ago' },
    { type: 'info', message: 'Database backup scheduled for tonight', time: '1 hour ago' }
  ];

  const messages = [
    {
      id: 1,
      user: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
      message: 'Need help with the new course upload feature',
      time: '10 minutes ago',
      status: 'unread'
    },
    {
      id: 2,
      user: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop',
      message: 'Weekly admin meeting at 2 PM today',
      time: '1 hour ago',
      status: 'read'
    },
    {
      id: 3,
      user: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop',
      message: 'Updated the documentation for API v2',
      time: '2 hours ago',
      status: 'read'
    }
  ];

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your platform and users</p>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[380px]">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs"
                      onClick={markAllAsRead}
                    >
                      Mark all as read
                    </Button>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    No notifications
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <DropdownMenuItem
                      key={notification.id}
                      className="flex items-start gap-2 p-4"
                    >
                      <div className={`mt-1 rounded-full p-1 ${
                        notification.type === 'warning' ? 'bg-yellow-500/10 text-yellow-500' :
                        notification.type === 'success' ? 'bg-green-500/10 text-green-500' :
                        'bg-blue-500/10 text-blue-500'
                      }`}>
                        {notification.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> :
                         notification.type === 'success' ? <Check className="h-4 w-4" /> :
                         <Bell className="h-4 w-4" />}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => clearNotification(notification.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </DropdownMenuItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-5 w-5" />
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
                    <span>Security Settings</span>
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant={stat.change.startsWith('+') ? 'default' : 'destructive'}>
                    {stat.change}
                  </Badge>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Users</h2>
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

            <div className="mt-4 space-y-4">
              {recentUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Messages</h2>
              <Button variant="outline" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                New Message
              </Button>
            </div>

            <div className="mt-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="relative">
                    <img
                      src={message.avatar}
                      alt={message.user}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    {message.status === 'unread' && (
                      <Circle className="absolute -right-1 -top-1 h-3 w-3 fill-primary text-primary" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{message.user}</p>
                      <span className="text-sm text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{message.message}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <Input
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">System Alerts</h2>
              <Button variant="outline" size="sm">
                Clear All
              </Button>
            </div>

            <div className="mt-4 space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg border p-4">
                  <div className={`rounded-full p-2 ${
                    alert.type === 'warning' ? 'bg-yellow-500/10 text-yellow-500' :
                    alert.type === 'error' ? 'bg-red-500/10 text-red-500' :
                    'bg-blue-500/10 text-blue-500'
                  }`}>
                    {alert.type === 'warning' ? <AlertTriangle className="h-5 w-5" /> :
                     alert.type === 'error' ? <Shield className="h-5 w-5" /> :
                     <Bell className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{alert.message}</p>
                    <p className="text-sm text-muted-foreground">{alert.time}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
            <div className="mt-4 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Educational Content</h3>
                <div className="grid gap-2">
                  <Button className="justify-start">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    New Course Material
                  </Button>
                  <Button className="justify-start">
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    Add Tutorial
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Platform Content</h3>
                <div className="grid gap-2">
                  <Button className="justify-start">
                    <Newspaper className="mr-2 h-4 w-4" />
                    Publish News
                  </Button>
                  <Button className="justify-start">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add Product
                  </Button>
                  <Button className="justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Update Docs
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Administration</h3>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Manage Users
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Settings2 className="mr-2 h-4 w-4" />
                    System Config
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="col-span-2 p-6">
            <h2 className="text-lg font-semibold">System Performance</h2>
            <div className="mt-4 h-[300px] rounded-lg border bg-muted/10 p-4">
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">Performance Chart Placeholder</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}