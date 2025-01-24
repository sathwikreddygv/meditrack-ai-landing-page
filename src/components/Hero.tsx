import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Smart Medication Management
          </h1>
          <p className="text-lg text-foreground/80">
            Join over 10,000 users who trust MediTrack for their medication management. 
            Stay on schedule, get timely reminders, and manage your prescriptions with ease.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            Get Started
          </Button>
        </div>
        <div className="relative animate-float">
          <div className="relative z-10">
            <img
              src="/lovable-uploads/b9815b48-d170-49a6-bfa3-813831e0f953.png"
              alt="MediTrack app interface"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute inset-0 bg-secondary/30 rounded-lg transform rotate-3 -z-10" />
        </div>
      </div>
    </div>
  );
};