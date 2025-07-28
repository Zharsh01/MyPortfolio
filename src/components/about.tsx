import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users, Brain, MessageCircle } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices and modern frameworks",
    },
    {
      icon: Palette,
      title: "Responsive Design",
      description: "Creating pixel-perfect, mobile-first designs with Tailwind CSS and Bootstrap",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications with excellent user experience",
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Training and mentoring interns in web development methodologies",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Strong analytical skills with ability to solve complex technical challenges",
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Excellent teamwork and communication skills for collaborative development",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Frontend Developer with 3 years of experience building responsive, user-centric web applications using HTML,
            CSS, JavaScript, jQuery, and modern frameworks like React.js. Proficient in UI development with Tailwind
            CSS, Bootstrap, and Material UI, creating accessible, cross-browser-compatible interfaces.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Skilled in state management using Context API, API integration with RESTful services, and CMS customization
            with WordPress and Elementor. Experienced in deploying scalable projects via GitHub and Netlify, with a
            passion for clean code, performance optimization, and continuous learning of new frontend technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
