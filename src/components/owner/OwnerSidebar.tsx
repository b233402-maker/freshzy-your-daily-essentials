import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  ClipboardList,
  Package,
  Users,
  BarChart3,
  Settings,
  LogOut,
  X,
  ChevronRight,
  Store,
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ownerVendor, ownerStats } from '@/data/ownerData';
import freshzyLogo from '@/assets/freshzy-logo.png';

interface OwnerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/owner' },
  { icon: ClipboardList, label: 'Queue Management', href: '/owner/queue', badge: 4 },
  { icon: Package, label: 'Orders', href: '/owner/orders' },
  { icon: Store, label: 'Services', href: '/owner/services' },
  { icon: BarChart3, label: 'Analytics', href: '/owner/analytics' },
  { icon: Users, label: 'Customers', href: '/owner/customers' },
  { icon: Settings, label: 'Settings', href: '/owner/settings' },
];

const OwnerSidebar = ({ isOpen, onClose }: OwnerSidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-72 bg-card border-r border-border transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-0 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo & Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <img src={freshzyLogo} alt="Freshzy" className="h-8 w-auto" />
            <div>
              <span className="font-bold text-lg text-primary">Freshzy</span>
              <span className="text-xs text-muted-foreground block">Owner Portal</span>
            </div>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Vendor Info */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <img 
              src={ownerVendor.image} 
              alt={ownerVendor.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm truncate">{ownerVendor.name}</h3>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "w-2 h-2 rounded-full",
                  ownerVendor.isOpen ? "bg-green-500" : "bg-red-500"
                )} />
                <span className="text-xs text-muted-foreground">
                  {ownerVendor.isOpen ? 'Open' : 'Closed'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2 p-4 border-b border-border">
          <div className="bg-primary/10 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-primary">৳{ownerStats.todayRevenue.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Today</p>
          </div>
          <div className="bg-secondary/10 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-secondary">{ownerStats.pendingOrders}</p>
            <p className="text-xs text-muted-foreground">Pending</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href || 
              (item.href !== '/owner' && location.pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 transition-transform group-hover:scale-110",
                  isActive && "text-primary-foreground"
                )} />
                <span className="font-medium flex-1">{item.label}</span>
                {item.badge && (
                  <Badge 
                    variant={isActive ? "secondary" : "default"}
                    className="h-5 min-w-[20px] px-1.5"
                  >
                    {item.badge}
                  </Badge>
                )}
                {isActive && (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-border space-y-2">
          <Button
            variant="outline"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link to="/">
              <Store className="h-5 w-5" />
              <span>View Store</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Button>
        </div>
      </aside>
    </>
  );
};

export default OwnerSidebar;
