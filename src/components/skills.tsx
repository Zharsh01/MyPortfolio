import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 85 },
        { name: "jQuery", level: 80 },
      ],
    },
    {
      title: "Styling & Frameworks",
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 88 },
        { name: "Material UI", level: 80 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      title: "Tools & CMS",
      skills: [
        { name: "WordPress", level: 70 },
        { name: "Elementor", level: 75 },
        { name: "Git & GitHub", level: 80 },
        { name: "Netlify", level: 85 },
      ],
    },
    {
      title: "APIs & State Management",
      skills: [
        { name: "RESTful APIs", level: 70 },
        { name: "Axios", level: 70 },
        { name: "Context API", level: 70 },
        { name: "Redux", level: 70 },
      ],
    },
  ];

  const additionalSkills = [
    "Cross-browser Compatibility",
    "Animation Effects",
    "Problem Solving",
    "Communication & Teamwork",
    "Mentorship",
    "Performance Optimization",
    "SEO Optimization",
    "Accessibility (WCAG)",
    "Figma to Code",
    "PSD to HTML",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and proficiency levels in various frontend
            technologies and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-center text-lg">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
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
          ))}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">
              Additional Skills & Competencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-2 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
