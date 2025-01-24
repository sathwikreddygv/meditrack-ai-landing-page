import { Facebook, Twitter, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Medication Schedule</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reminder Settings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reports & Analytics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Healthcare Provider Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Get the latest features and updates for better medication management.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-foreground/60">
          © 2024 MediTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};