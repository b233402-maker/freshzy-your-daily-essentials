import { useState } from 'react';
import { Package, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import DeliveryCard from '@/components/rider/DeliveryCard';
import { 
  deliveryOrders, 
  getActiveDeliveries 
} from '@/data/riderData';
import { toast } from 'sonner';

const ActiveDeliveries = () => {
  const [orders, setOrders] = useState(deliveryOrders);
  
  const pendingOrders = orders.filter(o => o.status === 'pending');
  const acceptedOrders = orders.filter(o => o.status === 'accepted');
  const inProgressOrders = orders.filter(o => ['picked_up', 'on_the_way'].includes(o.status));

  const handleAccept = (id: string) => {
    setOrders(prev => prev.map(o => 
      o.id === id ? { ...o, status: 'accepted' as const } : o
    ));
    toast.success('অর্ডার গ্রহণ করা হয়েছে!');
  };

  const handlePickup = (id: string) => {
    setOrders(prev => prev.map(o => 
      o.id === id ? { ...o, status: 'picked_up' as const, pickedUpAt: new Date().toISOString() } : o
    ));
    toast.success('পিকআপ সম্পন্ন হয়েছে!');
  };

  const handleDeliver = (id: string) => {
    setOrders(prev => prev.map(o => 
      o.id === id ? { ...o, status: 'delivered' as const, deliveredAt: new Date().toISOString() } : o
    ));
    toast.success('ডেলিভারি সম্পন্ন হয়েছে!');
  };

  const handleNavigate = (id: string) => {
    const order = orders.find(o => o.id === id);
    if (order) {
      const destination = order.status === 'accepted' 
        ? order.vendor 
        : order.customer;
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}`, '_blank');
    }
  };

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <p className="text-2xl font-bold text-yellow-600">{pendingOrders.length}</p>
          <p className="text-sm text-muted-foreground">অপেক্ষমান</p>
        </div>
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-2xl font-bold text-blue-600">{acceptedOrders.length}</p>
          <p className="text-sm text-muted-foreground">গৃহীত</p>
        </div>
        <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
          <p className="text-2xl font-bold text-orange-600">{inProgressOrders.length}</p>
          <p className="text-sm text-muted-foreground">পথে আছে</p>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="pending">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="gap-2">
            অপেক্ষমান
            {pendingOrders.length > 0 && (
              <Badge variant="secondary" className="bg-yellow-500 text-white">
                {pendingOrders.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="accepted" className="gap-2">
            গৃহীত
            {acceptedOrders.length > 0 && (
              <Badge variant="secondary" className="bg-blue-500 text-white">
                {acceptedOrders.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="in_progress" className="gap-2">
            পথে আছে
            {inProgressOrders.length > 0 && (
              <Badge variant="secondary" className="bg-orange-500 text-white">
                {inProgressOrders.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-6">
          {pendingOrders.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {pendingOrders.map((delivery) => (
                <DeliveryCard 
                  key={delivery.id} 
                  delivery={delivery}
                  onAccept={() => handleAccept(delivery.id)}
                  onNavigate={() => handleNavigate(delivery.id)}
                  onCall={handleCall}
                />
              ))}
            </div>
          ) : (
            <EmptyState message="কোনো অপেক্ষমান অর্ডার নেই" />
          )}
        </TabsContent>

        <TabsContent value="accepted" className="mt-6">
          {acceptedOrders.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {acceptedOrders.map((delivery) => (
                <DeliveryCard 
                  key={delivery.id} 
                  delivery={delivery}
                  onPickup={() => handlePickup(delivery.id)}
                  onNavigate={() => handleNavigate(delivery.id)}
                  onCall={handleCall}
                />
              ))}
            </div>
          ) : (
            <EmptyState message="কোনো গৃহীত অর্ডার নেই" />
          )}
        </TabsContent>

        <TabsContent value="in_progress" className="mt-6">
          {inProgressOrders.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {inProgressOrders.map((delivery) => (
                <DeliveryCard 
                  key={delivery.id} 
                  delivery={delivery}
                  onDeliver={() => handleDeliver(delivery.id)}
                  onNavigate={() => handleNavigate(delivery.id)}
                  onCall={handleCall}
                />
              ))}
            </div>
          ) : (
            <EmptyState message="কোনো চলমান ডেলিভারি নেই" />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

const EmptyState = ({ message }: { message: string }) => (
  <div className="text-center py-12 text-muted-foreground">
    <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
    <p>{message}</p>
    <p className="text-sm">নতুন অর্ডারের জন্য অপেক্ষা করুন</p>
  </div>
);

export default ActiveDeliveries;
