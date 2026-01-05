import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Notification, 
  formatTimeAgo, 
  getNotificationIcon, 
  getPriorityColor 
} from '@/data/notificationsData';

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onClose?: () => void;
}

const NotificationItem = ({ notification, onMarkAsRead, onClose }: NotificationItemProps) => {
  const handleClick = () => {
    if (!notification.read) {
      onMarkAsRead(notification.id);
    }
    onClose?.();
  };

  const content = (
    <div
      className={cn(
        "flex gap-3 p-3 rounded-lg transition-colors cursor-pointer",
        notification.read 
          ? "bg-transparent hover:bg-muted/50" 
          : "bg-primary/5 hover:bg-primary/10"
      )}
      onClick={handleClick}
    >
      {/* Icon */}
      <div className="relative flex-shrink-0">
        <span className="text-xl">{getNotificationIcon(notification.type)}</span>
        {!notification.read && (
          <span className={cn(
            "absolute -top-1 -right-1 w-2 h-2 rounded-full",
            getPriorityColor(notification.priority)
          )} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={cn(
          "text-sm line-clamp-1",
          notification.read ? "text-muted-foreground" : "font-medium text-foreground"
        )}>
          {notification.title}
        </p>
        <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
          {notification.message}
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          {formatTimeAgo(notification.timestamp)}
        </p>
      </div>
    </div>
  );

  if (notification.link) {
    return <Link to={notification.link}>{content}</Link>;
  }

  return content;
};

export default NotificationItem;
