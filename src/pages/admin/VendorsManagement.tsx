import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Store,
  Star,
  CheckCircle,
  XCircle,
  Ban,
  Eye,
  Edit,
  Trash2,
  ShoppingBag,
  DollarSign
} from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  platformVendors, 
  userStatusLabels, 
  userStatusColors,
  adminStats
} from '@/data/adminData';
import { toast } from 'sonner';

const VendorsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredVendors = platformVendors.filter(vendor => {
    const matchesSearch = 
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || vendor.status === statusFilter;
    const matchesType = typeFilter === 'all' || vendor.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const pendingVendors = platformVendors.filter(v => v.status === 'pending');

  const handleApprove = (id: string) => {
    toast.success('ভেন্ডর অনুমোদন করা হয়েছে');
  };

  const handleReject = (id: string) => {
    toast.error('ভেন্ডর বাতিল করা হয়েছে');
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Store className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">{adminStats.totalVendors}</p>
            <p className="text-sm text-muted-foreground">মোট ভেন্ডর</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">
              {platformVendors.filter(v => v.status === 'active').length}
            </p>
            <p className="text-sm text-muted-foreground">সক্রিয় ভেন্ডর</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <XCircle className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl font-bold">{pendingVendors.length}</p>
            <p className="text-sm text-muted-foreground">পেন্ডিং অনুমোদন</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">
              ৳{(platformVendors.reduce((sum, v) => sum + v.totalRevenue, 0) / 1000000).toFixed(1)}M
            </p>
            <p className="text-sm text-muted-foreground">মোট রেভিনিউ</p>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      {pendingVendors.length > 0 && (
        <Card className="border-orange-200 dark:border-orange-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2 text-orange-600">
              <XCircle className="w-5 h-5" />
              পেন্ডিং অনুমোদন ({pendingVendors.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {pendingVendors.map((vendor) => (
                <div key={vendor.id} className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <img 
                    src={vendor.image} 
                    alt={vendor.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">{vendor.name}</h4>
                    <p className="text-sm text-muted-foreground">{vendor.ownerName}</p>
                    <p className="text-sm text-muted-foreground">{vendor.phone}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleApprove(vendor.id)}
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      অনুমোদন
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-red-600 border-red-300"
                      onClick={() => handleReject(vendor.id)}
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      বাতিল
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="নাম, মালিক বা ফোন দিয়ে খুঁজুন..."
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
                <SelectItem value="all">সব স্ট্যাটাস</SelectItem>
                <SelectItem value="active">সক্রিয়</SelectItem>
                <SelectItem value="inactive">নিষ্ক্রিয়</SelectItem>
                <SelectItem value="pending">অপেক্ষমান</SelectItem>
                <SelectItem value="suspended">স্থগিত</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="ধরন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">সব ধরন</SelectItem>
                <SelectItem value="salon">সেলুন</SelectItem>
                <SelectItem value="laundry">লন্ড্রি</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Vendors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVendors.map((vendor) => (
          <Card key={vendor.id} className="overflow-hidden">
            <div className="relative">
              <img 
                src={vendor.image} 
                alt={vendor.name}
                className="w-full h-40 object-cover"
              />
              <Badge 
                className={`absolute top-2 right-2 ${userStatusColors[vendor.status]}`}
              >
                {userStatusLabels[vendor.status]}
              </Badge>
              {vendor.isVerified && (
                <Badge className="absolute top-2 left-2 bg-blue-500 text-white">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  যাচাইকৃত
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{vendor.name}</h3>
                  <p className="text-sm text-muted-foreground">{vendor.ownerName}</p>
                </div>
                <Badge variant="outline">
                  {vendor.type === 'salon' ? 'সেলুন' : 'লন্ড্রি'}
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{vendor.rating}</span>
                  <span className="text-muted-foreground">({vendor.reviewCount})</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <ShoppingBag className="w-4 h-4" />
                  {vendor.totalOrders}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div className="p-2 bg-muted rounded-lg text-center">
                  <p className="text-muted-foreground">রেভিনিউ</p>
                  <p className="font-semibold">৳{vendor.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="p-2 bg-muted rounded-lg text-center">
                  <p className="text-muted-foreground">কমিশন</p>
                  <p className="font-semibold">{vendor.commissionRate}%</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  দেখুন
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      সম্পাদনা
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Ban className="w-4 h-4 mr-2" />
                      স্থগিত করুন
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      মুছে ফেলুন
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VendorsManagement;
