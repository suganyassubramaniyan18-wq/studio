import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function PageHeader({ title, description, className, ...props }: PageHeaderProps) {
  return (
    <div className={cn("container text-center py-16 md:py-24", className)} {...props}>
      <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{title}</h1>
      {description && <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}
