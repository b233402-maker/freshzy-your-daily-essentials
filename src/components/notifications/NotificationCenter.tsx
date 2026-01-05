import { useState, useEffect } from 'react';
import { Bell, Check, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { 
  Notification, 
  UserRole, 
  getNotificationsByRole,
  getUnreadCount 
} from '@/data/notificationsData';
import NotificationItem from './NotificationItem';
import { cn } from '@/lib/utils';

interface NotificationCenterProps {
  role: UserRole;
  className?: string;
}

const NotificationCenter = ({ role, className }: NotificationCenterProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load notifications for the role
    const roleNotifications = getNotificationsByRole(role);
    setNotifications(roleNotifications);
    setUnreadCount(getUnreadCount(role));
  }, [role]);

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  const unreadNotifications = notifications.filter(n => !n.read);
  const readNotifications = notifications.filter(n => n.read);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn("relative", className)}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-secondary text-secondary-foreground"
            >
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 sm:w-96 p-0" 
        align="end"
        sideOffset={8}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">নোটিফিকেশন</h3>
            {unreadCount > 0 && (
              <Badge variant="secondary" className="text-xs">
                {unreadCount} নতুন
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1">
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 text-xs"
                onClick={handleMarkAllAsRead}
              >
                <Check className="w-3 h-3 mr-1" />
                সব পড়া হয়েছে
              </Button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <ScrollArea className="h-[400px]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Bell className="w-12 h-12 mb-3 opacity-20" />
              <p className="text-sm">কোন নোটিফিকেশন নেই</p>
            </div>
          ) : (
            <div className="p-2">
              {/* Unread Section */}
              {unreadNotifications.length > 0 && (
                <>
                  <p className="text-xs font-medium text-muted-foreground px-2 py-1">
                    নতুন
                  </p>
                  {unreadNotifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={handleMarkAsRead}
                      onClose={() => setIsOpen(false)}
                    />
                  ))}
                </>
              )}

              {/* Read Section */}
              {readNotifications.length > 0 && (
                <>
                  {unreadNotifications.length > 0 && (
                    <Separator className="my-2" />
                  )}
                  <p className="text-xs font-medium text-muted-foreground px-2 py-1">
                    আগের
                  </p>
                  {readNotifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={handleMarkAsRead}
                      onClose={() => setIsOpen(false)}
                    />
                  ))}
                </>
              )}
            </div>
          )}
        </ScrollArea>

        {/* Footer */}
        <div className="border-t p-2">
          <Button 
            variant="ghost" 
            className="w-full justify-center text-sm"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="w-4 h-4 mr-2" />
            নোটিফিকেশন সেটিংস
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;
