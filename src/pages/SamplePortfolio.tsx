import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Mail, Linkedin, Phone, Award, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";

const SamplePortfolio = () => {
  const { id } = useParams();

  // Sample portfolio data - in real app, this would come from API
  const portfolioData = {
    1: {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      location: "San Francisco, CA",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      image: "https://images.unsplash.com/photo-1494790108755-2616b72944b0?w=400&h=400&fit=crop&crop=face",
      bio: "Passionate full-stack developer with 3+ years of experience building scalable web applications. Expertise in modern JavaScript frameworks, cloud technologies, and agile development practices.",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "AWS", level: 82 },
        { name: "Docker", level: 78 }
      ],
      experience: [
        {
          title: "Senior Full Stack Developer",
          company: "TechCorp Solutions",
          duration: "Jan 2022 - Present",
          description: "Led development of microservices architecture serving 100K+ users"
        },
        {
          title: "Full Stack Developer",
          company: "StartupXYZ",
          duration: "Jun 2020 - Dec 2021",
          description: "Built and maintained React-based web applications"
        }
      ],
      projects: [
        {
          name: "E-Commerce Platform",
          description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          github: "https://github.com",
          live: "https://example.com"
        },
        {
          name: "Task Management App",
          description: "Real-time task management application with WebSocket integration",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
          github: "https://github.com",
          live: "https://example.com"
        },
        {
          name: "Weather Dashboard",
          description: "Interactive weather dashboard with data visualization",
          technologies: ["React", "D3.js", "OpenWeather API"],
          github: "https://github.com",
          live: "https://example.com"
        }
      ],
      achievements: [
        "Winner - Best Full Stack Project, TechFest 2023",
        "AWS Certified Solutions Architect",
        "Published 5 technical articles on Medium",
        "Mentored 10+ junior developers"
      ],
      education: [
        {
          degree: "Bachelor of Technology in Computer Science",
          school: "Stanford University",
          year: "2020",
          gpa: "3.8/4.0"
        }
      ]
    }
  };

  const portfolio = portfolioData[Number(id) as keyof typeof portfolioData] || portfolioData[1];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/products">
            <Button variant="outline" className="glass-button">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolios
            </Button>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Profile Card */}
              <Card className="glass-card border-0">
                <CardContent className="p-6 text-center">
                  <img 
                    src={portfolio.image} 
                    alt={portfolio.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 ring-4 ring-primary/20"
                  />
                  <h1 className="text-2xl font-bold mb-2">{portfolio.name}</h1>
                  <p className="text-lg text-primary mb-4">{portfolio.role}</p>
                  <div className="flex items-center justify-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {portfolio.location}
                  </div>
                  
                  {/* Contact Buttons */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <Button size="sm" variant="outline" className="glass-button">
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline" className="glass-button">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="glass-button">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </Button>
                    <Button size="sm" variant="outline" className="glass-button">
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn
                    </Button>
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-white shadow-glow">
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolio.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {portfolio.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* About */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{portfolio.bio}</p>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {portfolio.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center text-muted-foreground text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Projects */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Featured Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    {portfolio.projects.map((project, index) => (
                      <div key={index} className="neo-card p-6 rounded-xl hover-lift">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">{project.name}</h3>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" asChild className="glass-button">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                            <Button size="sm" variant="outline" asChild className="glass-button">
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="glass-button">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  {portfolio.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <div className="flex items-center justify-between text-muted-foreground text-sm">
                        <span>Class of {edu.year}</span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="glass-card border-0 bg-gradient-primary/10">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Want a Portfolio Like This?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get your own professional portfolio designed with AI-powered tools and expert guidance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-glow">
                      Start Building Now
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" className="glass-button">
                        Get Custom Portfolio
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePortfolio;