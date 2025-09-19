import { Link } from "react-router-dom";
import { ExternalLink, User, FileText, Download, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const ResumeBuilder = () => {
  const resumeTemplates = [
    {
      id: 1,
      name: "ATS-Friendly Professional",
      category: "ATS Optimized",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=500&fit=crop",
      description: "Clean, professional resume optimized for Applicant Tracking Systems with high success rate",
      features: ["ATS Compatible", "Clean Layout", "Industry Standard", "Easy Editing"],
      rating: 4.9,
      downloads: 15000,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      name: "Creative Designer",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop",
      description: "Modern creative resume template perfect for designers and creative professionals",
      features: ["Visual Appeal", "Color Schemes", "Portfolio Integration", "Creative Layout"],
      rating: 4.8,
      downloads: 8500,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      name: "Tech Professional",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=500&fit=crop",
      description: "Technical resume template showcasing coding skills and projects effectively",
      features: ["Skills Highlight", "Project Showcase", "GitHub Integration", "Tech Stack"],
      rating: 4.9,
      downloads: 12000,
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      name: "Executive Level",
      category: "Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      description: "Premium executive resume template for senior-level positions and leadership roles",
      features: ["Executive Format", "Achievement Focus", "Leadership Skills", "Premium Design"],
      rating: 4.7,
      downloads: 6500,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const categories = [
    { name: "All Templates", count: 4 },
    { name: "ATS Optimized", count: 1 },
    { name: "Creative", count: 1 },
    { name: "Technology", count: 1 },
    { name: "Executive", count: 1 }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Resume Builder
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Create ATS-friendly resumes that get you noticed. Choose from professionally designed templates 
              and build your perfect resume in minutes.
            </p>
            
            {/* AI Features */}
            <div className="glass-card p-6 rounded-2xl max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold mb-4">🤖 AI-Powered Resume Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-primary/5">
                  <FileText className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">AI Resume Analyzer</div>
                  <div className="text-muted-foreground">Get instant feedback and score</div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5">
                  <User className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Smart Content Suggestions</div>
                  <div className="text-muted-foreground">AI-powered content recommendations</div>
                </div>
                <div className="p-4 rounded-lg bg-primary/5">
                  <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">ATS Optimization</div>
                  <div className="text-muted-foreground">Ensure your resume passes ATS</div>
                </div>
              </div>
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
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Templates Grid */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {resumeTemplates.map((template) => (
                <Card key={template.id} className="glass-card border-0 hover-lift hover-glow group overflow-hidden h-[700px]">
                  {/* Resume Preview Image */}
                  <div className="h-80 bg-gradient-to-br from-primary/10 to-purple-600/10 relative overflow-hidden">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${template.gradient} text-white`}>
                        {template.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 glass-card p-2 rounded-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{template.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="p-6">
                    <div className="text-center">
                      <CardTitle className="text-2xl font-bold mb-2">{template.name}</CardTitle>
                      <p className="text-muted-foreground mb-4">{template.description}</p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {template.downloads.toLocaleString()} downloads
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          5 min setup
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0">
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                      {template.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="glass-button border-primary/20 text-primary"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-gradient-primary hover:opacity-90 text-white">
                        <FileText className="mr-2 h-4 w-4" />
                        Use Template
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="glass-button"
                      >
                        <ExternalLink className="h-4 w-4" />
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
              <h2 className="text-4xl font-bold mb-6">Ready to Build Your Resume?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start with our AI-powered resume builder and create a resume that stands out from the crowd.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white shadow-glow text-lg px-8 py-4">
                  Start Building Resume
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="glass-button text-lg px-8 py-4">
                    Get Expert Help
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

export default ResumeBuilder;