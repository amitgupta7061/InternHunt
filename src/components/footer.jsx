import { Briefcase, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t lg:px-24">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                InternHunt
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your one-stop platform for finding the latest internship opportunities from top companies and platforms.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Link href='https://github.com/amitgupta7061'><Github className="h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link href="https://x.com/home?lang=en"><Twitter className="h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link href="https://www.linkedin.com/feed/"><Linkedin className="h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link href="mailto:amittgupta.dev@gmail.com"><Mail className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Browse Internships</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Company Profiles</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Career Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 InternHunt. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for students
          </p>
        </div>
      </div>
    </footer>
  );
}