import { Heart, Lightbulb, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-medium" />
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Curious mind, passionate learner, and digital creator
          </p>
        </div>

        <div className="space-y-12 fade-in">
          <section className="gradient-card p-8 rounded-2xl shadow-soft">
            <h2 className="text-2xl font-semibold mb-4">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to my corner of the internet! I'm a lifelong learner
                passionate about technology, science, and the endless pursuit of
                knowledge. This website is my digital garden—a place where I
                cultivate ideas, share discoveries, and connect with curious
                minds.
              </p>
              <p>
                What started as a simple note-taking habit evolved into this
                platform where I document my learning journey, share insights
                from my experiences, and explore topics that fascinate me. From
                deep technical dives to reflections on productivity and life, I
                believe in learning in public and sharing what I discover.
              </p>
              <p>
                When I'm not writing or coding, you'll find me reading,
                experimenting with new technologies, or exploring the
                intersection of science and philosophy. I believe that the best
                way to learn is to teach, and that's exactly what I aim to do
                here.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-card p-6 rounded-2xl shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Passions</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Technology & Innovation</li>
                <li>Science & Philosophy</li>
                <li>Writing & Teaching</li>
                <li>Open Source</li>
              </ul>
            </div>

            <div className="gradient-card p-6 rounded-2xl shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Lightbulb className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Interests</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Web Development</li>
                <li>Machine Learning</li>
                <li>Productivity Systems</li>
                <li>Digital Minimalism</li>
              </ul>
            </div>

            <div className="gradient-card p-6 rounded-2xl shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Goals</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Share Knowledge</li>
                <li>Build Useful Tools</li>
                <li>Learn in Public</li>
                <li>Connect with Others</li>
              </ul>
            </div>
          </div>

          <section className="gradient-card p-8 rounded-2xl shadow-soft">
            <h2 className="text-2xl font-semibold mb-4">What I Write About</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">Tech:</strong> Web
                development, programming languages, frameworks, and the latest
                in technology trends.
              </p>
              <p>
                <strong className="text-foreground">Science:</strong> Physics,
                mathematics, AI/ML, and fascinating scientific discoveries.
              </p>
              <p>
                <strong className="text-foreground">Life:</strong> Productivity
                tips, learning strategies, and reflections on personal growth.
              </p>
              <p>
                <strong className="text-foreground">Projects:</strong> Hands-on
                experiments, side projects, and lessons learned from building
                things.
              </p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to interesting conversations, collaborations, or
              just connecting with fellow learners. Feel free to reach out!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
