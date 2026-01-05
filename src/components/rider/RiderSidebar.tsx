import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  MapPin, 
  Wallet,
  Clock,
  Star,
  Settings,
  ChevronLeft,
  Bike,
  Navigation
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { riderProfile, riderStats, getActiveDeliveries } from '@/data/riderData';

interface RiderSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'ড্যাশবোর্ড', path: '/rider' },
  { icon: Package, label: 'অ্যাক্টিভ ডেলিভারি', path: '/rider/deliveries', badge: getActiveDeliveries().length },
  { icon: Navigation, label: 'রুট ম্যাপ', path: '/rider/route' },
  { icon: Wallet, label: 'আয়', path: '/rider/earnings' },
  { icon: Clock, label: 'ডেলিভারি হিস্ট্রি', path: '/rider/history' },
  { icon: Star, label: 'রেটিং ও রিভিউ', path: '/rider/ratings' },
  { icon: Settings, label: 'সেটিংস', path: '/rider/settings' },
];

const RiderSidebar = ({ isOpen, onClose }: RiderSidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full bg-card border-r z-50 transition-transform duration-300 w-72",
        "lg:translate-x-0 lg:static lg:z-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Bike className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Freshzy রাইডার</h2>
                  <p className="text-xs text-muted-foreground">ডেলিভারি পার্টনার</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden"
                onClick={onClose}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            {/* Rider Profile */}
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <img 
                src={riderProfile.avatar} 
                alt={riderProfile.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{riderProfile.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{riderProfile.rating}</span>
                  <span>•</span>
                  <span>{riderProfile.totalDeliveries} ডেলিভারি</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-4 border-b">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-lg font-bold text-green-600">৳{riderStats.todayEarnings}</p>
                <p className="text-xs text-muted-foreground">আজকের আয়</p>
              </div>
              <div className="text-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-lg font-bold text-blue-600">{riderStats.todayDeliveries}</p>
                <p className="text-xs text-muted-foreground">আজকের ডেলিভারি</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/rider'}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && item.badge > 0 && (
                      <Badge variant="secondary" className="bg-orange-500 text-white">
                        {item.badge}
                      </Badge>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Vehicle Info */}
          <div className="p-4 border-t">
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Bike className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">যানবাহন তথ্য</span>
              </div>
              <p className="text-sm text-muted-foreground">{riderProfile.vehicleNumber}</p>
              <p className="text-xs text-muted-foreground capitalize">{riderProfile.vehicleType}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RiderSidebar;
