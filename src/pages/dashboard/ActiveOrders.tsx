import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import OrderCard from '@/components/dashboard/OrderCard';
import { getActiveOrders } from '@/data/orderData';

const ActiveOrders = () => {
  const activeOrders = getActiveOrders();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {activeOrders.length} Active Order{activeOrders.length !== 1 ? 's' : ''}
          </h2>
          <p className="text-sm text-muted-foreground">
            Track your ongoing orders in real-time
          </p>
        </div>
      </div>

      {/* Orders List */}
      {activeOrders.length > 0 ? (
        <div className="space-y-4">
          {activeOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold mb-2">No Active Orders</h3>
            <p className="text-muted-foreground mb-6">
              You don't have any active orders at the moment.
            </p>
            <Button asChild>
              <Link to="/vendors">Browse Services</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ActiveOrders;
