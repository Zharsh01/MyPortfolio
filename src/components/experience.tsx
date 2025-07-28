import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "K.D Services",
      period: "Jan 2024 - Present",
      location: "Current Position",
      description: [
        "Trained and mentor two interns, providing hands-on guidance in Web app development methodologies, coding best practices and project execution",
        "Developed and maintained responsive web applications using HTML5, CSS3, JavaScript, WordPress, React.js, and Tailwind CSS",
        "Implemented animations and interactive elements using jQuery and CSS transitions to improve user engagement",
        "Ensured cross-browser compatibility, accessibility, and mobile responsiveness for all pages",
        "Created and customized pages using Elementor, Gutenberg, WPBakery, and built reusable section templates for faster workflow",
        "Translated Figma/PSD designs into fully responsive, pixel-perfect WordPress websites",
      ],
      technologies: ["React.js", "JavaScript", "WordPress", "Tailwind CSS", "HTML5", "CSS3", "jQuery", "Elementor"],
    },
    {
      title: "Jr. Frontend Developer",
      company: "Prime Apps Infotech",
      period: "May 2022 - Dec 2023",
      location: "1.5+ Years",
      description: [
        "Developed high-fidelity prototypes for web applications using HTML, CSS and JavaScript",
        "Created custom WordPress themes from scratch and completed day-to-day duties accurately and efficiently",
        "Worked on around 5-6 projects including WordPress projects and animation-focused projects",
        "Built interactive image carousels and menu sections with smooth animations",
        "Implemented responsive design principles ensuring cross-browser compatibility",
        "Collaborated with design teams to convert mockups into functional web interfaces",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "Animation Effects", "Responsive Design"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in frontend development, building user-centric applications and mentoring teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
