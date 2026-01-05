import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Camera, 
  Mail, 
  Phone, 
  Calendar, 
  Star, 
  ShoppingBag,
  Edit2,
  Save,
  X
} from 'lucide-react';
import { userProfile } from '@/data/orderData';
import { toast } from 'sonner';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone,
  });

  const handleSave = () => {
    // In a real app, this would save to backend
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone,
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative group">
              <Avatar className="w-24 h-24 border-4 border-primary/20">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {userProfile.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <Button 
                size="icon"
                className="absolute bottom-0 right-0 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold">{userProfile.name}</h2>
              <p className="text-muted-foreground">{userProfile.email}</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3">
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Member since {userProfile.joinedDate}</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div>
              {!isEditing ? (
                <Button 
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    size="icon"
                    onClick={handleCancel}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <ShoppingBag className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{userProfile.totalOrders}</p>
            <p className="text-sm text-muted-foreground">Total Orders</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="h-8 w-8 mx-auto mb-2 text-secondary" />
            <p className="text-2xl font-bold">{userProfile.loyaltyPoints}</p>
            <p className="text-sm text-muted-foreground">Loyalty Points</p>
          </CardContent>
        </Card>
      </div>

      {/* Profile Form */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={!isEditing}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={!isEditing}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={!isEditing}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Password Section */}
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Password</p>
              <p className="text-sm text-muted-foreground">
                Last changed 30 days ago
              </p>
            </div>
            <Button variant="outline">Change Password</Button>
          </div>

          <Separator className="my-4" />

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security
              </p>
            </div>
            <Button variant="outline">Enable</Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Delete Account</p>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
