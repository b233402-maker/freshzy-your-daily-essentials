import { Menu, Bell, Search, ToggleLeft, ToggleRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { ownerVendor } from '@/data/ownerData';
import { cn } from '@/lib/utils';

interface OwnerHeaderProps {
  onMenuClick: () => void;
  title: string;
}

const OwnerHeader = ({ onMenuClick, title }: OwnerHeaderProps) => {
  const [isOpen, setIsOpen] = useState(ownerVendor.isOpen);

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold text-foreground">{title}</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              {new Date().toLocaleDateString('bn-BD', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Search - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search orders, customers..." 
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Store Status Toggle */}
          <Button 
            variant="outline" 
            size="sm"
            className={cn(
              "gap-2 hidden sm:flex",
              isOpen ? "border-green-500 text-green-600" : "border-red-500 text-red-600"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <>
                <ToggleRight className="h-4 w-4" />
                Open
              </>
            ) : (
              <>
                <ToggleLeft className="h-4 w-4" />
                Closed
              </>
            )}
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-secondary text-secondary-foreground text-xs">
              3
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default OwnerHeader;
