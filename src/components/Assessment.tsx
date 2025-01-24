import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Pill, Moon, Smile, Heart } from "lucide-react";

export const Assessment = () => {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4">Choose a Health Assessment</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Assess your health with our simple self-assessment tools and get personalized recommendations.
        </p>
      </div>

      <div className="relative mb-12">
        <img
          src="/lovable-uploads/05bfb7c1-7a27-4ce8-a6e1-e882fd30b0d7.png"
          alt="MediTrack self-assessment tools interface"
          className="w-full h-auto rounded-lg shadow-xl mx-auto max-w-4xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
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

        <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
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

        <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
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

        <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
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
    </div>
  );
};