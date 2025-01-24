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
        <div className="relative">
          <img
            src="/lovable-uploads/46486ffe-e4f8-4977-b9cf-6b6d6c1f6dbf.png"
            alt="MediTrack app interface showing medication reminders in a cozy home setting"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};