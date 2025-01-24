import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Mental Health in Our Community
          </h1>
          <p className="text-lg text-foreground/80">
            Supporting over 10,000 community members with accessible mental health resources. 
            Our platform connects you with professional support, self-help tools, and a caring community.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            Read more
          </Button>
        </div>
        <div className="relative animate-float">
          <div className="relative z-10">
            <img
              src="/placeholder.svg"
              alt="Person on couch"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute inset-0 bg-secondary/30 rounded-lg transform rotate-3 -z-10" />
        </div>
      </div>
    </div>
  );
};