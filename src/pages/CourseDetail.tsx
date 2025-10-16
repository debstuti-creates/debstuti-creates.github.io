import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="mb-4">Course Not Found</h1>
            <Link to="/courses">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/courses">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="text-6xl mb-4 animate-scale-in">{course.icon}</div>
              <h1 className="mb-4 animate-fade-in">{course.title}</h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {course.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8">Course Topics</h2>
              
              <div className="space-y-6">
                {course.topics.map((topic, index) => (
                  <Card 
                    key={topic.id} 
                    className="group hover:shadow-xl transition-smooth cursor-pointer animate-slide-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center justify-between">
                        <span>{topic.title}</span>
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-2" />
                      </CardTitle>
                      <CardDescription className="text-base">
                        {topic.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={`/course/${courseId}/${topic.id}`}>
                        <Button variant="ghost" className="group">
                          Start Topic
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Ready to dive in?</h3>
                <p className="text-muted-foreground mb-6">
                  Start with the first topic and work your way through at your own pace. 
                  Each lesson builds on the previous one for a comprehensive understanding.
                </p>
                <Link to={`/course/${courseId}/${course.topics[0].id}`}>
                  <Button size="lg">
                    Begin with {course.topics[0].title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
