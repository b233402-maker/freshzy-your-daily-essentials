import { Menu, Bell, Search, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AdminHeaderProps {
  onMenuClick: () => void;
  title: string;
}

const AdminHeader = ({ onMenuClick, title }: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="font-semibold text-lg">{title}</h1>
            <p className="text-xs text-muted-foreground">অ্যাডমিন প্যানেল</p>
          </div>
        </div>

        {/* Search - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="ব্যবহারকারী, ভেন্ডর বা অর্ডার খুঁজুন..." 
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Admin Badge */}
          <Badge className="hidden sm:flex bg-gradient-to-r from-primary to-purple-600 text-white">
            <Shield className="w-3 h-3 mr-1" />
            Super Admin
          </Badge>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500">
              5
            </Badge>
          </Button>

          {/* Avatar */}
          <Avatar className="h-9 w-9 border-2 border-primary/20">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Admin" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white">A</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
