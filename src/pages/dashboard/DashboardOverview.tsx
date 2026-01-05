import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShoppingBag, 
  Clock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Scissors,
  Shirt
} from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import OrderCard from '@/components/dashboard/OrderCard';
import { userProfile, getActiveOrders, getOrderHistory } from '@/data/orderData';

const DashboardOverview = () => {
  const activeOrders = getActiveOrders();
  const orderHistory = getOrderHistory();

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground overflow-hidden relative">
        <CardContent className="p-6">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">
              Welcome back, {userProfile.name.split(' ')[0]}! 👋
            </h2>
            <p className="text-primary-foreground/80 mb-4">
              You have {activeOrders.length} active order{activeOrders.length !== 1 ? 's' : ''}
            </p>
            <div className="flex gap-3">
              <Button 
                variant="secondary" 
                size="sm"
                asChild
              >
                <Link to="/vendors?type=salon">
                  <Scissors className="h-4 w-4 mr-2" />
                  Book Salon
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 hover:bg-white/20"
                asChild
              >
                <Link to="/vendors?type=laundry">
                  <Shirt className="h-4 w-4 mr-2" />
                  Order Laundry
                </Link>
              </Button>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 right-20 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Orders"
          value={userProfile.totalOrders}
          icon={ShoppingBag}
          color="primary"
        />
        <StatsCard 
          title="Active Orders"
          value={activeOrders.length}
          icon={Clock}
          color="blue"
        />
        <StatsCard 
          title="Completed"
          value={orderHistory.filter(o => o.status === 'completed').length}
          icon={CheckCircle}
          color="green"
        />
        <StatsCard 
          title="Loyalty Points"
          value={userProfile.loyaltyPoints}
          icon={Star}
          color="secondary"
        />
      </div>

      {/* Active Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">Active Orders</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/orders/active">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {activeOrders.length > 0 ? (
            activeOrders.slice(0, 2).map(order => (
              <OrderCard key={order.id} order={order} />
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <ShoppingBag className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No active orders</p>
              <Button className="mt-4" asChild>
                <Link to="/vendors">Browse Services</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg">Recent Orders</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/orders/history">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {orderHistory.slice(0, 2).map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
