import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  User,
  Mail,
  Phone,
  Calendar,
  ShoppingBag,
  Ban,
  CheckCircle,
  Trash2,
  Eye
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
  platformUsers, 
  userStatusLabels, 
  userStatusColors,
  roleLabels,
  adminStats
} from '@/data/adminData';
import { toast } from 'sonner';

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  const filteredUsers = platformUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const handleAction = (action: string, userId: string) => {
    toast.success(`${action} action performed on user ${userId}`);
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{adminStats.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">মোট ব্যবহারকারী</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{adminStats.activeUsers.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">সক্রিয় ব্যবহারকারী</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{adminStats.totalVendors}</p>
            <p className="text-sm text-muted-foreground">মোট ভেন্ডর</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-orange-600">{adminStats.totalRiders}</p>
            <p className="text-sm text-muted-foreground">মোট রাইডার</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="নাম, ইমেইল বা ফোন দিয়ে খুঁজুন..."
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
                <SelectItem value="suspended">স্থগিত</SelectItem>
                <SelectItem value="pending">অপেক্ষমান</SelectItem>
              </SelectContent>
            </Select>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="রোল" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">সব রোল</SelectItem>
                <SelectItem value="customer">গ্রাহক</SelectItem>
                <SelectItem value="vendor">ভেন্ডর</SelectItem>
                <SelectItem value="rider">রাইডার</SelectItem>
                <SelectItem value="admin">অ্যাডমিন</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="w-5 h-5 text-muted-foreground" />
            ব্যবহারকারী তালিকা
            <Badge variant="secondary" className="ml-2">{filteredUsers.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ব্যবহারকারী</TableHead>
                  <TableHead className="hidden md:table-cell">যোগাযোগ</TableHead>
                  <TableHead>রোল</TableHead>
                  <TableHead>স্ট্যাটাস</TableHead>
                  <TableHead className="hidden lg:table-cell">অর্ডার</TableHead>
                  <TableHead className="hidden lg:table-cell">খরচ</TableHead>
                  <TableHead className="text-right">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            যোগদান: {new Date(user.createdAt).toLocaleDateString('bn-BD')}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Mail className="w-3 h-3" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          {user.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{roleLabels[user.role]}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={userStatusColors[user.status]}>
                        {userStatusLabels[user.status]}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex items-center gap-1">
                        <ShoppingBag className="w-3 h-3 text-muted-foreground" />
                        {user.totalOrders || 0}
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      ৳{(user.totalSpent || 0).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleAction('view', user.id)}>
                            <Eye className="w-4 h-4 mr-2" />
                            বিস্তারিত দেখুন
                          </DropdownMenuItem>
                          {user.status === 'suspended' ? (
                            <DropdownMenuItem onClick={() => handleAction('activate', user.id)}>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              সক্রিয় করুন
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem onClick={() => handleAction('suspend', user.id)}>
                              <Ban className="w-4 h-4 mr-2" />
                              স্থগিত করুন
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            onClick={() => handleAction('delete', user.id)}
                            className="text-destructive"
                          >
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

export default UsersManagement;
