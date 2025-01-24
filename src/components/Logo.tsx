import { Tree } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
      <Tree className="w-6 h-6" />
      <span className="font-serif text-xl">MindfulCare</span>
    </div>
  );
};