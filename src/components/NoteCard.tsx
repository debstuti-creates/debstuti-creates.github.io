import { FileText, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NoteCardProps {
  title: string;
  preview: string;
  tags: string[];
  date: string;
}

export const NoteCard = ({ title, preview, tags, date }: NoteCardProps) => {
  return (
    <Card className="gradient-card shadow-soft hover:shadow-medium transition-smooth group cursor-pointer h-full">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <FileText className="text-primary" size={20} />
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {preview}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs flex items-center gap-1"
            >
              <Tag size={10} />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
