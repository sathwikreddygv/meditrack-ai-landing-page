import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Pill, Moon, Smile, Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Assessment = () => {
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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 text-4xl font-serif font-bold mb-4">
              Choose a Health Assessment
            </h1>
            <p className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-200 text-lg text-muted-foreground">
              Assess your health with our simple self-assessment tools and get personalized recommendations.
            </p>
          </div>
          <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <img 
              src="/lovable-uploads/5e8aca61-a79a-48a4-a27f-d032a01cf3fa.png"
              alt="MediTrack Assessment Tools" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-400 group hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Pill className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Medication Adherence</CardTitle>
              <CardDescription>Are you taking your medications consistently?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Track your medication routine and identify areas for improvement.
              </p>
            </CardContent>
          </Card>

          <Card className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-500 group hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Moon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Sleep Patterns</CardTitle>
              <CardDescription>Are your medications affecting your sleep?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Monitor your sleep quality and its relationship with your medication schedule.
              </p>
            </CardContent>
          </Card>

          <Card className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-600 group hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Smile className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Mood Tracking</CardTitle>
              <CardDescription>How is your medication affecting your mood?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Keep track of your emotional well-being and medication effects.
              </p>
            </CardContent>
          </Card>

          <Card className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 delay-700 group hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Heart className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>Lifestyle Assessment</CardTitle>
              <CardDescription>Track how your habits align with your medication plan.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Evaluate your daily routines and their impact on your medication effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;