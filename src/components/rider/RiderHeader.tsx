import { Menu, MapPin, Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { riderProfile } from '@/data/riderData';
import { useState } from 'react';
import NotificationCenter from '@/components/notifications/NotificationCenter';

interface RiderHeaderProps {
  onMenuClick: () => void;
  title: string;
}

const RiderHeader = ({ onMenuClick, title }: RiderHeaderProps) => {
  const [isOnline, setIsOnline] = useState(riderProfile.isOnline);

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
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span className="truncate max-w-[150px] sm:max-w-none">
                {riderProfile.currentLocation.address}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Online Status Toggle */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted">
            <Power className={`w-4 h-4 ${isOnline ? 'text-green-500' : 'text-muted-foreground'}`} />
            <span className="hidden sm:inline text-sm font-medium">
              {isOnline ? 'অনলাইন' : 'অফলাইন'}
            </span>
            <Switch
              checked={isOnline}
              onCheckedChange={setIsOnline}
              className="data-[state=checked]:bg-green-500"
            />
          </div>

          {/* Notifications */}
          <NotificationCenter role="rider" />

          {/* Avatar */}
          <Avatar className="h-9 w-9">
            <AvatarImage src={riderProfile.avatar} alt={riderProfile.name} />
            <AvatarFallback>{riderProfile.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default RiderHeader;
