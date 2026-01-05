import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import RiderSidebar from '@/components/rider/RiderSidebar';
import RiderHeader from '@/components/rider/RiderHeader';

const RiderDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;
    if (path === '/rider') return 'ড্যাশবোর্ড';
    if (path.includes('/deliveries')) return 'অ্যাক্টিভ ডেলিভারি';
    if (path.includes('/route')) return 'রুট ম্যাপ';
    if (path.includes('/earnings')) return 'আয়';
    if (path.includes('/history')) return 'ডেলিভারি হিস্ট্রি';
    if (path.includes('/ratings')) return 'রেটিং ও রিভিউ';
    if (path.includes('/settings')) return 'সেটিংস';
    return 'রাইডার ড্যাশবোর্ড';
  };

  return (
    <div className="min-h-screen bg-background flex">
      <RiderSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <RiderHeader 
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

export default RiderDashboardLayout;
