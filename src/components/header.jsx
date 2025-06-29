'use client';

import { useState } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-24">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              InternHunt
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#jobs" className="text-sm font-medium hover:text-primary transition-colors">
            Latest Jobs
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="hidden sm:inline-flex">
            <Link href="\dashboard">Get Started</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 px-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Features
              </a>
              <a href="#jobs" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Latest Jobs
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors py-2">
                About
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors py-2">
                Contact
              </a>
            </nav>
            <Button className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
