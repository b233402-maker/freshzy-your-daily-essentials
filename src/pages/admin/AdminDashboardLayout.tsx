import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

const AdminDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;
    if (path === '/admin') return 'ড্যাশবোর্ড';
    if (path.includes('/users')) return 'ব্যবহারকারী ম্যানেজমেন্ট';
    if (path.includes('/vendors')) return 'ভেন্ডর ম্যানেজমেন্ট';
    if (path.includes('/riders')) return 'রাইডার ম্যানেজমেন্ট';
    if (path.includes('/analytics')) return 'অ্যানালিটিক্স';
    if (path.includes('/payments')) return 'পেমেন্ট';
    if (path.includes('/reports')) return 'রিপোর্ট';
    if (path.includes('/notifications')) return 'নোটিফিকেশন';
    if (path.includes('/settings')) return 'সিস্টেম সেটিংস';
    return 'অ্যাডমিন ড্যাশবোর্ড';
  };

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader 
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

export default AdminDashboardLayout;
