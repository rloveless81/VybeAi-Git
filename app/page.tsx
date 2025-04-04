import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Sparkles, Users } from 'lucide-react';
import { AiChatDialog } from '@/components/ai-chat-dialog';

export default function Home() {
  return (
    <div className="relative">
      <div className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-4 text-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold sm:text-6xl">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                VybeAi
              </span>
            </h1>
            <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Join the future of coding with AI-powered learning, marketplace, and community platform.
              Build, learn, and grow together.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <AiChatDialog 
              trigger={
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              }
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-8">
            <Code2 className="h-12 w-12 text-blue-500" />
            <h2 className="text-xl font-semibold">Learn & Grow</h2>
            <p className="text-center text-muted-foreground">
              Access AI-powered tutorials and structured learning paths
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-8">
            <Sparkles className="h-12 w-12 text-purple-500" />
            <h2 className="text-xl font-semibold">Marketplace</h2>
            <p className="text-center text-muted-foreground">
              Buy and sell AI-generated code templates
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-8">
            <Users className="h-12 w-12 text-green-500" />
            <h2 className="text-xl font-semibold">Community</h2>
            <p className="text-center text-muted-foreground">
              Connect with fellow developers and share knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}