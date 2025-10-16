import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Card className="gradient-card shadow-soft hover:shadow-strong transition-smooth group overflow-hidden">
      {imageUrl && (
        <div className="h-48 overflow-hidden bg-secondary">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      )}
      <CardHeader>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {liveUrl && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex items-center gap-1"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex items-center gap-1"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={14} />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
