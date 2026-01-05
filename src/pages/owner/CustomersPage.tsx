import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Phone, 
  Mail,
  ShoppingBag,
  Star,
  TrendingUp,
  MoreVertical
} from 'lucide-react';
import { useState } from 'react';

interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  totalOrders: number;
  totalSpent: number;
  lastVisit: string;
  rating?: number;
  isVIP: boolean;
}

const customers: Customer[] = [
  {
    id: 'c1',
    name: 'রাহিম আহমেদ',
    phone: '+880 1712-111111',
    email: 'rahim@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    totalOrders: 24,
    totalSpent: 12500,
    lastVisit: 'আজ',
    rating: 5,
    isVIP: true,
  },
  {
    id: 'c2',
    name: 'ফাতেমা খান',
    phone: '+880 1812-222222',
    totalOrders: 18,
    totalSpent: 9800,
    lastVisit: 'গতকাল',
    rating: 4,
    isVIP: true,
  },
  {
    id: 'c3',
    name: 'করিম সাহেব',
    phone: '+880 1912-333333',
    totalOrders: 12,
    totalSpent: 5600,
    lastVisit: '৩ দিন আগে',
    isVIP: false,
  },
  {
    id: 'c4',
    name: 'সুমাইয়া আক্তার',
    phone: '+880 1612-444444',
    email: 'sumaiya@example.com',
    totalOrders: 8,
    totalSpent: 4200,
    lastVisit: '১ সপ্তাহ আগে',
    rating: 5,
    isVIP: false,
  },
  {
    id: 'c5',
    name: 'মাহমুদ হাসান',
    phone: '+880 1512-555555',
    totalOrders: 5,
    totalSpent: 1850,
    lastVisit: '২ সপ্তাহ আগে',
    isVIP: false,
  },
];

const CustomersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  );

  const totalCustomers = customers.length;
  const vipCustomers = customers.filter(c => c.isVIP).length;
  const avgOrderValue = Math.round(
    customers.reduce((acc, c) => acc + c.totalSpent, 0) / 
    customers.reduce((acc, c) => acc + c.totalOrders, 0)
  );

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">{totalCustomers}</p>
            <p className="text-sm text-muted-foreground">Total Customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{vipCustomers}</p>
            <p className="text-sm text-muted-foreground">VIP Customers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">৳{avgOrderValue}</p>
            <p className="text-sm text-muted-foreground">Avg. Order Value</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by name or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Customer List */}
      <div className="space-y-4">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="hover:shadow-md transition-all">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarImage src={customer.avatar} alt={customer.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {customer.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{customer.name}</h3>
                    {customer.isVIP && (
                      <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        VIP
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {customer.phone}
                    </span>
                    {customer.email && (
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {customer.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="hidden sm:flex items-center gap-6 text-center">
                  <div>
                    <p className="text-lg font-bold text-primary">{customer.totalOrders}</p>
                    <p className="text-xs text-muted-foreground">Orders</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600">৳{customer.totalSpent.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Total Spent</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{customer.lastVisit}</p>
                    <p className="text-xs text-muted-foreground">Last Visit</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Mobile Stats */}
              <div className="flex sm:hidden justify-around mt-4 pt-4 border-t border-border">
                <div className="text-center">
                  <p className="font-bold text-primary">{customer.totalOrders}</p>
                  <p className="text-xs text-muted-foreground">Orders</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-green-600">৳{customer.totalSpent.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Spent</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm">{customer.lastVisit}</p>
                  <p className="text-xs text-muted-foreground">Last Visit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomersPage;
