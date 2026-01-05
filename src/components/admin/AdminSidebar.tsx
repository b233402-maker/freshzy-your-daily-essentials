import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  Bike,
  BarChart3,
  Settings,
  ChevronLeft,
  Shield,
  Bell,
  FileText,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { adminStats } from '@/data/adminData';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'ড্যাশবোর্ড', path: '/admin' },
  { icon: Users, label: 'ব্যবহারকারী', path: '/admin/users' },
  { icon: Store, label: 'ভেন্ডর', path: '/admin/vendors', badge: adminStats.pendingVendors },
  { icon: Bike, label: 'রাইডার', path: '/admin/riders', badge: adminStats.pendingRiders },
  { icon: BarChart3, label: 'অ্যানালিটিক্স', path: '/admin/analytics' },
  { icon: CreditCard, label: 'পেমেন্ট', path: '/admin/payments' },
  { icon: FileText, label: 'রিপোর্ট', path: '/admin/reports' },
  { icon: Bell, label: 'নোটিফিকেশন', path: '/admin/notifications' },
  { icon: Settings, label: 'সেটিংস', path: '/admin/settings' },
];

const AdminSidebar = ({ isOpen, onClose }: AdminSidebarProps) => {
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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">Freshzy Admin</h2>
                  <p className="text-xs text-muted-foreground">প্ল্যাটফর্ম ম্যানেজমেন্ট</p>
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
          </div>

          {/* Quick Stats */}
          <div className="p-4 border-b">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-lg font-bold text-blue-600">{adminStats.totalUsers.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">মোট ব্যবহারকারী</p>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-lg font-bold text-green-600">৳{(adminStats.monthlyRevenue / 1000000).toFixed(1)}M</p>
                <p className="text-xs text-muted-foreground">মাসিক রেভিনিউ</p>
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
                    end={item.path === '/admin'}
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

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="p-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg">
              <p className="text-sm font-medium">সিস্টেম স্ট্যাটাস</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">সব সিস্টেম সচল</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
