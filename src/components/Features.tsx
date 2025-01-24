import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, LineChart, Pill, ClipboardList, Users } from "lucide-react";
import { useEffect } from "react";

export const Features = () => {
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
    <div className="container px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 text-4xl font-serif font-bold mb-4">
          How to Use MediTrack
        </h1>
        <p className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
          This short guide will walk you through MediTrack's key features and how they can simplify your medication routine.
        </p>
      </div>

      <div className="relative mb-12">
        <img
          src="/lovable-uploads/7f6c6d87-c3a4-42cc-990b-3da314a04bde.png"
          alt="MediTrack features overview showing app interface and community"
          className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-300 w-full h-auto rounded-lg shadow-xl mx-auto max-w-4xl animate-float"
          loading="lazy"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.opacity = '1';
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {[
          { icon: Bell, text: "Set up reminders", delay: "delay-400", variant: "default" },
          { icon: LineChart, text: "Get medication insights", delay: "delay-500", variant: "outline" },
          { icon: Pill, text: "Track doses", delay: "delay-600", variant: "outline" },
          { icon: ClipboardList, text: "Manage prescriptions", delay: "delay-700", variant: "outline" }
        ].map(({ icon: Icon, text, delay, variant }) => (
          <Button 
            key={text}
            className={`scroll-animate opacity-0 translate-y-10 transition-all duration-700 ${delay} h-16 text-lg`}
            variant={variant as "default" | "outline"}
          >
            <Icon className="mr-2" /> {text}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {[
          { title: "Medication Reminders", desc: "Stay on track with timely notifications.", delay: "delay-800" },
          { title: "Dosage Tracking", desc: "Keep a log of your medication intake and progress.", delay: "delay-900" },
          { title: "Health Reports", desc: "View trends and share with healthcare providers.", delay: "delay-1000" },
          { title: "Pill Refill Alerts", desc: "Get notified when you're running low on medication.", delay: "delay-1100" }
        ].map(({ title, desc, delay }) => (
          <Card key={title} className={`scroll-animate opacity-0 translate-y-10 transition-all duration-700 ${delay} p-6 hover:scale-105 transition-transform`}>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p>{desc}</p>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Users className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-1200 w-24 h-24 mx-auto mb-4 text-primary animate-float" />
        <p className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-1300 text-muted-foreground">
          Join our community of users managing their health effectively
        </p>
      </div>
    </div>
  );
};