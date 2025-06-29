'use client';

import { useState } from 'react';
import { MapPin, Clock, DollarSign, Building, ExternalLink, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function JobsSection() {
  const [filter, setFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp',
      location: 'Mumbai, India',
      type: 'Remote',
      duration: '6 months',
      stipend: '₹25,000/month',
      platform: 'Internshala',
      postedTime: '2 hours ago',
      tags: ['React', 'JavaScript', 'CSS'],
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'DataMinds',
      location: 'Bangalore, India',
      type: 'Hybrid',
      duration: '4 months',
      stipend: '₹30,000/month',
      platform: 'Unstop',
      postedTime: '5 hours ago',
      tags: ['Python', 'Machine Learning', 'SQL'],
      gradient: 'from-green-500 to-blue-500',
    },
    {
      id: 3,
      title: 'Digital Marketing Intern',
      company: 'GrowthLab',
      location: 'Delhi, India',
      type: 'Office',
      duration: '3 months',
      stipend: '₹20,000/month',
      platform: 'LinkedIn',
      postedTime: '8 hours ago',
      tags: ['SEO', 'Social Media', 'Analytics'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Mobile App Developer',
      company: 'AppVenture',
      location: 'Pune, India',
      type: 'Remote',
      duration: '6 months',
      stipend: '₹28,000/month',
      platform: 'Internshala',
      postedTime: '12 hours ago',
      tags: ['Flutter', 'Dart', 'Firebase'],
      gradient: 'from-yellow-500 to-red-500',
    },
    {
      id: 5,
      title: 'UI/UX Design Intern',
      company: 'DesignStudio',
      location: 'Chennai, India',
      type: 'Hybrid',
      duration: '5 months',
      stipend: '₹22,000/month',
      platform: 'Behance',
      postedTime: '18 hours ago',
      tags: ['Figma', 'Prototyping', 'User Research'],
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      id: 6,
      title: 'Content Writing Intern',
      company: 'ContentCraft',
      location: 'Kolkata, India',
      type: 'Remote',
      duration: '4 months',
      stipend: '₹15,000/month',
      platform: 'Unstop',
      postedTime: '20 hours ago',
      tags: ['Writing', 'SEO', 'Research'],
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.platform.toLowerCase() === filter);

  return (
    <section id="jobs" className="py-20 lg:px-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Latest Internships{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Posted in 24 Hours
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Fresh opportunities updated every hour from top platforms. Don't miss out on your dream internship!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="internshala">Internshala</SelectItem>
                <SelectItem value="unstop">Unstop</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="behance">Behance</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="secondary" className="text-sm">
              <Clock className="mr-1 h-3 w-3" />
              Updated 5 minutes ago
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="group hover:shadow-xl transition-all duration-300  bg-background/80 backdrop-blur overflow-hidden border">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {job.platform}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="mr-1 h-3 w-3" />
                        {job.postedTime}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{job.company}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{job.location} • {job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 dark:text-green-400">{job.stipend}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {job.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full transition-transform">
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All {jobs.length > 6 ? `${jobs.length - 6}+ More` : ''} Internships
          </Button>
        </div>
      </div>
    </section>
  );
}