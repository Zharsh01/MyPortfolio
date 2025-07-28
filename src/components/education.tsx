import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and educational achievements.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">
                    Bachelor of Science (Computer Applications & Information
                    Technology)
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-primary mt-1">
                    K.S School of Business Management, Ahmedabad
                  </CardDescription>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2018 - 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Gujarat University</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Academic Achievement</h4>
                  <p className="text-muted-foreground">
                    Successfully completed bachelor&apos;s degree with 3.0/5.0
                    GPA from K.S School of Business Management, focusing on
                    Computer Applications and Information Technology.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Areas of Study</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Computer Applications Development</li>
                    <li>• Information Technology Systems</li>
                    <li>• Programming Fundamentals</li>
                    <li>• Database Management</li>
                    <li>• Web Technologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
