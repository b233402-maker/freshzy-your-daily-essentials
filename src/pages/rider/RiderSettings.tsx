import { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Bike, 
  Bell, 
  Shield, 
  LogOut,
  Save,
  Camera
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { riderProfile } from '@/data/riderData';
import { toast } from 'sonner';

const RiderSettings = () => {
  const [profile, setProfile] = useState({
    name: riderProfile.name,
    phone: riderProfile.phone,
    email: riderProfile.email,
    vehicleType: riderProfile.vehicleType,
    vehicleNumber: riderProfile.vehicleNumber,
  });

  const [notifications, setNotifications] = useState({
    newOrders: true,
    orderUpdates: true,
    earnings: true,
    promotions: false,
    sound: true,
    vibration: true,
  });

  const handleSaveProfile = () => {
    toast.success('প্রোফাইল আপডেট হয়েছে!');
  };

  const handleSaveNotifications = () => {
    toast.success('নোটিফিকেশন সেটিংস সেভ হয়েছে!');
  };

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            প্রোফাইল তথ্য
          </CardTitle>
          <CardDescription>
            আপনার ব্যক্তিগত তথ্য আপডেট করুন
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="w-20 h-20">
                <AvatarImage src={riderProfile.avatar} alt={riderProfile.name} />
                <AvatarFallback className="text-2xl">{riderProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button 
                size="icon" 
                variant="secondary"
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div>
              <h3 className="font-semibold">{riderProfile.name}</h3>
              <p className="text-sm text-muted-foreground">রাইডার আইডি: {riderProfile.id}</p>
              <p className="text-sm text-muted-foreground">
                যোগদান: {new Date(riderProfile.joinDate).toLocaleDateString('bn-BD')}
              </p>
            </div>
          </div>

          <Separator />

          {/* Form Fields */}
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">পূর্ণ নাম</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">ফোন নম্বর</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">ইমেইল</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button onClick={handleSaveProfile} className="w-full sm:w-auto">
            <Save className="w-4 h-4 mr-2" />
            সেভ করুন
          </Button>
        </CardContent>
      </Card>

      {/* Vehicle Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bike className="w-5 h-5" />
            যানবাহন তথ্য
          </CardTitle>
          <CardDescription>
            আপনার যানবাহনের তথ্য আপডেট করুন
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vehicleType">যানবাহনের ধরন</Label>
              <Select 
                value={profile.vehicleType} 
                onValueChange={(value: 'motorcycle' | 'bicycle' | 'car') => 
                  setProfile({ ...profile, vehicleType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="motorcycle">মোটরসাইকেল</SelectItem>
                  <SelectItem value="bicycle">সাইকেল</SelectItem>
                  <SelectItem value="car">গাড়ি</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleNumber">নম্বর প্লেট</Label>
              <Input
                id="vehicleNumber"
                value={profile.vehicleNumber}
                onChange={(e) => setProfile({ ...profile, vehicleNumber: e.target.value })}
              />
            </div>
          </div>

          <Button onClick={handleSaveProfile} className="w-full sm:w-auto">
            <Save className="w-4 h-4 mr-2" />
            সেভ করুন
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            নোটিফিকেশন সেটিংস
          </CardTitle>
          <CardDescription>
            কোন নোটিফিকেশন পেতে চান তা নির্বাচন করুন
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">নতুন অর্ডার</p>
              <p className="text-sm text-muted-foreground">নতুন ডেলিভারি অর্ডার এলে জানাবে</p>
            </div>
            <Switch
              checked={notifications.newOrders}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, newOrders: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">অর্ডার আপডেট</p>
              <p className="text-sm text-muted-foreground">অর্ডার স্ট্যাটাস পরিবর্তন হলে জানাবে</p>
            </div>
            <Switch
              checked={notifications.orderUpdates}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, orderUpdates: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">আয় নোটিফিকেশন</p>
              <p className="text-sm text-muted-foreground">পেমেন্ট ও বোনাস আপডেট</p>
            </div>
            <Switch
              checked={notifications.earnings}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, earnings: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">প্রমোশন</p>
              <p className="text-sm text-muted-foreground">বিশেষ অফার ও প্রমোশন</p>
            </div>
            <Switch
              checked={notifications.promotions}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, promotions: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">সাউন্ড</p>
              <p className="text-sm text-muted-foreground">নোটিফিকেশন সাউন্ড</p>
            </div>
            <Switch
              checked={notifications.sound}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, sound: checked })
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">ভাইব্রেশন</p>
              <p className="text-sm text-muted-foreground">নোটিফিকেশন ভাইব্রেশন</p>
            </div>
            <Switch
              checked={notifications.vibration}
              onCheckedChange={(checked) => 
                setNotifications({ ...notifications, vibration: checked })
              }
            />
          </div>

          <Button onClick={handleSaveNotifications} className="w-full sm:w-auto">
            <Save className="w-4 h-4 mr-2" />
            সেভ করুন
          </Button>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            নিরাপত্তা
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            পাসওয়ার্ড পরিবর্তন করুন
          </Button>
          <Button variant="outline" className="w-full justify-start">
            দুই-ধাপ যাচাইকরণ সক্রিয় করুন
          </Button>
        </CardContent>
      </Card>

      {/* Logout */}
      <Card className="border-red-200 dark:border-red-800">
        <CardContent className="p-4">
          <Button variant="destructive" className="w-full">
            <LogOut className="w-4 h-4 mr-2" />
            লগআউট করুন
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiderSettings;
