import { Link } from "react-router-dom";
import { ExternalLink, Github, Globe, User, Code, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const Products = () => {
  const portfolioSamples = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1494790108755-2616b72944b0?w=400&h=400&fit=crop&crop=face",
      description: "Modern web developer portfolio with React, Node.js, and cloud deployment expertise",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Alex Chen",
      role: "Data Scientist",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Analytics-focused portfolio showcasing machine learning projects and data visualizations",
      technologies: ["Python", "TensorFlow", "Pandas", "Power BI"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "UI/UX Designer",
      category: "Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Creative design portfolio with stunning visuals and user experience case studies",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      id: 4,
      name: "David Kumar",
      role: "Mobile Developer",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Cross-platform mobile app developer with React Native and Flutter expertise",
      technologies: ["React Native", "Flutter", "Firebase", "Kotlin"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const categories = [
    { name: "All", icon: <Globe className="h-4 w-4" />, count: 4 },
    { name: "Web Development", icon: <Code className="h-4 w-4" />, count: 1 },
    { name: "Data Science", icon: <Briefcase className="h-4 w-4" />, count: 1 },
    { name: "Design", icon: <User className="h-4 w-4" />, count: 1 },
    { name: "Mobile Development", icon: <GraduationCap className="h-4 w-4" />, count: 1 }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Portfolio Samples
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore our collection of professionally designed portfolios that have helped students 
              land their dream jobs at top companies.
            </p>
            
            {/* Reference Drive Link */}
            <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto mb-12">
              <h3 className="text-xl font-semibold mb-4">📁 500+ Reference Portfolios Available</h3>
              <p className="text-muted-foreground mb-4">
                Access our complete collection of portfolio templates and resume samples
              </p>
              <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-glow">
                <ExternalLink className="mr-2 h-4 w-4" />
                View All References (Google Drive)
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                * Link will be updated with actual Google Drive URL
              </p>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`glass-button ${index === 0 ? 'bg-gradient-primary text-white' : ''}`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {portfolioSamples.map((portfolio) => (
                <Card key={portfolio.id} className="glass-card border-0 hover-lift hover-glow group overflow-hidden h-[600px]">
                  {/* Portfolio Preview Image */}
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-purple-600/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h3 className="text-lg font-semibold mb-2">{portfolio.name}'s Portfolio</h3>
                        <p className="text-sm text-muted-foreground">Modern Portfolio Design</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="p-6">
                    <div className="text-center">
                      <CardTitle className="text-2xl font-bold mb-2">{portfolio.name}</CardTitle>
                      <p className="text-muted-foreground text-lg mb-3">{portfolio.role}</p>
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        {portfolio.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0">
                    <p className="text-muted-foreground mb-6 text-center">{portfolio.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                      {portfolio.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="glass-button border-primary/20 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Link to={`/sample-portfolio/${portfolio.id}`} className="flex-1">
                        <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                          <User className="mr-2 h-4 w-4" />
                          View Portfolio
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="glass-button"
                      >
                        <a href={portfolio.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 rounded-3xl">
              <h2 className="text-4xl font-bold mb-6">Ready to Create Your Portfolio?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get started with our AI-powered platform and create a portfolio that stands out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow text-lg px-8 py-4">
                    Get Custom Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;