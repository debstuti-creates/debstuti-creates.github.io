import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="mb-4">Get in Touch</h1>
                <p className="text-xl text-muted-foreground">
                  Have questions, feedback, or want to collaborate? I'd love to hear from you!
                </p>
              </div>

              <div className="grid gap-6 mb-12">
                <Card className="p-8 hover:shadow-lg transition-smooth animate-scale-in">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground mb-4">
                        Best for detailed questions, feedback, or collaboration opportunities.
                      </p>
                      <Button asChild>
                        <a href="mailto:hello@learninghub.dev">
                          Send an Email
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-smooth animate-scale-in" style={{ animationDelay: "0.1s" }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                      <p className="text-muted-foreground mb-4">
                        Found a mistake? Have a suggestion? Your feedback helps improve this learning resource.
                      </p>
                      <Button variant="outline" asChild>
                        <a href="mailto:feedback@learninghub.dev">
                          Share Feedback
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-none animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-semibold mb-6 text-center">Connect on Social Media</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="outline" size="lg" asChild className="group">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="group">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="group">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </Card>

              <div className="mt-12 text-center text-muted-foreground">
                <p className="text-sm">
                  Response time: Usually within 24-48 hours. Looking forward to connecting!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
