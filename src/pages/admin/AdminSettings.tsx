import { useState } from 'react';
import { 
  Settings, 
  DollarSign, 
  Truck, 
  Bell,
  Save,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { systemSettings } from '@/data/adminData';
import { toast } from 'sonner';

const AdminSettings = () => {
  const [settings, setSettings] = useState(
    systemSettings.reduce((acc, s) => ({ ...acc, [s.key]: s.value }), {} as Record<string, string | number | boolean>)
  );

  const handleSave = () => {
    toast.success('সেটিংস সেভ হয়েছে!');
  };

  const handleReset = () => {
    setSettings(systemSettings.reduce((acc, s) => ({ ...acc, [s.key]: s.value }), {}));
    toast.info('সেটিংস রিসেট হয়েছে');
  };

  const updateSetting = (key: string, value: string | number | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const generalSettings = systemSettings.filter(s => s.category === 'general');
  const paymentSettings = systemSettings.filter(s => s.category === 'payment');
  const deliverySettings = systemSettings.filter(s => s.category === 'delivery');
  const notificationSettings = systemSettings.filter(s => s.category === 'notification');

  const renderSetting = (setting: typeof systemSettings[0]) => {
    const value = settings[setting.key];

    if (setting.type === 'boolean') {
      return (
        <div key={setting.id} className="flex items-center justify-between py-4">
          <div>
            <Label className="text-base">{setting.label}</Label>
            <p className="text-sm text-muted-foreground">{setting.description}</p>
          </div>
          <Switch
            checked={value as boolean}
            onCheckedChange={(checked) => updateSetting(setting.key, checked)}
          />
        </div>
      );
    }

    if (setting.type === 'number') {
      return (
        <div key={setting.id} className="py-4">
          <Label htmlFor={setting.key}>{setting.label}</Label>
          <p className="text-sm text-muted-foreground mb-2">{setting.description}</p>
          <Input
            id={setting.key}
            type="number"
            value={value as number}
            onChange={(e) => updateSetting(setting.key, Number(e.target.value))}
            className="max-w-xs"
          />
        </div>
      );
    }

    return (
      <div key={setting.id} className="py-4">
        <Label htmlFor={setting.key}>{setting.label}</Label>
        <p className="text-sm text-muted-foreground mb-2">{setting.description}</p>
        <Input
          id={setting.key}
          value={value as string}
          onChange={(e) => updateSetting(setting.key, e.target.value)}
          className="max-w-md"
        />
      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">সিস্টেম সেটিংস</h2>
          <p className="text-sm text-muted-foreground">প্ল্যাটফর্মের বিভিন্ন সেটিংস কনফিগার করুন</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReset}>
            <RefreshCw className="w-4 h-4 mr-2" />
            রিসেট
          </Button>
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            সেভ করুন
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general" className="gap-2">
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">সাধারণ</span>
          </TabsTrigger>
          <TabsTrigger value="payment" className="gap-2">
            <DollarSign className="w-4 h-4" />
            <span className="hidden sm:inline">পেমেন্ট</span>
          </TabsTrigger>
          <TabsTrigger value="delivery" className="gap-2">
            <Truck className="w-4 h-4" />
            <span className="hidden sm:inline">ডেলিভারি</span>
          </TabsTrigger>
          <TabsTrigger value="notification" className="gap-2">
            <Bell className="w-4 h-4" />
            <span className="hidden sm:inline">নোটিফিকেশন</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                সাধারণ সেটিংস
              </CardTitle>
              <CardDescription>
                প্ল্যাটফর্মের মৌলিক সেটিংস
              </CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              {generalSettings.map(renderSetting)}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                পেমেন্ট সেটিংস
              </CardTitle>
              <CardDescription>
                কমিশন, সর্বনিম্ন অর্ডার এবং অন্যান্য আর্থিক সেটিংস
              </CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              {paymentSettings.map(renderSetting)}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                ডেলিভারি সেটিংস
              </CardTitle>
              <CardDescription>
                ডেলিভারি ফি এবং সংশ্লিষ্ট সেটিংস
              </CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              {deliverySettings.map(renderSetting)}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notification" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                নোটিফিকেশন সেটিংস
              </CardTitle>
              <CardDescription>
                ইমেইল এবং SMS নোটিফিকেশন সেটিংস
              </CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              {notificationSettings.map(renderSetting)}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Danger Zone */}
      <Card className="border-red-200 dark:border-red-800">
        <CardHeader>
          <CardTitle className="text-red-600">বিপদ জোন</CardTitle>
          <CardDescription>
            এই অ্যাকশনগুলো অপরিবর্তনীয়। সাবধানতার সাথে ব্যবহার করুন।
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-950 rounded-lg">
            <div>
              <p className="font-medium">ক্যাশ ক্লিয়ার করুন</p>
              <p className="text-sm text-muted-foreground">সমস্ত ক্যাশ ডেটা মুছে ফেলুন</p>
            </div>
            <Button variant="outline" className="text-red-600 border-red-300">
              ক্যাশ ক্লিয়ার
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-950 rounded-lg">
            <div>
              <p className="font-medium">ডেটাবেস ব্যাকআপ</p>
              <p className="text-sm text-muted-foreground">সম্পূর্ণ ডেটাবেসের ব্যাকআপ নিন</p>
            </div>
            <Button variant="outline" className="text-red-600 border-red-300">
              ব্যাকআপ নিন
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
