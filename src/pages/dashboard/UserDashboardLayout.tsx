import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/dashboard/orders/active': 'Active Orders',
  '/dashboard/orders/history': 'Order History',
  '/dashboard/profile': 'Profile',
  '/dashboard/addresses': 'Saved Addresses',
};

const UserDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    // Check for order detail page
    if (location.pathname.match(/\/dashboard\/orders\/[^/]+$/)) {
      return 'Order Details';
    }
    return pageTitles[location.pathname] || 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <DashboardSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        <DashboardHeader 
          onMenuClick={() => setSidebarOpen(true)}
          title={getTitle()}
        />
        
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
