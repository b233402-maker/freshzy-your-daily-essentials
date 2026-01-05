import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Bike,
  Star,
  CheckCircle,
  XCircle,
  Ban,
  Eye,
  Trash2,
  Package,
  DollarSign
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  platformRiders, 
  userStatusLabels, 
  userStatusColors,
  adminStats
} from '@/data/adminData';
import { toast } from 'sonner';

const RidersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [vehicleFilter, setVehicleFilter] = useState('all');

  const filteredRiders = platformRiders.filter(rider => {
    const matchesSearch = 
      rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rider.phone.includes(searchTerm) ||
      rider.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || rider.status === statusFilter;
    const matchesVehicle = vehicleFilter === 'all' || rider.vehicleType === vehicleFilter;
    
    return matchesSearch && matchesStatus && matchesVehicle;
  });

  const pendingRiders = platformRiders.filter(r => r.status === 'pending');

  const handleApprove = (id: string) => {
    toast.success('রাইডার অনুমোদন করা হয়েছে');
  };

  const handleReject = (id: string) => {
    toast.error('রাইডার বাতিল করা হয়েছে');
  };

  const vehicleLabels: Record<string, string> = {
    motorcycle: 'মোটরসাইকেল',
    bicycle: 'সাইকেল',
    car: 'গাড়ি',
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Bike className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{adminStats.totalRiders}</p>
            <p className="text-sm text-muted-foreground">মোট রাইডার</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">
              {platformRiders.filter(r => r.status === 'active').length}
            </p>
            <p className="text-sm text-muted-foreground">সক্রিয় রাইডার</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <XCircle className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl font-bold">{pendingRiders.length}</p>
            <p className="text-sm text-muted-foreground">পেন্ডিং অনুমোদন</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Package className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">
              {platformRiders.reduce((sum, r) => sum + r.totalDeliveries, 0).toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">মোট ডেলিভারি</p>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      {pendingRiders.length > 0 && (
        <Card className="border-orange-200 dark:border-orange-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2 text-orange-600">
              <XCircle className="w-5 h-5" />
              পেন্ডিং রাইডার অনুমোদন ({pendingRiders.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingRiders.map((rider) => (
                <div key={rider.id} className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={rider.avatar} alt={rider.name} />
                    <AvatarFallback>
                      <Bike className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold">{rider.name}</h4>
                    <p className="text-sm text-muted-foreground">{rider.phone}</p>
                    <p className="text-sm text-muted-foreground">
                      {vehicleLabels[rider.vehicleType]} • {rider.vehicleNumber}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleApprove(rider.id)}
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      অনুমোদন
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-red-600 border-red-300"
                      onClick={() => handleReject(rider.id)}
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
                placeholder="নাম, ফোন বা গাড়ি নম্বর দিয়ে খুঁজুন..."
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
            <Select value={vehicleFilter} onValueChange={setVehicleFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="যানবাহন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">সব যানবাহন</SelectItem>
                <SelectItem value="motorcycle">মোটরসাইকেল</SelectItem>
                <SelectItem value="bicycle">সাইকেল</SelectItem>
                <SelectItem value="car">গাড়ি</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Riders Table */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bike className="w-5 h-5 text-muted-foreground" />
            রাইডার তালিকা
            <Badge variant="secondary" className="ml-2">{filteredRiders.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>রাইডার</TableHead>
                  <TableHead className="hidden md:table-cell">যানবাহন</TableHead>
                  <TableHead>রেটিং</TableHead>
                  <TableHead>স্ট্যাটাস</TableHead>
                  <TableHead className="hidden lg:table-cell">ডেলিভারি</TableHead>
                  <TableHead className="hidden lg:table-cell">আয়</TableHead>
                  <TableHead className="text-right">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRiders.map((rider) => (
                  <TableRow key={rider.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={rider.avatar} alt={rider.name} />
                          <AvatarFallback>
                            <Bike className="w-5 h-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{rider.name}</p>
                          <p className="text-xs text-muted-foreground">{rider.phone}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div>
                        <p className="text-sm">{vehicleLabels[rider.vehicleType]}</p>
                        <p className="text-xs text-muted-foreground">{rider.vehicleNumber}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      {rider.rating > 0 ? (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{rider.rating}</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">N/A</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge className={userStatusColors[rider.status]}>
                        {userStatusLabels[rider.status]}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex items-center gap-1">
                        <Package className="w-3 h-3 text-muted-foreground" />
                        {rider.totalDeliveries.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-muted-foreground" />
                        ৳{rider.totalEarnings.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            বিস্তারিত দেখুন
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RidersManagement;
