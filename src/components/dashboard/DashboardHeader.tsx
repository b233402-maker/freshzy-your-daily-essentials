import { Menu, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { userProfile } from '@/data/orderData';

interface DashboardHeaderProps {
  onMenuClick: () => void;
  title: string;
}

const DashboardHeader = ({ onMenuClick, title }: DashboardHeaderProps) => {
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
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        </div>

        {/* Search - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search orders..." 
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-secondary rounded-full" />
          </Button>
          
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border-2 border-primary/20">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                {userProfile.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="hidden lg:block">
              <p className="text-sm font-medium text-foreground">{userProfile.name}</p>
              <p className="text-xs text-muted-foreground">{userProfile.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
