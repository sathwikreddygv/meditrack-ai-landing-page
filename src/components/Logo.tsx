import { Pill } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
      <Pill className="w-6 h-6" />
      <span className="font-serif text-xl">MediTrack</span>
    </div>
  );
};