import { useState } from 'react';
import { Search, Calendar, Package, CheckCircle, XCircle, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCompletedDeliveries, deliveryStatusLabels, deliveryStatusColors, deliveryOrders } from '@/data/riderData';

const DeliveryHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  const allDeliveries = deliveryOrders.filter(d => 
    ['delivered', 'cancelled'].includes(d.status)
  );

  const filteredDeliveries = allDeliveries.filter(delivery => {
    const matchesSearch = 
      delivery.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delivery.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      delivery.vendor.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || delivery.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const completedCount = allDeliveries.filter(d => d.status === 'delivered').length;
  const cancelledCount = allDeliveries.filter(d => d.status === 'cancelled').length;
  const totalEarnings = allDeliveries
    .filter(d => d.status === 'delivered')
    .reduce((sum, d) => sum + d.deliveryFee + d.tip, 0);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
          <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
          <p className="text-2xl font-bold text-green-600">{completedCount}</p>
          <p className="text-sm text-muted-foreground">সম্পন্ন</p>
        </div>
        <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
          <XCircle className="w-6 h-6 mx-auto mb-2 text-red-600" />
          <p className="text-2xl font-bold text-red-600">{cancelledCount}</p>
          <p className="text-sm text-muted-foreground">বাতিল</p>
        </div>
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <Package className="w-6 h-6 mx-auto mb-2 text-blue-600" />
          <p className="text-2xl font-bold text-blue-600">৳{totalEarnings}</p>
          <p className="text-sm text-muted-foreground">মোট আয়</p>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="অর্ডার নম্বর, কাস্টমার বা ভেন্ডর খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="স্ট্যাটাস" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">সব</SelectItem>
                <SelectItem value="delivered">সম্পন্ন</SelectItem>
                <SelectItem value="cancelled">বাতিল</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Delivery List */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-muted-foreground" />
            ডেলিভারি হিস্ট্রি
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredDeliveries.length > 0 ? (
            <div className="space-y-3">
              {filteredDeliveries.map((delivery) => (
                <div 
                  key={delivery.id}
                  className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg"
                >
                  <img 
                    src={delivery.vendor.image}
                    alt={delivery.vendor.name}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold truncate">{delivery.vendor.name}</h3>
                      <Badge className={deliveryStatusColors[delivery.status]}>
                        {deliveryStatusLabels[delivery.status]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      #{delivery.orderNumber}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      কাস্টমার: {delivery.customer.name}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      ঠিকানা: {delivery.customer.address}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span className="text-muted-foreground">
                        দূরত্ব: {delivery.distance} কি.মি.
                      </span>
                      <span className="text-muted-foreground">
                        সময়: {delivery.estimatedTime} মিনিট
                      </span>
                    </div>

                    {delivery.deliveredAt && (
                      <p className="text-xs text-muted-foreground mt-2">
                        ডেলিভারি: {new Date(delivery.deliveredAt).toLocaleString('bn-BD')}
                      </p>
                    )}
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-bold text-green-600">
                      ৳{delivery.deliveryFee + delivery.tip}
                    </p>
                    {delivery.tip > 0 && (
                      <p className="text-xs text-muted-foreground">
                        (টিপ: ৳{delivery.tip})
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Package className="w-12 h-12 mx-auto mb-3 text-muted-foreground/50" />
              <p>কোনো ডেলিভারি পাওয়া যায়নি</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DeliveryHistory;
