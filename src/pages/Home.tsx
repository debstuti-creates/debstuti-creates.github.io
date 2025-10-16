import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Your Personal Learning Journey</span>
              </div>
              
              <h1 className="mb-6">
                Master AI, ML & System Design
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A personal digital classroom designed to make complex concepts in AI, machine learning, 
                and system design simple, structured, and beautiful.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/courses">
                  <Button size="lg" className="group">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-elegant transition-smooth hover:shadow-xl hover:scale-105 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3">Structured Learning</h3>
                <p className="text-muted-foreground">
                  Each course is carefully organized into digestible topics with clear learning paths.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-elegant transition-smooth hover:shadow-xl hover:scale-105 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-3">Practical Focus</h3>
                <p className="text-muted-foreground">
                  Learn concepts that matter with real-world applications and examples.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-elegant transition-smooth hover:shadow-xl hover:scale-105 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3">Beautiful Design</h3>
                <p className="text-muted-foreground">
                  A delightful learning experience with an elegant, distraction-free interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary to-secondary p-12 rounded-3xl text-white shadow-xl">
              <h2 className="mb-4 text-white">Ready to Start Learning?</h2>
              <p className="text-lg opacity-90 mb-8">
                Join the journey to master AI, machine learning, and system design fundamentals.
              </p>
              <Link to="/courses">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  Browse All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
