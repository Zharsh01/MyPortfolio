import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      title: "SportsGrid",
      description:
        "Responsive React.js web application with functional components, React Hooks, and React Router for dynamic routing. Integrated RESTful APIs with Axios and implemented real-time data fetching.",
      technologies: [
        "React.js",
        "React Hooks",
        "React Router",
        "Api Integration",
        "Axios",
        "Tailwind CSS",
        "RESTful APIs",
      ],
      liveUrl: "https://www.sportsgrid.com/",
      githubUrl: "https://github.com/Zharsh01",
      category: "React Application",
    },
    {
      title: "Albert-Nobilis",
      description:
        "Luxury brand website built with WordPress and Elementor. Features dynamic product pages, custom ACF fields, performance optimizations, and SEO improvements with structured data.",
      technologies: [
        "WordPress",
        "Elementor",
        "ACF",
        "Custom CSS",
        "SEO",
        "Performance Optimization",
      ],
      liveUrl: "https://albert-nobilis.com/",
      githubUrl: "https://github.com/Zharsh01",
      category: "WordPress Development",
    },
    {
      title: "DCBEL Energy",
      description:
        "Clean, responsive marketing site using semantic HTML5, modern CSS (Flexbox, Grid), and vanilla JavaScript. Features interactive elements, animations, and WCAG compliance.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Flexbox",
        "Grid",
        "WCAG",
        "Performance Optimization",
      ],
      liveUrl: "https://www.dcbel.energy/",
      githubUrl: "https://github.com/Zharsh01",
      category: "Static Website",
    },
    {
      title: "Company Week Sustainment",
      description:
        "Corporate website with modern design and responsive layout. Built with focus on user experience and cross-browser compatibility.",
      technologies: [
        "WordPress",
        "Elementor",
        "Context",
        "Custom CSS",
        "Web Bekary",
        "Responsive Design",
      ],
      liveUrl: "https://companyweek.sustainment.com/",
      githubUrl: "https://github.com/Zharsh01",
      category: "Corporate Website",
    },
    {
      title: "Sustainment Platform",
      description:
        "Business platform with clean UI and optimized performance. Features modern web technologies and responsive design principles.",
      technologies: [
        "WordPress",
        "Elementor",
        "Context",
        "Custom CSS",
        "Web Bekary",
        "Responsive Design",
      ],
      liveUrl: "https://www.sustainment.com/",
      githubUrl: "https://github.com/Zharsh01",
      category: "Business Platform",
    },
    {
      title: "E-commerce Site",
      description:
        "Full-featured e-commerce application with product catalog, shopping cart, and responsive design. Built with modern frontend technologies.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Redux",
        "API Integration",
        "Responsive Design",
        "E-commerce",
      ],
      liveUrl: "https://harshecommerce-site.netlify.app/",
      githubUrl: "https://github.com/Zharsh01",
      category: "E-commerce",
    },
    {
      title: "Food Web App",
      description:
        "Interactive food ordering application with modern UI, responsive design, and smooth user experience. Features dynamic content and animations.",
      technologies: [
        "React",
        "tailwind CSS",
        "JavaScript",
        "Hooks",
        "Responsive Design",
        "UI Animations",
      ],
      liveUrl: "https://harshdarji-food-web-app.netlify.app/",
      githubUrl: "https://github.com/Zharsh01",
      category: "Web Application",
    },
    {
      title: "WebMotion Dashboard",
      description:
        "Analytics dashboard with data visualization, responsive charts, and modern interface. Built with focus on user experience and performance.",
      technologies: [
        "Html",
        "Css",
        "Dashboard",
        "Tab View",
        "Responsive Design",
        "Bootstrap",
      ],
      liveUrl: "https://webmotion-dashboard.netlify.app/",
      githubUrl: "https://github.com/Zharsh01",
      category: "Dashboard",
    },
    {
      title: "Form Context App",
      description:
        "Form management application demonstrating React Context API usage, form validation, and state management best practices.",
      technologies: [
        "React",
        "Context API",
        "Form Validation",
        "State Management",
      ],
      liveUrl: "https://form-context.netlify.app/",
      githubUrl: "https://github.com/Zharsh01",
      category: "React Application",
    },
    {
      title: "Transfer Packing List",
      description:
        "Utility application for managing packing lists with interactive features, local storage, and responsive design.",
      technologies: ["JavaScript", "React", "Hooks", "Local Storage", "CSS3"],
      liveUrl: "https://transfer-packing-list.netlify.app/",
      githubUrl: "https://github.com/Zharsh01",
      category: "Utility App",
    },
    {
      title: "Task Apps Row",
      description:
        "Task management application with CRUD operations, responsive design, and modern UI components for productivity enhancement.",
      technologies: [
        "Html",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "Task Management",
      ],
      liveUrl: "https://task-appsrow.netlify.app/",
      githubUrl: "https://github.com/Zharsh01",
      category: "Productivity App",
    },
    {
      title: "Crud Task App",
      description:
        "Task management application with CRUD operations, responsive design, and modern UI components for productivity enhancement.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
        "Task Management",
        "CRUD Operations",
        "Api Integration",
        "Axios",
      ],
      liveUrl: "https://harsh-crud-web-sites.netlify.app/",
      githubUrl: "https://github.com/Zharsh01",
      category: "Productivity App",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning React applications, WordPress
            development, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/Zharsh01" target="_blank">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
