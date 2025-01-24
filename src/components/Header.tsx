import { Search, Menu, ChevronDown, Bell } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b border-primary/10 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <Logo />
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Medications
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-2">
                <a href="#" className="block px-4 py-2 hover:bg-primary/10 transition-colors">Schedule</a>
                <a href="#" className="block px-4 py-2 hover:bg-primary/10 transition-colors">History</a>
                <a href="#" className="block px-4 py-2 hover:bg-primary/10 transition-colors">Reminders</a>
              </div>
            </div>
          </div>
          <a href="#" className="hover:text-primary transition-colors">Reports</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
        </nav>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search medications"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-primary/20 focus:outline-none focus:border-primary/40 transition-colors"
            />
          </div>
          <Button variant="destructive" className="bg-urgent hover:bg-urgent/90">
            <Bell className="w-4 h-4 mr-2" />
            Alerts
          </Button>
        </div>
      </div>
    </header>
  );
};