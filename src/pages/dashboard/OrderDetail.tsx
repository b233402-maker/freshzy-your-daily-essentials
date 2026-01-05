import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Clock, 
  CreditCard,
  RotateCcw,
  MessageCircle,
  Truck,
  Store,
  Calendar
} from 'lucide-react';
import OrderTracking from '@/components/dashboard/OrderTracking';
import { orders, statusLabels, statusColors } from '@/data/orderData';
import { cn } from '@/lib/utils';

const OrderDetail = () => {
  const { orderId } = useParams();
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-4">Order Not Found</h2>
        <Button asChild>
          <Link to="/dashboard/orders/active">Back to Orders</Link>
        </Button>
      </div>
    );
  }

  const isActive = ['pending', 'confirmed', 'in_progress', 'ready', 'picked_up'].includes(order.status);

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" size="sm" asChild>
        <Link to={isActive ? "/dashboard/orders/active" : "/dashboard/orders/history"}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Orders
        </Link>
      </Button>

      {/* Order Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={order.vendorImage} 
                alt={order.vendorName}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{order.vendorName}</h2>
                <p className="text-sm text-muted-foreground">
                  {order.orderNumber}
                </p>
                <Badge className={cn("mt-1", statusColors[order.status])}>
                  {statusLabels[order.status]}
                </Badge>
              </div>
            </div>
            
            <div className="flex gap-2">
              {isActive && order.riderPhone && (
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Rider
                </Button>
              )}
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Support
              </Button>
              {order.status === 'completed' && (
                <Button size="sm">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reorder
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Tracking & Items */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Order Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <OrderTracking steps={order.trackingSteps} />
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div 
                    key={item.id}
                    className={cn(
                      "flex items-center justify-between py-3",
                      index !== order.items.length - 1 && "border-b border-border"
                    )}
                  >
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      {item.duration && (
                        <p className="text-sm text-muted-foreground">
                          Duration: {item.duration}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-medium">৳{item.price}</p>
                      <p className="text-sm text-muted-foreground">
                        x{item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>৳{order.totalAmount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="text-green-600">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-primary">৳{order.totalAmount}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Time Info */}
          {isActive && order.estimatedTime && (
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Time</p>
                    <p className="font-semibold text-primary">{order.estimatedTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Delivery/Appointment Info */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                {order.type === 'laundry' ? (
                  <>
                    <MapPin className="h-4 w-4 text-primary" />
                    Delivery Address
                  </>
                ) : (
                  <>
                    <Calendar className="h-4 w-4 text-primary" />
                    Appointment
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {order.type === 'laundry' ? (
                <>
                  <p className="text-sm">{order.deliveryAddress}</p>
                  {order.pickupTime && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Pickup: {order.pickupTime}</span>
                    </div>
                  )}
                  {order.deliveryTime && (
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="h-4 w-4 text-muted-foreground" />
                      <span>Delivery: {order.deliveryTime}</span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-sm">
                    <Store className="h-4 w-4 text-muted-foreground" />
                    <span>{order.vendorName}</span>
                  </div>
                  {order.scheduledDate && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{order.scheduledDate}, {order.scheduledTime}</span>
                    </div>
                  )}
                  {order.queuePosition && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Queue Position: #{order.queuePosition}</span>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Rider Info */}
          {order.riderName && isActive && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Rider Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {order.riderName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{order.riderName}</p>
                    <p className="text-sm text-muted-foreground">{order.riderPhone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Payment Info */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" />
                Payment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Method</span>
                  <span className="font-medium">
                    {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant={order.paymentStatus === 'paid' ? 'default' : 'secondary'}>
                    {order.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Date */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Order placed:</span>
                <span className="font-medium">{order.createdAt}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
