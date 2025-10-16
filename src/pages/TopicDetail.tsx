import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";

const TopicDetail = () => {
  const { courseId, topicId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const topic = course?.topics.find((t) => t.id === topicId);
  
  if (!course || !topic) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="mb-4">Topic Not Found</h1>
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

  const currentIndex = course.topics.findIndex((t) => t.id === topicId);
  const previousTopic = currentIndex > 0 ? course.topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < course.topics.length - 1 ? course.topics[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to={`/course/${courseId}`}>
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {course.title}
                </Button>
              </Link>
              
              <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4">
                <Link to="/courses" className="hover:text-foreground transition-colors">
                  Courses
                </Link>
                <span>/</span>
                <Link to={`/course/${courseId}`} className="hover:text-foreground transition-colors">
                  {course.title}
                </Link>
                <span>/</span>
                <span className="text-foreground">{topic.title}</span>
              </div>

              <h1 className="mb-4 animate-fade-in">{topic.title}</h1>
              <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {topic.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-12 animate-scale-in">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Learning Content</h2>
                    <p className="text-muted-foreground">
                      This is where your detailed learning content for {topic.title} will be displayed. 
                      Each topic can include text, code examples, diagrams, and interactive elements.
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none space-y-6">
                  <div className="p-6 bg-muted/50 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Core principle 1 - Understanding the fundamentals</li>
                      <li>Core principle 2 - Practical applications</li>
                      <li>Core principle 3 - Best practices and patterns</li>
                      <li>Core principle 4 - Common pitfalls to avoid</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Example</h3>
                    <p className="text-muted-foreground mb-3">
                      Here you can add practical examples, code snippets, diagrams, or interactive demonstrations 
                      related to {topic.title}.
                    </p>
                    <div className="bg-card p-4 rounded-lg font-mono text-sm">
                      <code className="text-foreground">
                        // Example code or concept illustration
                      </code>
                    </div>
                  </div>

                  <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
                    <h3 className="text-xl font-semibold mb-3 text-accent">Key Takeaways</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Understanding of fundamental concepts</li>
                      <li>✓ Ability to apply these concepts in practice</li>
                      <li>✓ Recognition of common patterns and solutions</li>
                      <li>✓ Foundation for more advanced topics</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t border-border">
                <div>
                  {previousTopic && (
                    <Link to={`/course/${courseId}/${previousTopic.id}`}>
                      <Button variant="outline" className="group">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        <div className="text-left">
                          <div className="text-xs text-muted-foreground">Previous</div>
                          <div>{previousTopic.title}</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>

                <div>
                  {nextTopic && (
                    <Link to={`/course/${courseId}/${nextTopic.id}`}>
                      <Button className="group">
                        <div className="text-right">
                          <div className="text-xs opacity-80">Next</div>
                          <div>{nextTopic.title}</div>
                        </div>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TopicDetail;
