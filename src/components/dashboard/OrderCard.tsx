import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  MapPin, 
  Phone, 
  RotateCcw, 
  Eye,
  Scissors,
  Shirt
} from 'lucide-react';
import { Order, statusLabels, statusColors } from '@/data/orderData';
import { cn } from '@/lib/utils';

interface OrderCardProps {
  order: Order;
  showActions?: boolean;
}

const OrderCard = ({ order, showActions = true }: OrderCardProps) => {
  const isActive = ['pending', 'confirmed', 'in_progress', 'ready', 'picked_up'].includes(order.status);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Vendor Image */}
          <div className="relative w-full sm:w-32 h-32 sm:h-auto flex-shrink-0">
            <img 
              src={order.vendorImage} 
              alt={order.vendorName}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2">
              <div className={cn(
                "p-1.5 rounded-full",
                order.type === 'salon' ? "bg-purple-500" : "bg-blue-500"
              )}>
                {order.type === 'salon' ? (
                  <Scissors className="h-3 w-3 text-white" />
                ) : (
                  <Shirt className="h-3 w-3 text-white" />
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {order.vendorName}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {order.orderNumber} • {order.createdAt}
                </p>
              </div>
              <Badge className={cn("text-xs", statusColors[order.status])}>
                {statusLabels[order.status]}
              </Badge>
            </div>

            {/* Order Items */}
            <div className="mb-3">
              <p className="text-sm text-muted-foreground">
                {order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}
              </p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-3">
              {order.estimatedTime && isActive && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {order.estimatedTime}
                </span>
              )}
              {order.deliveryAddress && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="truncate max-w-[150px]">{order.deliveryAddress}</span>
                </span>
              )}
              {order.riderPhone && isActive && (
                <span className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  {order.riderName}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
              <div>
                <span className="text-lg font-bold text-primary">৳{order.totalAmount}</span>
                <span className="text-xs text-muted-foreground ml-2">
                  ({order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'})
                </span>
              </div>
              
              {showActions && (
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <Link to={`/dashboard/orders/${order.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                  
                  {order.status === 'completed' && (
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <RotateCcw className="h-4 w-4 mr-1" />
                      Reorder
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;
