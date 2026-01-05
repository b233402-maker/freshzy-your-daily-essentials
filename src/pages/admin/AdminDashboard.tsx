import { 
  Users, 
  Store, 
  Bike, 
  ShoppingBag,
  TrendingUp,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import StatsCard from '@/components/dashboard/StatsCard';
import { 
  adminStats, 
  weeklyRevenueData, 
  platformVendors,
  platformRiders,
  userStatusColors,
  userStatusLabels
} from '@/data/adminData';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const orderDistribution = [
  { name: 'সেলুন', value: 58, color: 'hsl(var(--primary))' },
  { name: 'লন্ড্রি', value: 42, color: 'hsl(var(--chart-2))' },
];

const AdminDashboard = () => {
  const pendingVendors = platformVendors.filter(v => v.status === 'pending');
  const pendingRiders = platformRiders.filter(r => r.status === 'pending');

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-primary via-purple-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">
                স্বাগতম, অ্যাডমিন! 👋
              </h2>
              <p className="text-white/80">
                আজকের প্ল্যাটফর্ম পারফরম্যান্স এবং পেন্ডিং অ্যাকশন দেখুন
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/admin/analytics">
                <Button variant="secondary">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  অ্যানালিটিক্স দেখুন
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          icon={Users}
          title="মোট ব্যবহারকারী"
          value={adminStats.totalUsers.toLocaleString()}
          trend={{ value: "+12%", positive: true }}
          color="blue"
        />
        <StatsCard
          icon={Store}
          title="মোট ভেন্ডর"
          value={adminStats.totalVendors}
          trend={{ value: "+5%", positive: true }}
          color="purple"
        />
        <StatsCard
          icon={Bike}
          title="মোট রাইডার"
          value={adminStats.totalRiders}
          trend={{ value: "+8%", positive: true }}
          color="green"
        />
        <StatsCard
          icon={ShoppingBag}
          title="মোট অর্ডার"
          value={adminStats.totalOrders.toLocaleString()}
          trend={{ value: "+15%", positive: true }}
          color="primary"
        />
      </div>

      {/* Revenue & Today Stats */}
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">আজকের রেভিনিউ</p>
                <p className="text-2xl font-bold text-green-600">৳{adminStats.todayRevenue.toLocaleString()}</p>
              </div>
            </div>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">লক্ষ্যের ৬৫% অর্জিত</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">আজকের অর্ডার</p>
                <p className="text-2xl font-bold text-blue-600">{adminStats.todayOrders}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-green-600">+18%</span>
              <span className="text-muted-foreground">গতকালের চেয়ে</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">প্ল্যাটফর্ম কমিশন</p>
                <p className="text-2xl font-bold text-purple-600">৳{adminStats.platformCommission.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">এই মাসের মোট কমিশন</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Revenue Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              সাপ্তাহিক রেভিনিউ
              <Badge variant="outline">এই সপ্তাহ</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyRevenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" fontSize={12} />
                  <YAxis fontSize={12} tickFormatter={(value) => `৳${value/1000}k`} />
                  <Tooltip 
                    formatter={(value: number) => [`৳${value.toLocaleString()}`, 'রেভিনিউ']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Order Distribution */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">অর্ডার বিভাজন</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={orderDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {orderDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              {orderDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pending Vendors */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                পেন্ডিং ভেন্ডর অনুমোদন
              </div>
              <Link to="/admin/vendors">
                <Button variant="ghost" size="sm" className="gap-1">
                  সব দেখুন
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {pendingVendors.length > 0 ? (
              <div className="space-y-3">
                {pendingVendors.slice(0, 3).map((vendor) => (
                  <div key={vendor.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <img 
                      src={vendor.image} 
                      alt={vendor.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{vendor.name}</h4>
                      <p className="text-sm text-muted-foreground">{vendor.ownerName}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-red-600">
                        বাতিল
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        অনুমোদন
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <p>কোনো পেন্ডিং ভেন্ডর নেই</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pending Riders */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                পেন্ডিং রাইডার অনুমোদন
              </div>
              <Link to="/admin/riders">
                <Button variant="ghost" size="sm" className="gap-1">
                  সব দেখুন
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {pendingRiders.length > 0 ? (
              <div className="space-y-3">
                {pendingRiders.slice(0, 3).map((rider) => (
                  <div key={rider.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                      <Bike className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{rider.name}</h4>
                      <p className="text-sm text-muted-foreground">{rider.vehicleNumber}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-red-600">
                        বাতিল
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        অনুমোদন
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                <p>কোনো পেন্ডিং রাইডার নেই</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
