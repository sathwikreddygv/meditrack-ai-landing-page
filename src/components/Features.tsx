import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, LineChart, Pill, ClipboardList, Users } from "lucide-react";

export const Features = () => {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4">How to Use MediTrack</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This short guide will walk you through MediTrack's key features and how they can simplify your medication routine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        <Button className="h-16 text-lg" variant="default">
          <Bell className="mr-2" /> Set up reminders
        </Button>
        <Button className="h-16 text-lg" variant="outline">
          <LineChart className="mr-2" /> Get medication insights
        </Button>
        <Button className="h-16 text-lg" variant="outline">
          <Pill className="mr-2" /> Track doses
        </Button>
        <Button className="h-16 text-lg" variant="outline">
          <ClipboardList className="mr-2" /> Manage prescriptions
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Medication Reminders</h3>
          <p>Stay on track with timely notifications.</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Dosage Tracking</h3>
          <p>Keep a log of your medication intake and progress.</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Health Reports</h3>
          <p>View trends and share with healthcare providers.</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Pill Refill Alerts</h3>
          <p>Get notified when you're running low on medication.</p>
        </Card>
      </div>

      <div className="text-center">
        <Users className="w-24 h-24 mx-auto mb-4 text-primary animate-float" />
        <p className="text-muted-foreground">Join our community of users managing their health effectively</p>
      </div>
    </div>
  );
};