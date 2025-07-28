import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
} from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl pt-12 sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Harsh Darji</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Frontend Developer
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Frontend Developer with 3 years of experience building responsive,
            user-centric web applications using HTML, CSS, JavaScript, jQuery,
            and modern frameworks like React.js. Proficient in UI development
            with Tailwind CSS, Bootstrap, and Material UI, creating accessible,
            cross-browser-compatible interfaces. Skilled in state management
            using Context API, API integration with RESTful services, and CMS
            customization with WordPress and Elementor. Experienced in deploying
            scalable projects via GitHub and Netlify, with a passion for clean
            code, performance optimization, and continuous learning of new
            frontend technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link
                href="https://drive.google.com/file/d/11mQg4JGIq95qaDCq_tJPG5Pfp4hO2dea/view?usp=drive_link"
                target="_blank"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Zharsh01" target="_blank">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/harsh-darji-50455a2b1"
                target="_blank"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:zharsh021@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="tel:6354651660">
                <Phone className="h-6 w-6" />
                <span className="sr-only">Phone</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
