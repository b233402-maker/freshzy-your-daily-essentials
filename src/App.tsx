import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import VendorsPage from "./pages/VendorsPage";
import VendorDetailPage from "./pages/VendorDetailPage";
import BecomePartnerPage from "./pages/BecomePartnerPage";
import BecomeRiderPage from "./pages/BecomeRiderPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import RefundPage from "./pages/RefundPage";
import NotFound from "./pages/NotFound";

// User Dashboard
import UserDashboardLayout from "./pages/dashboard/UserDashboardLayout";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import ActiveOrders from "./pages/dashboard/ActiveOrders";
import OrderHistory from "./pages/dashboard/OrderHistory";
import OrderDetail from "./pages/dashboard/OrderDetail";
import UserProfile from "./pages/dashboard/UserProfile";
import SavedAddresses from "./pages/dashboard/SavedAddresses";

// Owner Dashboard
import OwnerDashboardLayout from "./pages/owner/OwnerDashboardLayout";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import QueueManagement from "./pages/owner/QueueManagement";
import OrdersManagement from "./pages/owner/OrdersManagement";
import ServicesManagement from "./pages/owner/ServicesManagement";
import OwnerAnalytics from "./pages/owner/OwnerAnalytics";
import CustomersPage from "./pages/owner/CustomersPage";
import OwnerSettings from "./pages/owner/OwnerSettings";

// Rider Dashboard
import RiderDashboardLayout from "./pages/rider/RiderDashboardLayout";
import RiderDashboard from "./pages/rider/RiderDashboard";
import ActiveDeliveries from "./pages/rider/ActiveDeliveries";
import RouteMap from "./pages/rider/RouteMap";
import RiderEarnings from "./pages/rider/RiderEarnings";
import DeliveryHistory from "./pages/rider/DeliveryHistory";
import RiderRatings from "./pages/rider/RiderRatings";
import RiderSettings from "./pages/rider/RiderSettings";

// Admin Dashboard
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UsersManagement from "./pages/admin/UsersManagement";
import VendorsManagement from "./pages/admin/VendorsManagement";
import RidersManagement from "./pages/admin/RidersManagement";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/vendors" element={<VendorsPage />} />
            <Route path="/vendor/:id" element={<VendorDetailPage />} />
            <Route path="/become-partner" element={<BecomePartnerPage />} />
            <Route path="/become-rider" element={<BecomeRiderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/help" element={<HelpCenterPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund" element={<RefundPage />} />
          </Route>
          
          {/* User Dashboard Routes */}
          <Route path="/dashboard" element={<UserDashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="orders/active" element={<ActiveOrders />} />
            <Route path="orders/history" element={<OrderHistory />} />
            <Route path="orders/:orderId" element={<OrderDetail />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="addresses" element={<SavedAddresses />} />
          </Route>

          {/* Owner Dashboard Routes */}
          <Route path="/owner" element={<OwnerDashboardLayout />}>
            <Route index element={<OwnerDashboard />} />
            <Route path="queue" element={<QueueManagement />} />
            <Route path="orders" element={<OrdersManagement />} />
            <Route path="services" element={<ServicesManagement />} />
            <Route path="analytics" element={<OwnerAnalytics />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="settings" element={<OwnerSettings />} />
          </Route>

          {/* Rider Dashboard Routes */}
          <Route path="/rider" element={<RiderDashboardLayout />}>
            <Route index element={<RiderDashboard />} />
            <Route path="deliveries" element={<ActiveDeliveries />} />
            <Route path="route" element={<RouteMap />} />
            <Route path="earnings" element={<RiderEarnings />} />
            <Route path="history" element={<DeliveryHistory />} />
            <Route path="ratings" element={<RiderRatings />} />
            <Route path="settings" element={<RiderSettings />} />
          </Route>

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminDashboardLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UsersManagement />} />
            <Route path="vendors" element={<VendorsManagement />} />
            <Route path="riders" element={<RidersManagement />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
