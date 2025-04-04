import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { MatrixBackground } from '@/components/matrix-background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VybeAi - AI-Powered Coding Community',
  description: 'Educational platform and marketplace for the vibe coding community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MatrixBackground />
          <Navigation />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}