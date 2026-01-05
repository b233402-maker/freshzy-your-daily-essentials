import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  ShoppingBag,
  Users,
  Store,
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { adminStats, monthlyRevenueData, weeklyRevenueData, platformVendors } from '@/data/adminData';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { useState } from 'react';

const topVendors = platformVendors
  .filter(v => v.status === 'active')
  .sort((a, b) => b.totalRevenue - a.totalRevenue)
  .slice(0, 5);

const categoryData = [
  { name: 'সেলুন', value: 58, orders: 26489, revenue: 2450000 },
  { name: 'লন্ড্রি', value: 42, orders: 19181, revenue: 1006000 },
];

const userGrowth = [
  { month: 'জুলাই', users: 8500 },
  { month: 'আগস্ট', users: 9200 },
  { month: 'সেপ্টে.', users: 10100 },
  { month: 'অক্টো.', users: 11800 },
  { month: 'নভে.', users: 13500 },
  { month: 'ডিসে.', users: 15420 },
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];

const AdminAnalytics = () => {
  const [period, setPeriod] = useState('month');

  const revenueData = period === 'week' ? weeklyRevenueData : monthlyRevenueData;

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">প্ল্যাটফর্ম অ্যানালিটিক্স</h2>
        <div className="flex gap-2">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">এই সপ্তাহ</SelectItem>
              <SelectItem value="month">এই মাস</SelectItem>
              <SelectItem value="year">এই বছর</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            রিপোর্ট ডাউনলোড
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-green-600" />
              <Badge className="bg-green-100 text-green-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-green-600">৳{(adminStats.monthlyRevenue / 1000000).toFixed(2)}M</p>
            <p className="text-sm text-muted-foreground">মাসিক রেভিনিউ</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <Badge className="bg-blue-100 text-blue-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-blue-600">{adminStats.totalOrders.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">মোট অর্ডার</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-purple-600">{adminStats.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">মোট ব্যবহারকারী</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Store className="w-8 h-8 text-orange-600" />
              <Badge className="bg-orange-100 text-orange-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-orange-600">{adminStats.totalVendors}</p>
            <p className="text-sm text-muted-foreground">মোট ভেন্ডর</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">রেভিনিউ ট্রেন্ড</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" fontSize={12} />
                  <YAxis fontSize={12} tickFormatter={(v) => `৳${v/1000}k`} />
                  <Tooltip formatter={(v: number) => [`৳${v.toLocaleString()}`, 'রেভিনিউ']} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Orders & Commission */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">অর্ডার ও কমিশন</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <XAxis dataKey="date" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="orders" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="অর্ডার" />
                  <Bar dataKey="commission" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="কমিশন" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* User Growth */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">ব্যবহারকারী বৃদ্ধি</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userGrowth}>
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip formatter={(v: number) => [v.toLocaleString(), 'ব্যবহারকারী']} />
                  <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">ক্যাটাগরি বিভাজন</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((_, i) => (
                      <Cell key={`cell-${i}`} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {categoryData.map((cat, i) => (
                <div key={cat.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-muted-foreground">৳{(cat.revenue / 1000000).toFixed(2)}M</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Vendors */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">শীর্ষ ভেন্ডর</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topVendors.map((vendor, index) => (
                <div key={vendor.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {index + 1}
                  </div>
                  <img src={vendor.image} alt={vendor.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{vendor.name}</p>
                    <p className="text-xs text-muted-foreground">{vendor.totalOrders} অর্ডার</p>
                  </div>
                  <p className="text-sm font-semibold text-green-600">
                    ৳{(vendor.totalRevenue / 1000).toFixed(0)}k
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalytics;
