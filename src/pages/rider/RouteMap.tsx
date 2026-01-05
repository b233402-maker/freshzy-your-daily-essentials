import { useState } from 'react';
import { MapPin, Navigation, Phone, Package, Clock, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getActiveDeliveries, deliveryStatusLabels, deliveryStatusColors } from '@/data/riderData';

const RouteMap = () => {
  const activeDeliveries = getActiveDeliveries();
  const [selectedDelivery, setSelectedDelivery] = useState(activeDeliveries[0] || null);

  const handleNavigate = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Map Placeholder */}
      <Card className="overflow-hidden">
        <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-950 dark:to-green-950">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-primary animate-bounce" />
              <p className="text-lg font-medium">রুট ম্যাপ</p>
              <p className="text-sm text-muted-foreground">
                Google Maps ইন্টিগ্রেশনের জন্য API key প্রয়োজন
              </p>
              {selectedDelivery && (
                <Button 
                  className="mt-4"
                  onClick={() => {
                    const dest = selectedDelivery.status === 'accepted' 
                      ? selectedDelivery.vendor 
                      : selectedDelivery.customer;
                    handleNavigate(dest.lat, dest.lng);
                  }}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Google Maps এ খুলুন
                </Button>
              )}
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute top-4 left-4 right-4 flex gap-2">
            <div className="bg-background/90 backdrop-blur px-3 py-2 rounded-lg shadow">
              <p className="text-xs text-muted-foreground">মোট দূরত্ব</p>
              <p className="font-bold">
                {activeDeliveries.reduce((sum, d) => sum + d.distance, 0).toFixed(1)} কি.মি.
              </p>
            </div>
            <div className="bg-background/90 backdrop-blur px-3 py-2 rounded-lg shadow">
              <p className="text-xs text-muted-foreground">আনুমানিক সময়</p>
              <p className="font-bold">
                {activeDeliveries.reduce((sum, d) => sum + d.estimatedTime, 0)} মিনিট
              </p>
            </div>
            <div className="bg-background/90 backdrop-blur px-3 py-2 rounded-lg shadow">
              <p className="text-xs text-muted-foreground">ডেলিভারি</p>
              <p className="font-bold">{activeDeliveries.length}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Route List */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Navigation className="w-5 h-5 text-primary" />
            ডেলিভারি রুট
          </CardTitle>
        </CardHeader>
        <CardContent>
          {activeDeliveries.length > 0 ? (
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-3">
                {activeDeliveries.map((delivery, index) => (
                  <div
                    key={delivery.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedDelivery?.id === delivery.id 
                        ? 'border-primary bg-primary/5' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => setSelectedDelivery(delivery)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Step Number */}
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold truncate">
                            {delivery.status === 'accepted' ? delivery.vendor.name : delivery.customer.name}
                          </h3>
                          <Badge className={deliveryStatusColors[delivery.status]}>
                            {deliveryStatusLabels[delivery.status]}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground truncate mb-2">
                          {delivery.status === 'accepted' 
                            ? delivery.vendor.address 
                            : delivery.customer.address}
                        </p>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Navigation className="w-3 h-3" />
                            {delivery.distance} কি.মি.
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {delivery.estimatedTime} মিনিট
                          </div>
                        </div>

                        <div className="flex gap-2 mt-3">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              const dest = delivery.status === 'accepted' 
                                ? delivery.vendor 
                                : delivery.customer;
                              handleNavigate(dest.lat, dest.lng);
                            }}
                          >
                            <Navigation className="w-3 h-3 mr-1" />
                            নেভিগেট
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              const phone = delivery.status === 'accepted' 
                                ? delivery.vendor.phone 
                                : delivery.customer.phone;
                              window.open(`tel:${phone}`, '_self');
                            }}
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            কল
                          </Button>
                        </div>
                      </div>

                      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    </div>

                    {/* Task Type Indicator */}
                    <div className="mt-3 pt-3 border-t flex items-center gap-2 text-sm">
                      <Package className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {delivery.status === 'accepted' ? 'পিকআপ করুন' : 'ডেলিভারি করুন'}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="font-medium">৳{delivery.deliveryFee + delivery.tip}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-3 text-muted-foreground/50" />
              <p>কোনো অ্যাক্টিভ ডেলিভারি নেই</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RouteMap;
