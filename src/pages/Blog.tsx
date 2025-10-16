import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Tech", "Science", "Life", "Productivity"];

const blogPosts = [
  {
    title: "Building a Modern Web Application",
    excerpt:
      "A comprehensive guide to building modern web applications using React, TypeScript, and best practices for scalable architecture.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Tech",
    slug: "building-modern-web-app",
  },
  {
    title: "The Science of Learning",
    excerpt:
      "Exploring evidence-based techniques for effective learning, memory retention, and skill acquisition backed by neuroscience research.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Science",
    slug: "science-of-learning",
  },
  {
    title: "My Productivity System",
    excerpt:
      "How I organize my life, manage tasks, and maintain focus in a distracted world using simple but effective systems.",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    category: "Productivity",
    slug: "my-productivity-system",
  },
  {
    title: "Lessons from Building in Public",
    excerpt:
      "What I learned from sharing my journey, embracing vulnerability, and the unexpected benefits of working transparently.",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    category: "Life",
    slug: "building-in-public",
  },
  {
    title: "Understanding TypeScript Generics",
    excerpt:
      "A deep dive into TypeScript generics with practical examples and patterns for writing type-safe, reusable code.",
    date: "Nov 20, 2024",
    readTime: "10 min read",
    category: "Tech",
    slug: "typescript-generics",
  },
  {
    title: "The Beauty of Mathematics",
    excerpt:
      "Exploring elegant mathematical concepts that shape our world, from the golden ratio to fractals in nature.",
    date: "Nov 12, 2024",
    readTime: "6 min read",
    category: "Science",
    slug: "beauty-of-mathematics",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, learnings, and insights on technology, science, and life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.slug}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
