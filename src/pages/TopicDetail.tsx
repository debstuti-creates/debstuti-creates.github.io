import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { courses } from "@/data/courses";
import { topicContentMap, defaultTopicContent } from "@/data/topicContent";

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
  
  // Get topic-specific content or use default
  const content = topicContentMap[topicId] || defaultTopicContent;

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
              {/* Introduction Section */}
              {content.introduction && (
                <Card className="p-8 mb-8 animate-fade-in">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {content.introduction}
                      </p>
                    </div>
                  </div>
                  {content.heroImage && (
                    <div className="mt-6 rounded-xl overflow-hidden">
                      <img 
                        src={content.heroImage} 
                        alt={topic.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                </Card>
              )}

              {/* Content Sections */}
              {content.sections?.map((section, index) => (
                <Card key={index} className="p-8 mb-8 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                    {section.content}
                  </p>
                  {section.image && (
                    <div className="mt-4 rounded-xl overflow-hidden">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                </Card>
              ))}

              {/* Key Concepts */}
              <Card className="p-8 mb-8 animate-scale-in">
                <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
                <ul className="space-y-3">
                  {content.keyConcepts.map((concept, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground flex-1">{concept}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Example Section */}
              <Card className="p-8 mb-8 bg-primary/5 border-primary/20 animate-scale-in">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{content.exampleTitle}</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                  {content.exampleDescription}
                </p>
                {content.exampleCode && (
                  <div className="bg-card p-6 rounded-xl font-mono text-sm overflow-x-auto border border-border">
                    <pre className="text-foreground whitespace-pre">
                      <code>{content.exampleCode}</code>
                    </pre>
                  </div>
                )}
              </Card>

              {/* Practical Tips */}
              {content.practicalTips && content.practicalTips.length > 0 && (
                <Card className="p-8 mb-8 animate-scale-in">
                  <h2 className="text-2xl font-semibold mb-4">Practical Tips</h2>
                  <div className="space-y-4">
                    {content.practicalTips.map((tip, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h3 className="font-semibold mb-1">{tip.title}</h3>
                        <p className="text-muted-foreground text-sm">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Additional Sections */}
              {content.additionalSections?.map((section, index) => (
                <Card key={index} className="p-8 mb-8 animate-scale-in">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <div className="text-muted-foreground">{section.content}</div>
                </Card>
              ))}

              {/* Key Takeaways */}
              <Card className="p-8 mb-8 bg-accent/5 border-accent/20 animate-scale-in">
                <h2 className="text-2xl font-semibold mb-4 text-accent">Key Takeaways</h2>
                <ul className="space-y-2">
                  {content.takeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted-foreground flex-1">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Further Reading */}
              {content.furtherReading && content.furtherReading.length > 0 && (
                <Card className="p-8 mb-8 animate-scale-in">
                  <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
                  <ul className="space-y-2">
                    {content.furtherReading.map((resource, index) => (
                      <li key={index}>
                        <a 
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {resource.title} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

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
