import { ArrowRight, Code, Smartphone, Globe, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Volledig responsive webshop gebouwd met React, Node.js en PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
      live: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Moderne projectmanagement tool met real-time updates en team collaboratie",
      tech: ["React Native", "Firebase", "TypeScript"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      live: "#",
      github: "#"
    },
    {
      title: "Corporate Website",
      description: "Professionele bedrijfswebsite met CMS en SEO optimalisatie",
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      live: "#",
      github: "#"
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Moderne, snelle en responsive websites die perfect werken op alle apparaten"
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Native en cross-platform mobile apps voor iOS en Android"
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description: "Op maat gemaakte software oplossingen voor jouw specifieke behoeften"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Arnotjuh.be</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#over" className="hover:text-primary transition-colors">Over</a>
            <a href="#diensten" className="hover:text-primary transition-colors">Diensten</a>
            <a href="#projecten" className="hover:text-primary transition-colors">Projecten</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button variant="default">
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            App & Web Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ik help bedrijven en ondernemers hun digitale dromen waar te maken met moderne web- en mobile applicaties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Bekijk mijn werk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Neem contact op
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Wat ik doe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projecten" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recente Projecten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="over" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Over Arnotjuh.be</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Als ervaren App & Web Developer help ik bedrijven en ondernemers hun digitale visie om te zetten 
                in werkelijke oplossingen. Met meer dan 5 jaar ervaring in moderne webontwikkeling en mobile apps, 
                lever ik kwalitatieve software die echt verschil maakt.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Ik specialiseer me in React, React Native, Node.js en moderne cloud technologieën. 
                Van concept tot deployment - ik begeleid je door het hele ontwikkelingsproces.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                alt="Developer workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Laten we samenwerken</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heb je een idee voor een website of app? Vul het formulier in en ik neem binnen 24 uur contact met je op.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Arnotjuh.be - App & Web Developer</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
