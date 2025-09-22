import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Phone,
  Award,
  Calendar,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";

const SamplePortfolio = () => {
  const { id } = useParams();

  // Small CSS helper for a hexagon avatar
  const HexCSS = () => (
    <style>{`
      .hex-mask {
        clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%);
      }
    `}</style>
  );

  // Updated portfolio data
  const portfolioData = {
    1: {
      name: "Harshini Adusumilli",
      role: "Full Stack Developer",
      location: "Hyderabad, IN",
      email: "kathyaini.dev@example.com",
      phone: "+91 90000 00001",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=640&h=640&fit=crop&crop=faces",
      bio:
        "Modern dark-theme portfolio with a hexagonal profile image and clean layout. Features responsive design and smooth animations. Full-stack engineer focusing on scalable web apps with .NET 8 and React.",
      skills: [
        { name: ".NET 8 / ASP.NET", level: 92 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 86 },
        { name: "MongoDB", level: 84 },
        { name: "C#", level: 92 },
        { name: "Azure", level: 82 },
        { name: "Kafka", level: 78 },
        { name: "EF Core", level: 88 },
        { name: "OAuth2", level: 80 },
        { name: "Angular", level: 70 },
      ],
      experience: [
        {
          title: "Senior Full Stack Developer",
          company: "Contoso Systems",
          duration: "Jan 2023 - Present",
          description:
            "Built microservices with .NET 8 + EF Core, React frontends, and Kafka-based event pipelines; reduced page TTI by 35%.",
        },
        {
          title: "Software Engineer",
          company: "Northwind Tech",
          duration: "Aug 2020 - Dec 2022",
          description:
            "Developed secure OAuth2 flows, optimized MongoDB queries, and led Azure deployments.",
        },
      ],
      projects: [
        {
          name: "E-Commerce Suite",
          description:
            "Modular e-commerce with .NET 8 APIs, React storefront, Kafka events, and MongoDB product catalogs.",
          technologies: ["React", "ASP.NET", ".NET 8", "Kafka", "MongoDB", "EF Core"],
         // github: "https://github.com",
          //live: "https://example.com",
        },
        {
          name: "Real-time Dashboard",
          description:
            "SignalR + React dashboard with role-based access and OAuth2; deployed on Azure App Service.",
          technologies: ["React", "SignalR", "Azure", "OAuth2"],
          //github: "https://github.com",
          //live: "https://example.com",
        },
      ],
      achievements: [
        "Speaker – Azure Developer Community (2024)",
        "Implemented SSO via OAuth2 across 5 services",
        "Cut infra cost 18% with Azure autoscale",
        "Mentored 8 junior devs",
      ],
      education: [
        {
          degree: "B.Tech, Computer Science",
          school: "JNTU Hyderabad",
          year: "2020",
          gpa: "8.6/10",
        },
      ],
    },
    2: {
      name: "Priya",
      role: "Database Administrator",
      location: "Bengaluru, IN",
      email: "priya.dba@example.com",
      phone: "+91 90000 00002",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=640&h=640&fit=crop&crop=faces",
      bio:
        "Creative and colorful portfolio showcasing design-minded data systems with interactive elements and beautiful typography. Passionate about performance, reliability, and data governance.",
      skills: [
        { name: "SQL / PL/SQL", level: 94 },
        { name: "Python", level: 85 },
        { name: "Hadoop", level: 82 },
        { name: "Hive", level: 80 },
        { name: "Spark", level: 78 },
        { name: "Pandas/Numpy", level: 84 },
        { name: "Matplotlib", level: 76 },
      ],
      experience: [
        {
          title: "Database Administrator",
          company: "DataCraft Labs",
          duration: "Feb 2022 - Present",
          description:
            "Owned performance tuning and backup/DR; implemented partitioning and CDC pipelines.",
        },
        {
          title: "Data Engineer",
          company: "InsightWorks",
          duration: "Jul 2019 - Jan 2022",
          description:
            "Built Hive/Spark ETL and warehouse models; automated quality checks with Python.",
        },
      ],
      projects: [
        {
          name: "DW Modernization",
          description:
            "Migrated on-prem warehouse to Hive/Spark with Python orchestration; 40% faster analytics.",
          technologies: ["Python", "SQL", "Hive", "Spark"],
        //  github: "https://github.com",
          //live: "https://example.com",
        },
        {
          name: "Monitoring & Alerting",
          description:
            "Custom DB health dashboards and anomaly detection using Pandas and Matplotlib.",
          technologies: ["Python", "Pandas", "Matplotlib"],
         // github: "https://github.com",
          //live: "https://example.com",
        },
      ],
      achievements: [
        "Restored critical DB in <10 min RTO",
        "Cut query costs by 25% via indexing/partitioning",
        "Authored internal DBA playbook",
        "Trained 30+ analysts on SQL best practices",
      ],
      education: [
        {
          degree: "B.E., Information Science",
          school: "BMS College of Engineering",
          year: "2019",
          gpa: "8.4/10",
        },
      ],
    },
    3: {
      name: "Sai Ram",
      role: "Frontend Developer",
      location: "Chennai, IN",
      email: "sairam.ui@example.com",
      phone: "+91 90000 00003",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=640&h=640&fit=crop&crop=faces",
      bio:
        "Clean, minimalist portfolio with professional presentation and smooth UX. Perfect for showcasing web projects and component craftsmanship.",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 92 },
        { name: "Python", level: 70 },
        { name: "C Programming", level: 68 },
      ],
      experience: [
        {
          title: "Frontend Developer",
          company: "PixelForge",
          duration: "Apr 2023 - Present",
          description:
            "Built accessible UI kits and high-performance pages; improved Lighthouse scores to 95+.",
        },
        {
          title: "Web Developer (Intern)",
          company: "WebWorks",
          duration: "Jan 2022 - Mar 2023",
          description:
            "Implemented layouts and animations; collaborated with designers for pixel-perfect UIs.",
        },
      ],
      projects: [
        {
          name: "Portfolio System",
          description:
            "Static-site generator and components library for quick personal portfolios.",
          technologies: ["HTML", "CSS"],
          //github: "https://github.com",
          live: "https://example.com",
        },
        {
          name: "UI Playground",
          description:
            "Showcase of CSS animations and interaction patterns with minimal JS.",
          technologies: ["CSS", "HTML"],
         // github: "https://github.com",
          //live: "https://example.com",
        },
      ],
      achievements: [
        "Top 5 in Campus UI Hackathon",
        "Built internal CSS utility library",
        "Accessibility champion (WCAG focus)",
      ],
      education: [
        {
          degree: "B.Sc., Computer Science",
          school: "Loyola College",
          year: "2022",
          gpa: "8.2/10",
        },
      ],
    },
  } as const;

  const portfolio =
    portfolioData[(Number(id) as 1 | 2 | 3) || 1] ?? portfolioData[1];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HexCSS />

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
                  {/* Hexagonal avatar */}
                  <img
                    src={portfolio.image}
                    alt={portfolio.name}
                    className="w-32 h-32 object-cover hex-mask mx-auto mb-4"
                    style={{
                      filter: "drop-shadow(0 10px 22px rgba(124,58,237,.35))",
                    }}
                  />
                  <h1 className="text-2xl font-bold mb-2">{portfolio.name}</h1>
                  <p className="text-lg text-primary mb-4">{portfolio.role}</p>
                  <div className="flex items-center justify-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {portfolio.location}
                  </div>

                  {/* Contact Buttons */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="glass-button"
                    >
                      <a href={`mailto:${portfolio.email}`}>
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="glass-button"
                    >
                      <a href={`tel:${portfolio.phone.replace(/\s/g, "")}`}>
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-button"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-button"
                    >
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
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
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
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
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
                  <p className="text-muted-foreground leading-relaxed">
                    {portfolio.bio}
                  </p>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {portfolio.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary/20 pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
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
                      <div
                        key={index}
                        className="neo-card p-6 rounded-xl hover-lift"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">
                            {project.name}
                          </h3>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className="glass-button"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className="glass-button"
                            >
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="glass-button"
                            >
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
                    <div
                      key={index}
                      className="border-l-2 border-primary/20 pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
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
                  <h3 className="text-2xl font-bold mb-4">
                    Want a Portfolio Like This?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get your own professional portfolio designed with AI-powered
                    tools and expert guidance.
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



