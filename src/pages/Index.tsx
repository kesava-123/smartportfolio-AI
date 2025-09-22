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
  Sparkles,
  ExternalLink,
  Heart,
  Shield,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import founderImage from "@/assets/kesava-profile.png";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="flex gap-3 mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  AI-Powered Platform
                </Badge>
                <Badge className="bg-success/20 text-success border-success/30 px-4 py-2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  3 US Clients Deployed
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">AI-Powered</span>
                <br />
                <span className="text-foreground">Portfolio & Resume</span>
                <br />
                <span className="text-primary">Builder</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Transform your career with our intelligent platform. Build ATS-friendly resumes, 
                stunning portfolios, and get AI-powered insights to land your dream job.
              </p>

              {/* Rating & Success Rate */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">100% Success Rate</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">₹250</div>
                  <div className="text-xl text-muted-foreground line-through">₹999</div>
                  <Badge className="bg-accent text-white px-3 py-1">75% OFF</Badge>
                </div>
                <p className="text-success font-semibold">
                  First 10 users get FREE Portfolio Website!
                </p>
                
                {/* Countdown */}
                <div className="text-accent">
                  Offer ends in: <span className="font-bold">{timeLeft.days} Days</span>
                </div>
              </div>

              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white shadow-glow text-lg px-8 py-4"
                >
                  Get Started Free
                </Button>
              </Link>
              
              {/* Business Hours */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4 text-center">Business Hours</h3>
                <div className="space-y-2 text-center">
                  <div className="flex justify-between text-sm">
                    <span>Mon - Fri:</span>
                    <span className="text-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Saturday:</span>
                    <span className="text-primary">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sunday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Profile with Floating Elements */}
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-80 h-80 mx-auto">
              <div className="relative">
                <img
                  src={founderImage}
                  alt="Kesava Masanam - Founder"
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl ring-4 ring-primary/20"
                />
                
                {/* Floating stats */}
                <div className="absolute -top-4 -left-4 glass-card p-4 rounded-xl animate-float">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">US Clients</div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl animate-float-delayed">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Success</div>
                </div>
                
                <div className="absolute top-1/2 -left-8 glass-card p-3 rounded-lg animate-float">
                  <div className="text-lg font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Portfolios</div>
                </div>
              </div>
              </div>
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

        {/* Portfolio Samples */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Portfolio Samples</h2>
              <p className="text-xl text-muted-foreground">
                See how our students showcase their skills
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Tech Portfolio",
                  description: "Modern developer portfolio with projects showcase",
                  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
                },
                {
                  title: "Design Portfolio",
                  description: "Creative designer portfolio with stunning visuals",
                  image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
                },
                {
                  title: "Data Science Portfolio",
                  description: "Analytics-focused portfolio with project insights",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                }
              ].map((sample, index) => (
                <Card key={index} className="glass-card border-0 overflow-hidden hover-lift group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{sample.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{sample.description}</p>
                    <Link to="/products">
                      <Button variant="outline" size="sm" className="glass-button">
                        View Sample
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
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
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PortfolioAI</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Transform your career with our AI-powered portfolio and resume builder. Join thousands of students who have successfully landed their dream jobs.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9059086142
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/resume-builder" className="text-gray-400 hover:text-purple-300 transition-colors">Resume Builder</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-purple-300 transition-colors">AI Tools</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-purple-300 transition-colors">Portfolio</Link></li>
                <li><Link to="#pricing" className="text-gray-400 hover:text-purple-300 transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-purple-300 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-1">Sample Portfolios <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-1">Resume Templates <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-1">GitHub Repos <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-300 transition-colors flex items-center gap-1">Success Stories <ExternalLink className="w-3 h-3" /></a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3 text-sm">
                <div className="text-gray-400">
                  <strong className="text-white">Business Hours:</strong><br />
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat - Sun: 10:00 AM - 4:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-green-500/10 to-purple-500/10 border border-green-500/20 rounded-lg p-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-center">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Special Launch Offer</span>
            </div>
            <p className="text-gray-300 text-sm mt-1 text-center">
              First 10 users get FREE Portfolio Website worth ₹500. Only 5 days left!
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Ready to Transform Your Career?</h3>
                <p className="text-gray-400 text-sm">Contact Kesava Masanam for personalized portfolio and resume solutions</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">
                  <Mail className="w-4 h-4 mr-2" />
                  masanamkesava@gmail.com
                </Button>
                <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>© 2025 PortfolioAI. All rights reserved.</span>
                <span>•</span>
                <span className="flex items-center gap-1">Made with <Heart className="w-4 h-4 text-red-500" /> by Kesava Masanam</span>
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="#" className="text-gray-400 hover:text-purple-300 transition-colors">Privacy Policy</Link>
                <Link to="#" className="text-gray-400 hover:text-purple-300 transition-colors">Terms of Service</Link>
                <Link to="#" className="text-gray-400 hover:text-purple-300 transition-colors">Support</Link>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-white/10 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Trusted by students from top colleges</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>98% job success rate</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>3 US clients successfully deployed</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
