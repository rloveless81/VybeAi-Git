'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Code2, BookOpen, Newspaper, Sparkles, ShoppingBag, Users, Wrench } from 'lucide-react';
import { AuthDialog } from '@/components/auth-dialog';

const navigation = [
  { name: 'Learn', href: '/learn', icon: BookOpen },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Showcase', href: '/showcase', icon: Sparkles },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Resources', href: '/resources', icon: Wrench },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold">VybeAi</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 text-muted-foreground transition-colors hover:text-foreground',
                    pathname === item.href && 'text-foreground'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="ml-auto flex items-center">
          <AuthDialog />
        </div>
      </div>
    </header>
  );
}