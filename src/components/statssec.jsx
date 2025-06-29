import { TrendingUp, Users, Building, Award } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Success Rate',
      description: 'Of our users land internships',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      value: '50K+',
      label: 'Active Students',
      description: 'Trust our platform',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Building,
      value: '2,500+',
      label: 'Partner Companies',
      description: 'Post opportunities daily',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Award,
      value: '25+',
      label: 'Platforms Integrated',
      description: 'For maximum coverage',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 dark:from-purple-950/10 dark:via-blue-950/10 dark:to-green-950/10 lg:px-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Thousands of Students
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the community of successful interns who found their dream opportunities through InternHunt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}