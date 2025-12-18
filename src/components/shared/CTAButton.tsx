import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BOOKING_URL = "https://calendly.com/flosslineai/30min";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  className?: string;
  children?: React.ReactNode;
}

const CTAButton = ({
  variant = "primary",
  size = "default",
  className,
  children = "Book a Demo",
}: CTAButtonProps) => {
  const baseStyles = "font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
  };

  const sizes = {
    default: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <Button
      asChild
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
};

export default CTAButton;