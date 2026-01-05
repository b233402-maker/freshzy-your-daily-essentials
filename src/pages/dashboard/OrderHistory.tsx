import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, ClipboardList } from 'lucide-react';
import OrderCard from '@/components/dashboard/OrderCard';
import { getOrderHistory, OrderStatus } from '@/data/orderData';

const OrderHistory = () => {
  const allOrders = getOrderHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredOrders = allOrders.filter(order => {
    const matchesSearch = 
      order.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = typeFilter === 'all' || order.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by vendor or order number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[130px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="salon">Salon</SelectItem>
                  <SelectItem value="laundry">Laundry</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredOrders.length} of {allOrders.length} orders
        </p>
      </div>

      {/* Orders List */}
      {filteredOrders.length > 0 ? (
        <div className="space-y-4">
          {filteredOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <ClipboardList className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold mb-2">No Orders Found</h3>
            <p className="text-muted-foreground">
              {searchQuery || typeFilter !== 'all' || statusFilter !== 'all'
                ? "Try adjusting your filters"
                : "Your order history will appear here"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default OrderHistory;
