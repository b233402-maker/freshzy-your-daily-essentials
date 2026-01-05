import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Plus, MapPin } from 'lucide-react';
import AddressCard from '@/components/dashboard/AddressCard';
import { savedAddresses as initialAddresses, SavedAddress } from '@/data/orderData';
import { toast } from 'sonner';

const SavedAddresses = () => {
  const [addresses, setAddresses] = useState<SavedAddress[]>(initialAddresses);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<SavedAddress | null>(null);
  const [formData, setFormData] = useState({
    label: '',
    address: '',
    area: '',
    city: 'ঢাকা',
    phone: '',
    type: 'home' as 'home' | 'office' | 'other',
  });

  const resetForm = () => {
    setFormData({
      label: '',
      address: '',
      area: '',
      city: 'ঢাকা',
      phone: '',
      type: 'home',
    });
    setEditingAddress(null);
  };

  const openAddDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const openEditDialog = (address: SavedAddress) => {
    setFormData({
      label: address.label,
      address: address.address,
      area: address.area,
      city: address.city,
      phone: address.phone,
      type: address.type,
    });
    setEditingAddress(address);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (!formData.label || !formData.address || !formData.area || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (editingAddress) {
      // Update existing address
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id 
          ? { ...addr, ...formData }
          : addr
      ));
      toast.success('Address updated successfully!');
    } else {
      // Add new address
      const newAddress: SavedAddress = {
        id: `addr${Date.now()}`,
        ...formData,
        isDefault: addresses.length === 0,
      };
      setAddresses([...addresses, newAddress]);
      toast.success('Address added successfully!');
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    toast.success('Address deleted successfully!');
  };

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id,
    })));
    toast.success('Default address updated!');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Saved Addresses</h2>
          <p className="text-sm text-muted-foreground">
            Manage your delivery addresses
          </p>
        </div>
        <Button onClick={openAddDialog}>
          <Plus className="h-4 w-4 mr-2" />
          Add Address
        </Button>
      </div>

      {/* Addresses List */}
      {addresses.length > 0 ? (
        <div className="space-y-4">
          {addresses.map(address => (
            <AddressCard 
              key={address.id}
              address={address}
              onEdit={openEditDialog}
              onDelete={handleDelete}
              onSetDefault={handleSetDefault}
            />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold mb-2">No Saved Addresses</h3>
            <p className="text-muted-foreground mb-6">
              Add your first address for faster checkout
            </p>
            <Button onClick={openAddDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Add Address
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {editingAddress ? 'Edit Address' : 'Add New Address'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="label">Label *</Label>
                <Input 
                  id="label"
                  placeholder="e.g., Home, Office"
                  value={formData.label}
                  onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select 
                  value={formData.type} 
                  onValueChange={(value: 'home' | 'office' | 'other') => 
                    setFormData({ ...formData, type: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Street Address *</Label>
              <Input 
                id="address"
                placeholder="House no, Road, Block"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="area">Area *</Label>
                <Input 
                  id="area"
                  placeholder="e.g., Gulshan, Dhanmondi"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input 
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone"
                placeholder="+880 1XXX-XXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {editingAddress ? 'Update' : 'Save'} Address
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SavedAddresses;
