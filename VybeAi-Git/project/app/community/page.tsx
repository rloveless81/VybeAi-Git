import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  MessageSquare,
  Calendar,
  ArrowRight,
  Heart,
  Share2,
  BookOpen,
  Trophy,
  Search,
  Briefcase,
  DollarSign,
  Clock,
  Star,
  Filter
} from 'lucide-react';

export default function CommunityPage() {
  const discussions = [
    {
      title: 'Best practices for AI model integration',
      author: 'Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
      replies: 24,
      likes: 156,
      category: 'AI Development',
      timeAgo: '2 hours ago'
    },
    {
      title: 'How to optimize large language models for production',
      author: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop',
      replies: 18,
      likes: 92,
      category: 'Performance',
      timeAgo: '4 hours ago'
    },
    {
      title: 'Building ethical AI systems: Guidelines and best practices',
      author: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop',
      replies: 31,
      likes: 203,
      category: 'Ethics',
      timeAgo: '6 hours ago'
    }
  ];

  const events = [
    {
      title: 'AI Developers Meetup',
      date: 'March 25, 2024',
      time: '6:00 PM PST',
      attendees: 128,
      location: 'Virtual',
      type: 'Online Event'
    },
    {
      title: 'Machine Learning Workshop',
      date: 'March 28, 2024',
      time: '2:00 PM PST',
      attendees: 85,
      location: 'Virtual',
      type: 'Workshop'
    }
  ];

  const services = [
    {
      type: 'Offering',
      title: 'Senior AI Developer Available for Consulting',
      description: 'Specialized in LLM integration and optimization. 8+ years of experience in AI/ML.',
      rate: '$150/hour',
      availability: 'Part-time',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'LLMs'],
      author: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop',
      rating: 4.9,
      reviews: 24
    },
    {
      type: 'Seeking',
      title: 'Looking for AI Integration Expert',
      description: 'Need help integrating GPT-4 into our existing Node.js application.',
      budget: '$2000-3000',
      duration: '2-3 weeks',
      skills: ['OpenAI API', 'Node.js', 'API Integration'],
      author: 'Sarah Miller',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
      urgency: 'High'
    },
    {
      type: 'Offering',
      title: 'ML Model Optimization Specialist',
      description: 'Expert in optimizing and deploying machine learning models for production.',
      rate: '$130/hour',
      availability: 'Full-time',
      skills: ['PyTorch', 'Model Optimization', 'MLOps'],
      author: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop',
      rating: 4.8,
      reviews: 18
    }
  ];

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Community Hub</h1>
          <p className="text-xl text-muted-foreground">
            Connect with fellow developers, share knowledge, and grow together.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-1 items-center gap-2 rounded-md border bg-background px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Button>Start Discussion</Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{discussion.category}</Badge>
                        <span className="text-sm text-muted-foreground">{discussion.timeAgo}</span>
                      </div>
                      <h3 className="text-lg font-semibold">{discussion.title}</h3>
                      <p className="text-sm text-muted-foreground">Posted by {discussion.author}</p>
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          {discussion.replies} Replies
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Heart className="mr-2 h-4 w-4" />
                          {discussion.likes} Likes
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Services Marketplace</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button size="sm">Post a Service</Button>
                </div>
              </div>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={service.avatar}
                        alt={service.author}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge variant={service.type === 'Offering' ? 'default' : 'secondary'}>
                              {service.type}
                            </Badge>
                            <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                          </div>
                          {'rate' in service ? (
                            <div className="text-right">
                              <p className="font-semibold text-green-500">{service.rate}</p>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 text-yellow-500" />
                                {service.rating} ({service.reviews} reviews)
                              </div>
                            </div>
                          ) : (
                            <div className="text-right">
                              <p className="font-semibold text-green-500">{service.budget}</p>
                              <p className="text-sm text-muted-foreground">
                                <Clock className="mr-1 inline-block h-4 w-4" />
                                {service.duration}
                              </p>
                            </div>
                          )}
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.skills.map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-sm text-muted-foreground">
                            Posted by {service.author}
                          </p>
                          <Button>
                            {service.type === 'Offering' ? (
                              <>
                                <Briefcase className="mr-2 h-4 w-4" />
                                Hire Now
                              </>
                            ) : (
                              <>
                                <DollarSign className="mr-2 h-4 w-4" />
                                Submit Proposal
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </h2>
              <div className="mt-4 space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.date} at {event.time}
                        </p>
                      </div>
                      <Badge>{event.type}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.attendees} attending
                    </div>
                    {index < events.length - 1 && <hr className="my-4" />}
                  </div>
                ))}
                <Button variant="outline" className="mt-2 w-full">
                  View All Events
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Trophy className="h-5 w-5" />
                Top Contributors
              </h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop"
                    alt="David Kim"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">David Kim</p>
                    <p className="text-sm text-muted-foreground">324 contributions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
                    alt="Emily Chen"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Emily Chen</p>
                    <p className="text-sm text-muted-foreground">256 contributions</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <BookOpen className="h-5 w-5" />
                Resources
              </h2>
              <div className="mt-4 space-y-3">
                <Button variant="outline" className="w-full justify-between">
                  Community Guidelines
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Code of Conduct
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  FAQ
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}