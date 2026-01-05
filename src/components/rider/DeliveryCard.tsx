import { MapPin, Phone, Package, Clock, Navigation, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DeliveryOrder, deliveryStatusLabels, deliveryStatusColors } from '@/data/riderData';

interface DeliveryCardProps {
  delivery: DeliveryOrder;
  onAccept?: () => void;
  onPickup?: () => void;
  onDeliver?: () => void;
  onNavigate?: () => void;
  onCall?: (phone: string) => void;
  onViewDetails?: () => void;
  showActions?: boolean;
}

const DeliveryCard = ({ 
  delivery, 
  onAccept, 
  onPickup, 
  onDeliver, 
  onNavigate,
  onCall,
  onViewDetails,
  showActions = true 
}: DeliveryCardProps) => {
  const getActionButton = () => {
    switch (delivery.status) {
      case 'pending':
        return (
          <Button onClick={onAccept} className="w-full bg-green-600 hover:bg-green-700">
            অর্ডার গ্রহণ করুন
          </Button>
        );
      case 'accepted':
        return (
          <Button onClick={onPickup} className="w-full bg-blue-600 hover:bg-blue-700">
            পিকআপ সম্পন্ন
          </Button>
        );
      case 'picked_up':
      case 'on_the_way':
        return (
          <Button onClick={onDeliver} className="w-full bg-primary hover:bg-primary/90">
            ডেলিভারি সম্পন্ন
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-muted/30">
          <div className="flex items-center gap-3">
            <img 
              src={delivery.vendor.image} 
              alt={delivery.vendor.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">{delivery.vendor.name}</h3>
              <p className="text-sm text-muted-foreground">#{delivery.orderNumber}</p>
            </div>
          </div>
          <Badge className={deliveryStatusColors[delivery.status]}>
            {deliveryStatusLabels[delivery.status]}
          </Badge>
        </div>

        {/* Route Info */}
        <div className="p-4 space-y-3">
          {/* Pickup Location */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center flex-shrink-0">
              <Package className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">পিকআপ পয়েন্ট</p>
              <p className="text-sm font-medium truncate">{delivery.vendor.address}</p>
              {delivery.status === 'accepted' && (
                <Button 
                  variant="link" 
                  size="sm" 
                  className="h-auto p-0 text-blue-600"
                  onClick={() => onCall?.(delivery.vendor.phone)}
                >
                  <Phone className="w-3 h-3 mr-1" />
                  {delivery.vendor.phone}
                </Button>
              )}
            </div>
          </div>

          {/* Connector Line */}
          <div className="ml-4 border-l-2 border-dashed border-muted-foreground/30 h-4" />

          {/* Delivery Location */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">ডেলিভারি ঠিকানা</p>
              <p className="text-sm font-medium">{delivery.customer.name}</p>
              <p className="text-sm text-muted-foreground truncate">{delivery.customer.address}</p>
              {(delivery.status === 'picked_up' || delivery.status === 'on_the_way') && (
                <Button 
                  variant="link" 
                  size="sm" 
                  className="h-auto p-0 text-green-600"
                  onClick={() => onCall?.(delivery.customer.phone)}
                >
                  <Phone className="w-3 h-3 mr-1" />
                  {delivery.customer.phone}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="px-4 pb-3">
          <div className="text-xs text-muted-foreground mb-1">অর্ডার আইটেম:</div>
          <div className="flex flex-wrap gap-1">
            {delivery.items.map((item, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {item.name} x{item.quantity}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 px-4 pb-4">
          <div className="text-center p-2 bg-muted rounded-lg">
            <Navigation className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <p className="text-sm font-semibold">{delivery.distance} কি.মি.</p>
          </div>
          <div className="text-center p-2 bg-muted rounded-lg">
            <Clock className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <p className="text-sm font-semibold">{delivery.estimatedTime} মিনিট</p>
          </div>
          <div className="text-center p-2 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground">আয়</p>
            <p className="text-sm font-semibold text-green-600">৳{delivery.deliveryFee + delivery.tip}</p>
          </div>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="p-4 border-t bg-muted/30 space-y-2">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={onNavigate}
              >
                <Navigation className="w-4 h-4 mr-2" />
                নেভিগেট
              </Button>
              <Button 
                variant="outline"
                onClick={onViewDetails}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            {getActionButton()}
          </div>
        )}

        {/* Payment Info */}
        <div className="px-4 pb-4 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            পেমেন্ট: {delivery.paymentMethod === 'cash' ? 'ক্যাশ' : 'অনলাইন'}
          </span>
          {delivery.paymentMethod === 'cash' && !delivery.isPaid && (
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              ৳{delivery.totalAmount} সংগ্রহ করুন
            </Badge>
          )}
          {delivery.isPaid && (
            <Badge className="bg-green-100 text-green-800">পেমেন্ট সম্পন্ন</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryCard;
