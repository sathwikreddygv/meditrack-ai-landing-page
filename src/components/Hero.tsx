import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Smart Medication Management
          </h1>
          <p className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-200 text-lg text-foreground/80">
            Join over 10,000 users who trust MediTrack for their medication management. 
            Stay on schedule, get timely reminders, and manage your prescriptions with ease.
          </p>
          <Button className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-300 bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            Get Started
          </Button>
        </div>
        <div className="relative scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <img
            src="/lovable-uploads/9c255d59-2b37-4d71-a468-fdf05703917f.png"
            alt="MediTrack app interface showing medication reminders in a cozy home setting"
            className="w-full h-auto rounded-lg shadow-xl animate-float"
            loading="lazy"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.opacity = '1';
            }}
          />
        </div>
      </div>
    </div>
  );
};