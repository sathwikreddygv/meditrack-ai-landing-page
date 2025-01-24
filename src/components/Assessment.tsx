import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Pill, Moon, Smile, Heart } from "lucide-react";
import { useEffect } from "react";

export const Assessment = () => {
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

  const assessmentCards = [
    {
      icon: Pill,
      title: "Medication Adherence",
      description: "Are you taking your medications consistently?",
      content: "Track your medication routine and identify areas for improvement.",
      delay: "delay-400"
    },
    {
      icon: Moon,
      title: "Sleep Patterns",
      description: "Are your medications affecting your sleep?",
      content: "Monitor your sleep quality and its relationship with your medication schedule.",
      delay: "delay-500"
    },
    {
      icon: Smile,
      title: "Mood Tracking",
      description: "How is your medication affecting your mood?",
      content: "Keep track of your emotional well-being and medication effects.",
      delay: "delay-600"
    },
    {
      icon: Heart,
      title: "Lifestyle Assessment",
      description: "Track how your habits align with your medication plan.",
      content: "Evaluate your daily routines and their impact on your medication effectiveness.",
      delay: "delay-700"
    }
  ];

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 text-4xl font-serif font-bold mb-4">
          Choose a Health Assessment
        </h1>
        <p className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
          Assess your health with our simple self-assessment tools and get personalized recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {assessmentCards.map(({ icon: Icon, title, description, content, delay }) => (
          <Card key={title} className={`scroll-animate opacity-0 translate-y-10 transition-all duration-700 ${delay} group hover:shadow-lg transition-shadow cursor-pointer`}>
            <CardHeader>
              <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};