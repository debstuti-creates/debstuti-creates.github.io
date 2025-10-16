import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Personal Website",
    description:
      "A modern, responsive personal website built with React and Tailwind CSS for sharing blogs, notes, and projects.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Note-Taking App",
    description:
      "A minimalist note-taking application with markdown support, tags, and search functionality.",
    tags: ["React", "Local Storage", "Markdown"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/notes-app",
  },
  {
    title: "Task Manager",
    description:
      "A productivity tool for managing tasks, projects, and daily routines with a clean interface.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
  {
    title: "API Dashboard",
    description:
      "An analytics dashboard for monitoring API performance, usage metrics, and error tracking.",
    tags: ["React", "Charts", "API"],
    githubUrl: "https://github.com/yourusername/api-dashboard",
  },
  {
    title: "Learning Resources Hub",
    description:
      "A curated collection of learning resources, tutorials, and courses organized by topic.",
    tags: ["React", "Airtable", "API"],
    liveUrl: "https://example.com",
  },
  {
    title: "Code Snippet Manager",
    description:
      "A tool for saving, organizing, and sharing code snippets with syntax highlighting.",
    tags: ["React", "Monaco Editor", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/snippets",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Things I've built, experiments I've tried, and lessons I've learned
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
