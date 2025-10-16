import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Rocket, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className="mb-4">About Learning Hub</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A passion project dedicated to making complex technical concepts accessible, 
                  beautiful, and inspiring.
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Card className="p-8 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">The Journey</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Learning Hub was born from a simple belief: that complex topics in AI, machine learning, 
                    and system design don't have to be intimidating. They can be broken down, beautifully 
                    presented, and genuinely enjoyable to learn.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This platform is my personal learning space — a digital garden where I've organized 
                    everything I've learned and continue to explore. By sharing it, I hope to help others 
                    on their own learning journeys.
                  </p>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="p-6 hover:shadow-lg transition-smooth">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Mission</h3>
                    <p className="text-muted-foreground">
                      To demystify advanced technical concepts and make them accessible through 
                      clear structure and beautiful design.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-smooth">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Vision</h3>
                    <p className="text-muted-foreground">
                      To create a learning experience that's not just educational, but genuinely 
                      inspiring and enjoyable.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-smooth">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Values</h3>
                    <p className="text-muted-foreground">
                      Clarity over complexity. Beauty over blandness. Practice over theory. 
                      Growth over perfection.
                    </p>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-smooth">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                      <Rocket className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Approach</h3>
                    <p className="text-muted-foreground">
                      Start with fundamentals. Build systematically. Learn by doing. 
                      Never stop exploring.
                    </p>
                  </Card>
                </div>

                <Card className="p-8 mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-none">
                  <h2 className="text-2xl font-semibold mb-4">Why I Built This</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Throughout my learning journey, I found that the best way to truly understand something 
                    is to organize it, explain it, and share it. This platform is both my notebook and my 
                    teaching tool. It's constantly evolving as I learn new concepts and discover better 
                    ways to explain them. If it helps even one person on their learning path, it's worth it.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
