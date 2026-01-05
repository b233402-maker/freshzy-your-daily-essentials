import { 
  Wallet, 
  Package, 
  TrendingUp, 
  Star,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import StatsCard from '@/components/dashboard/StatsCard';
import DeliveryCard from '@/components/rider/DeliveryCard';
import { 
  riderStats, 
  riderProfile, 
  getActiveDeliveries, 
  weeklyEarnings 
} from '@/data/riderData';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const RiderDashboard = () => {
  const activeDeliveries = getActiveDeliveries();

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">
                স্বাগতম, {riderProfile.name.split(' ')[0]}! 👋
              </h2>
              <p className="text-primary-foreground/80">
                আপনার আজকের পারফরম্যান্স দেখুন এবং ডেলিভারি শুরু করুন
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/rider/deliveries">
                <Button variant="secondary" className="gap-2">
                  <Package className="w-4 h-4" />
                  ডেলিভারি দেখুন
                  {activeDeliveries.length > 0 && (
                    <Badge className="bg-orange-500 text-white ml-1">
                      {activeDeliveries.length}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          icon={Wallet}
          title="আজকের আয়"
          value={`৳${riderStats.todayEarnings}`}
          trend={{ value: "+15%", positive: true }}
          color="green"
        />
        <StatsCard
          icon={Package}
          title="আজকের ডেলিভারি"
          value={riderStats.todayDeliveries}
          trend={{ value: "+8%", positive: true }}
          color="blue"
        />
        <StatsCard
          icon={Star}
          title="রেটিং"
          value={riderStats.rating}
          color="primary"
        />
        <StatsCard
          icon={TrendingUp}
          title="গ্রহণের হার"
          value={`${riderStats.acceptanceRate}%`}
          color="purple"
        />
      </div>

      {/* Progress to Daily Goal */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">দৈনিক লক্ষ্য অগ্রগতি</span>
            <span className="text-sm text-muted-foreground">
              {riderStats.todayDeliveries}/15 ডেলিভারি
            </span>
          </div>
          <Progress value={(riderStats.todayDeliveries / 15) * 100} className="h-3" />
          <p className="text-xs text-muted-foreground mt-2">
            আরও {15 - riderStats.todayDeliveries} ডেলিভারি করলে ৳200 বোনাস পাবেন!
          </p>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Earnings Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              সাপ্তাহিক আয়
              <Badge variant="outline">এই সপ্তাহ</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyEarnings}>
                  <XAxis dataKey="date" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    formatter={(value: number, name: string) => {
                      const labels: Record<string, string> = {
                        earnings: 'ডেলিভারি ফি',
                        tips: 'টিপ',
                        bonus: 'বোনাস'
                      };
                      return [`৳${value}`, labels[name] || name];
                    }}
                  />
                  <Bar dataKey="earnings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="tips" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="bonus" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-primary" />
                <span className="text-sm">ডেলিভারি ফি</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[hsl(var(--chart-2))]" />
                <span className="text-sm">টিপ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-[hsl(var(--chart-3))]" />
                <span className="text-sm">বোনাস</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Earnings Summary */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">আয়ের সারসংক্ষেপ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">প্রত্যাহারযোগ্য ব্যালেন্স</p>
                <p className="text-2xl font-bold text-green-600">৳{riderStats.pendingPayout}</p>
              </div>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                উত্তোলন করুন
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">এই সপ্তাহ</p>
                <p className="text-lg font-bold">৳{riderStats.weeklyEarnings}</p>
                <p className="text-xs text-muted-foreground">{riderStats.weeklyDeliveries} ডেলিভারি</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">এই মাস</p>
                <p className="text-lg font-bold">৳{riderStats.monthlyEarnings}</p>
                <p className="text-xs text-muted-foreground">{riderStats.monthlyDeliveries} ডেলিভারি</p>
              </div>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground">মোট আয় (সর্বকালের)</p>
              <p className="text-xl font-bold">৳{riderStats.totalEarnings.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Deliveries */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              অ্যাক্টিভ ডেলিভারি
            </div>
            <Link to="/rider/deliveries">
              <Button variant="ghost" size="sm" className="gap-1">
                সব দেখুন
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {activeDeliveries.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {activeDeliveries.slice(0, 2).map((delivery) => (
                <DeliveryCard 
                  key={delivery.id} 
                  delivery={delivery}
                  onAccept={() => console.log('Accept', delivery.id)}
                  onPickup={() => console.log('Pickup', delivery.id)}
                  onDeliver={() => console.log('Deliver', delivery.id)}
                  onNavigate={() => console.log('Navigate', delivery.id)}
                  onCall={(phone) => console.log('Call', phone)}
                  onViewDetails={() => console.log('View', delivery.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
              <p>কোনো অ্যাক্টিভ ডেলিভারি নেই</p>
              <p className="text-sm">নতুন অর্ডারের জন্য অপেক্ষা করুন</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RiderDashboard;
