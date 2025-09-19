import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  FileText, 
  Github, 
  Award, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Timer,
  Phone,
  Mail,
  MessageCircle,
  Zap,
  Target,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import founderImage from "@/assets/founder-profile.png";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Resume Analyzer",
      description: "Get intelligent feedback on your resume with AI-powered scoring and suggestions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "ATS-Friendly Templates",
      description: "Professional resume templates optimized for Applicant Tracking Systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github className="h-8 w-8" />,
      title: "GitHub Integration",
      description: "Automatically import your projects and showcase your coding journey",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Placement Tracker",
      description: "Monitor your placement readiness with comprehensive progress tracking",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      content: "This platform helped me land my dream job! The AI resume analyzer was incredibly helpful.",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "Data Scientist at Microsoft",
      content: "The GitHub integration saved me hours of work. My portfolio looks amazing now!",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Success Stories" },
    { number: "3", label: "U.S. Clients Deployed" },
    { number: "95%", label: "Placement Success Rate" },
    { number: "1000+", label: "Templates Available" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-primary text-white border-0">
              <Sparkles className="h-4 w-4 mr-2" />
              Launch Offer - Limited Time!
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-slide-up">
              Build Your Dream
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
              AI-powered resume builder and portfolio platform for students. 
              Get placement-ready with intelligent analysis and beautiful templates.
            </p>
            
            {/* Countdown Timer */}
            <div className="glass-card p-6 rounded-2xl max-w-md mx-auto mb-8 animate-glow">
              <div className="flex items-center justify-center mb-4">
                <Timer className="h-5 w-5 text-accent mr-2" />
                <span className="text-sm font-medium text-accent">Special Launch Offer Ends In:</span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="neo-card p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                  <div className="text-xs text-muted-foreground">Days</div>
                </div>
                <div className="neo-card p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                  <div className="text-xs text-muted-foreground">Hours</div>
                </div>
                <div className="neo-card p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                  <div className="text-xs text-muted-foreground">Minutes</div>
                </div>
                <div className="neo-card p-3 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                  <div className="text-xs text-muted-foreground">Seconds</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/products">
                <Button variant="outline" size="lg" className="glass-button text-lg px-8 py-4">
                  View Sample Portfolios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Special Launch Pricing</h2>
          <div className="glass-card p-8 rounded-3xl max-w-md mx-auto hover-lift">
            <div className="mb-6">
              <div className="text-6xl font-bold text-accent mb-2">₹250</div>
              <div className="text-lg text-muted-foreground line-through">₹999</div>
              <Badge className="bg-accent text-white">75% OFF</Badge>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-success mr-3" />
                <span>AI Resume Analysis</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-success mr-3" />
                <span>Unlimited Templates</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-success mr-3" />
                <span>GitHub Integration</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-success mr-3" />
                <span>Portfolio Website</span>
              </div>
            </div>
            <Button className="w-full bg-gradient-accent hover:opacity-90 text-white shadow-glow">
              Get Started Now
            </Button>
          </div>
          <p className="text-center mt-6 text-accent font-semibold">
            🎉 First 10 users get FREE Portfolio Website worth ₹5000!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need to stand out in placements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-0 hover-lift hover-glow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Your Success Partner</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hi! I'm the founder of PortfolioBuilder. Having successfully deployed 3 client portfolios 
                in the U.S. and helped hundreds of students land their dream jobs, I understand what 
                recruiters are looking for.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>3 U.S. Client Portfolios Successfully Deployed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>500+ Reference Portfolios Available</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>95% Placement Success Rate</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="bg-gradient-primary hover:opacity-90 text-white">
                  <a href="tel:9059086142">
                    <Phone className="mr-2 h-4 w-4" />
                    Call: 9059086142
                  </a>
                </Button>
                <Button asChild className="bg-gradient-accent hover:opacity-90 text-white">
                  <a href="https://wa.me/9059086142" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="glass-card p-8 rounded-3xl hover-lift">
                <img 
                  src={founderImage} 
                  alt="Founder" 
                  className="w-64 h-64 object-cover rounded-2xl mx-auto mb-4 shadow-glow"
                />
                <h3 className="text-2xl font-bold mb-2">Kesava Masanam</h3>
                <p className="text-muted-foreground mb-4">Founder & Portfolio Expert</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="sm" asChild className="glass-button">
                    <a href="mailto:masanamkesava@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="glass-button">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">See what our users are saying</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-0 hover-lift">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Future?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who have already transformed their careers with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow text-lg px-8 py-4">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="glass-button text-lg px-8 py-4">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Button variant="ghost" size="sm" asChild className="glass-button">
              <a href="mailto:masanamkesava@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="glass-button">
              <a href="tel:9059086142">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="glass-button">
              <a href="https://wa.me/9059086142" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">
            © 2024 PortfolioBuilder. Built with ❤️ for students.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
