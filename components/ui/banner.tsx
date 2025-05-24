"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Banner2Props {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

const Banner2 = ({
  title = "Version 2.0 is now available!",
  description = "Check out all the new features.",
  buttonText = "Read update",
  buttonUrl = "https://shadcnblocks.com",
}: Banner2Props) => {
  return (
    <section className="w-full bg-gradient-to-r from-primary/10 to-primary/5 p-6 shadow-md dark:shadow-lg md:p-8 dark:from-primary/20 dark:to-primary/10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center justify-center rounded-full bg-primary/10 p-3">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="mt-2 text-base font-medium"
            asChild
          >
            <a href="/" rel="noopener noreferrer">
              {buttonText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Example usage
export default function BannerExample() {
  return (
    <Banner2 
      title="Coming Soon: Our Exciting New Feature!" 
      description="We're working on something amazing. Stay tuned for updates on our latest innovation."
      buttonText="Learn More"
      buttonUrl="https://example.com/coming-soon"
    />
  );
}

export { Banner2 }; 