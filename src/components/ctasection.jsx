import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export function CTASection() {
  return (
    <section className="py-20 px-10 lg:px-24">
      <div className="container px-4">
        <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white">
          <div className="absolute inset-0 bg-black/10" />
          <CardContent className="relative p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Start Your Internship Journey?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of students who have already found their perfect internships. 
              Get started today and unlock your potential!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
              <div className="relative flex-1 w-full">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                />
              </div>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm opacity-75">
              Free to use • No credit card required • Join 50,000+ students
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}