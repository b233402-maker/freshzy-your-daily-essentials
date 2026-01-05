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
import NotFound from "./pages/NotFound";

// User Dashboard
import UserDashboardLayout from "./pages/dashboard/UserDashboardLayout";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import ActiveOrders from "./pages/dashboard/ActiveOrders";
import OrderHistory from "./pages/dashboard/OrderHistory";
import OrderDetail from "./pages/dashboard/OrderDetail";
import UserProfile from "./pages/dashboard/UserProfile";
import SavedAddresses from "./pages/dashboard/SavedAddresses";

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
            <Route path="/help" element={<HomePage />} />
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
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
