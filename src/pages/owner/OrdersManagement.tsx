import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Search, 
  Phone,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Filter
} from 'lucide-react';
import { ownerOrders, ownerOrderStatusLabels, OwnerOrder } from '@/data/ownerData';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const OrdersManagement = () => {
  const [orders, setOrders] = useState<OwnerOrder[]>(ownerOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const pendingOrders = filteredOrders.filter(o => o.status === 'pending');
  const activeOrders = filteredOrders.filter(o => ['confirmed', 'in_progress'].includes(o.status));
  const completedOrders = filteredOrders.filter(o => ['completed', 'cancelled'].includes(o.status));

  const handleConfirmOrder = (id: string) => {
    setOrders(orders.map(o => 
      o.id === id ? { ...o, status: 'confirmed' as const } : o
    ));
    toast.success('Order confirmed!');
  };

  const handleCancelOrder = (id: string) => {
    setOrders(orders.map(o => 
      o.id === id ? { ...o, status: 'cancelled' as const } : o
    ));
    toast.success('Order cancelled!');
  };

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    in_progress: 'bg-primary/10 text-primary',
    ready: 'bg-green-100 text-green-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const OrderCard = ({ order }: { order: OwnerOrder }) => (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{order.customerName}</h3>
              {order.isUrgent && (
                <Badge variant="destructive" className="text-xs">Urgent</Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{order.orderNumber}</p>
          </div>
          <Badge className={cn("text-xs", statusColors[order.status])}>
            {ownerOrderStatusLabels[order.status]}
          </Badge>
        </div>

        <div className="space-y-2 mb-3">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span>{item.name} x{item.quantity}</span>
              <span className="text-muted-foreground">৳{item.price}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {order.createdAt}
          </span>
          {order.scheduledTime && (
            <span>Scheduled: {order.scheduledTime}</span>
          )}
        </div>

        {order.notes && (
          <div className="p-2 bg-muted/50 rounded text-xs text-muted-foreground mb-3">
            Note: {order.notes}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <span className="text-lg font-bold text-primary">৳{order.totalAmount}</span>
            <Badge variant="outline" className="ml-2 text-xs">
              {order.paymentMethod === 'cod' ? 'COD' : 'Paid'}
            </Badge>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
            
            {order.status === 'pending' && (
              <>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="text-destructive border-destructive/30"
                  onClick={() => handleCancelOrder(order.id)}
                >
                  <XCircle className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm"
                  onClick={() => handleConfirmOrder(order.id)}
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Confirm
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by customer or order number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-background border shadow-lg">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="gap-2">
            Pending
            {pendingOrders.length > 0 && (
              <Badge variant="secondary" className="h-5 px-1.5">{pendingOrders.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="active" className="gap-2">
            Active
            {activeOrders.length > 0 && (
              <Badge variant="secondary" className="h-5 px-1.5">{activeOrders.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingOrders.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {pendingOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <h3 className="font-semibold mb-2">No Pending Orders</h3>
                <p className="text-muted-foreground">All caught up!</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {activeOrders.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {activeOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="font-semibold mb-2">No Active Orders</h3>
                <p className="text-muted-foreground">Active orders will appear here</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {completedOrders.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {completedOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="font-semibold mb-2">No Order History</h3>
                <p className="text-muted-foreground">Completed orders will appear here</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersManagement;
