import { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  Calendar,
  Download,
  CreditCard,
  Banknote
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatsCard from '@/components/dashboard/StatsCard';
import { riderStats, weeklyEarnings } from '@/data/riderData';
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
import { toast } from 'sonner';

const monthlyEarnings = [
  { week: 'সপ্তাহ ১', earnings: 4200, tips: 850, bonus: 400 },
  { week: 'সপ্তাহ ২', earnings: 5100, tips: 920, bonus: 600 },
  { week: 'সপ্তাহ ৩', earnings: 4800, tips: 780, bonus: 350 },
  { week: 'সপ্তাহ ৪', earnings: 5580, tips: 1120, bonus: 700 },
];

const earningsBreakdown = [
  { name: 'ডেলিভারি ফি', value: 18500, color: 'hsl(var(--primary))' },
  { name: 'টিপ', value: 3670, color: 'hsl(var(--chart-2))' },
  { name: 'বোনাস', value: 2050, color: 'hsl(var(--chart-3))' },
];

const transactions = [
  { id: 1, type: 'earning', amount: 80, description: 'ডেলিভারি #FRZ-2024-001', date: 'আজ, ১০:৩০' },
  { id: 2, type: 'tip', amount: 20, description: 'টিপ - আহমেদ হাসান', date: 'আজ, ১০:৩০' },
  { id: 3, type: 'earning', amount: 50, description: 'ডেলিভারি #FRZ-2024-002', date: 'আজ, ০৯:১৫' },
  { id: 4, type: 'bonus', amount: 200, description: 'দৈনিক লক্ষ্য বোনাস', date: 'গতকাল' },
  { id: 5, type: 'withdrawal', amount: -5000, description: 'bKash উত্তোলন', date: 'গতকাল' },
  { id: 6, type: 'earning', amount: 70, description: 'ডেলিভারি #FRZ-2024-003', date: 'গতকাল' },
];

const RiderEarnings = () => {
  const [period, setPeriod] = useState('week');

  const handleWithdraw = () => {
    toast.success('উত্তোলনের অনুরোধ পাঠানো হয়েছে!');
  };

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">আয়ের বিবরণ</h2>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">আজ</SelectItem>
            <SelectItem value="week">এই সপ্তাহ</SelectItem>
            <SelectItem value="month">এই মাস</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          icon={Wallet}
          title="মোট আয়"
          value={`৳${period === 'today' ? riderStats.todayEarnings : period === 'week' ? riderStats.weeklyEarnings : riderStats.monthlyEarnings}`}
          trend={{ value: "+12%", positive: true }}
          color="green"
        />
        <StatsCard
          icon={TrendingUp}
          title="ডেলিভারি"
          value={`${period === 'today' ? riderStats.todayDeliveries : period === 'week' ? riderStats.weeklyDeliveries : riderStats.monthlyDeliveries}`}
          color="blue"
        />
        <StatsCard
          icon={Banknote}
          title="গড় আয়/ডেলিভারি"
          value="৳60"
          color="purple"
        />
        <StatsCard
          icon={CreditCard}
          title="প্রত্যাহারযোগ্য"
          value={`৳${riderStats.pendingPayout}`}
          color="primary"
        />
      </div>

      {/* Withdraw Card */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-green-100">প্রত্যাহারযোগ্য ব্যালেন্স</p>
              <p className="text-3xl font-bold">৳{riderStats.pendingPayout}</p>
              <p className="text-sm text-green-100 mt-1">
                সর্বনিম্ন উত্তোলন: ৳500
              </p>
            </div>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleWithdraw}
            >
              <Wallet className="w-4 h-4 mr-2" />
              উত্তোলন করুন
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Earnings Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              আয়ের ট্রেন্ড
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                রিপোর্ট
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={period === 'month' ? monthlyEarnings : weeklyEarnings}>
                  <defs>
                    <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey={period === 'month' ? 'week' : 'date'} fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    formatter={(value: number) => [`৳${value}`, 'আয়']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="earnings" 
                    stroke="hsl(var(--primary))" 
                    fillOpacity={1} 
                    fill="url(#colorEarnings)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Earnings Breakdown */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">আয়ের বিশ্লেষণ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={earningsBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {earningsBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `৳${value}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              {earningsBreakdown.map((item) => (
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

      {/* Transactions */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              সাম্প্রতিক লেনদেন
            </div>
            <Button variant="outline" size="sm">সব দেখুন</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div 
                key={tx.id}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'withdrawal' 
                      ? 'bg-red-100 dark:bg-red-950' 
                      : tx.type === 'tip'
                        ? 'bg-yellow-100 dark:bg-yellow-950'
                        : tx.type === 'bonus'
                          ? 'bg-purple-100 dark:bg-purple-950'
                          : 'bg-green-100 dark:bg-green-950'
                  }`}>
                    {tx.type === 'withdrawal' ? (
                      <CreditCard className="w-5 h-5 text-red-600" />
                    ) : (
                      <Wallet className={`w-5 h-5 ${
                        tx.type === 'tip' 
                          ? 'text-yellow-600' 
                          : tx.type === 'bonus'
                            ? 'text-purple-600'
                            : 'text-green-600'
                      }`} />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{tx.description}</p>
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <span className={`font-bold ${
                  tx.amount < 0 ? 'text-red-600' : 'text-green-600'
                }`}>
                  {tx.amount < 0 ? '' : '+'}৳{Math.abs(tx.amount)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiderEarnings;
