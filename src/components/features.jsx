import { Search, Filter, Bell, BarChart3, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find internships with advanced filters including location, duration, stipend, and more.',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Bell,
      title: 'Real-time Alerts',
      description: 'Get instant notifications for new internships matching your preferences.',
      gradient: 'from-blue-500 to-green-500',
    },
    {
      icon: Globe,
      title: 'Multi-platform Aggregation',
      description: 'Access opportunities from Internshala, Unstop, LinkedIn, and 20+ other platforms.',
      gradient: 'from-green-500 to-yellow-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track your applications, success rate, and get insights to improve your profile.',
      gradient: 'from-yellow-500 to-red-500',
    },
    {
      icon: Filter,
      title: 'Smart Filtering',
      description: 'AI-powered recommendations based on your skills, interests, and career goals.',
      gradient: 'from-red-500 to-purple-500',
    },
    {
      icon: Shield,
      title: 'Verified Opportunities',
      description: 'All internships are verified and screened to ensure legitimacy and quality.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/50 lg:px-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Land Your Dream Internship
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need to find, apply, and secure the perfect internship opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur">
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}