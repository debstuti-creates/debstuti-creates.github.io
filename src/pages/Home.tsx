import { ArrowRight, BookOpen, FileText, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-medium" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to My Digital Home
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A space where I share my thoughts, notes, and projects on tech,
            science, life, and everything in between.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog">
              <Button size="lg" className="shadow-medium">
                Explore Blog
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="shadow-soft">
                Learn More About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You'll Find Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog">
              <div className="gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  Blog Posts
                </h3>
                <p className="text-muted-foreground">
                  In-depth articles on technology, productivity, and life
                  lessons I've learned along the way.
                </p>
              </div>
            </Link>

            <Link to="/notes">
              <div className="gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                  <FileText className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-smooth">
                  Notes
                </h3>
                <p className="text-muted-foreground">
                  Organized notes and quick thoughts on various subjects—my
                  digital notebook.
                </p>
              </div>
            </Link>

            <Link to="/projects">
              <div className="gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  Projects
                </h3>
                <p className="text-muted-foreground">
                  Showcasing my work, experiments, and learning projects I've
                  built over time.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            Have questions or want to collaborate? I'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default" className="shadow-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
