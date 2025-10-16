import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

export const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  category,
  slug,
}: BlogCardProps) => {
  return (
    <Card className="gradient-card shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{readTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
