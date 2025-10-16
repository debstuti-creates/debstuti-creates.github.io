import { useState } from "react";
import { NoteCard } from "@/components/NoteCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const subjects = ["All", "Programming", "Mathematics", "Philosophy", "Design"];

const notes = [
  {
    title: "React Hooks Patterns",
    preview:
      "Common patterns and best practices for using React hooks effectively in modern applications...",
    tags: ["React", "JavaScript", "Hooks"],
    date: "Dec 14, 2024",
    subject: "Programming",
  },
  {
    title: "Linear Algebra Basics",
    preview:
      "Fundamental concepts of linear algebra including vectors, matrices, and transformations...",
    tags: ["Math", "Vectors", "Matrices"],
    date: "Dec 12, 2024",
    subject: "Mathematics",
  },
  {
    title: "CSS Grid Layout Guide",
    preview:
      "Comprehensive notes on CSS Grid properties, use cases, and practical examples for layouts...",
    tags: ["CSS", "Layout", "Design"],
    date: "Dec 8, 2024",
    subject: "Design",
  },
  {
    title: "Stoic Philosophy Principles",
    preview:
      "Key principles from Stoic philosophy and their practical applications in modern life...",
    tags: ["Philosophy", "Stoicism", "Life"],
    date: "Dec 6, 2024",
    subject: "Philosophy",
  },
  {
    title: "TypeScript Types & Interfaces",
    preview:
      "Understanding the difference between types and interfaces in TypeScript and when to use each...",
    tags: ["TypeScript", "Types", "Programming"],
    date: "Dec 3, 2024",
    subject: "Programming",
  },
  {
    title: "Calculus Quick Reference",
    preview:
      "Essential calculus formulas, derivatives, and integrals for quick reference...",
    tags: ["Math", "Calculus", "Reference"],
    date: "Nov 30, 2024",
    subject: "Mathematics",
  },
  {
    title: "Design Thinking Process",
    preview:
      "The five stages of design thinking: empathize, define, ideate, prototype, and test...",
    tags: ["Design", "Process", "UX"],
    date: "Nov 25, 2024",
    subject: "Design",
  },
  {
    title: "Async/Await in JavaScript",
    preview:
      "Understanding promises, async functions, and error handling in asynchronous JavaScript...",
    tags: ["JavaScript", "Async", "Programming"],
    date: "Nov 22, 2024",
    subject: "Programming",
  },
];

export default function Notes() {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter((note) => {
    const matchesSubject =
      selectedSubject === "All" || note.subject === selectedSubject;
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-bold mb-4">Notes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My digital notebook—organized thoughts and quick references
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Subject Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {subjects.map((subject) => (
            <Button
              key={subject}
              variant={selectedSubject === subject ? "default" : "outline"}
              onClick={() => setSelectedSubject(subject)}
              className="transition-smooth"
            >
              {subject}
            </Button>
          ))}
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, index) => (
            <div
              key={`${note.title}-${index}`}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <NoteCard {...note} />
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No notes found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
