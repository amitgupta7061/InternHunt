import { ArrowRight, Play, Star, Users, Briefcase, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-green-950/20" />
      <div className="relative container px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600">
            <Star className="mr-1 h-3 w-3" />
            #1 Internship Aggregator
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Find Your Perfect{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Internship
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the latest internships from top platforms like Internshala, Unstop, and more. 
            All opportunities posted in the last 24 hours, aggregated in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
              Start Your Search
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-3">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Internships</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white mb-3">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-muted-foreground">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-purple-500 text-white mb-3">
                <Clock className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold">24hrs</div>
              <div className="text-sm text-muted-foreground">Fresh Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
