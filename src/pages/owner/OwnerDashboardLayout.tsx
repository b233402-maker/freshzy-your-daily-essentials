import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import OwnerSidebar from '@/components/owner/OwnerSidebar';
import OwnerHeader from '@/components/owner/OwnerHeader';

const pageTitles: Record<string, string> = {
  '/owner': 'Dashboard',
  '/owner/queue': 'Queue Management',
  '/owner/orders': 'Orders',
  '/owner/services': 'Services',
  '/owner/analytics': 'Analytics',
  '/owner/customers': 'Customers',
  '/owner/settings': 'Settings',
};

const OwnerDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    return pageTitles[location.pathname] || 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <OwnerSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <OwnerHeader 
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

export default OwnerDashboardLayout;
