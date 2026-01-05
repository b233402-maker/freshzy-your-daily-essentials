import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft,
  MapPin,
  CreditCard,
  Banknote,
  Clock,
  Check,
  Plus,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

// Dummy saved addresses
const savedAddresses = [
  {
    id: 'addr1',
    label: 'বাসা',
    address: 'হাউস ১২, রোড ৫, গুলশান-১, ঢাকা-১২১২',
    phone: '+880 1712-345678',
    isDefault: true,
  },
  {
    id: 'addr2',
    label: 'অফিস',
    address: 'ফ্লোর ৮, টাওয়ার-বি, জামুনা ফিউচার পার্ক, বসুন্ধরা',
    phone: '+880 1712-345678',
    isDefault: false,
  },
];

const paymentMethods = [
  {
    id: 'cod',
    name: 'ক্যাশ অন ডেলিভারি',
    description: 'সার্ভিস নেওয়ার পর পেমেন্ট করুন',
    icon: Banknote,
  },
  {
    id: 'bkash',
    name: 'বিকাশ',
    description: 'বিকাশ মোবাইল ব্যাংকিং',
    icon: CreditCard,
  },
  {
    id: 'nagad',
    name: 'নগদ',
    description: 'নগদ মোবাইল ব্যাংকিং',
    icon: CreditCard,
  },
  {
    id: 'card',
    name: 'কার্ড পেমেন্ট',
    description: 'ভিসা, মাস্টারকার্ড, আমেক্স',
    icon: CreditCard,
  },
];

const timeSlots = [
  { id: 'now', label: 'এখনই', sublabel: '৩০-৪৫ মিনিট' },
  { id: 'today-12', label: 'আজ', sublabel: 'দুপুর ১২:০০ - ২:০০' },
  { id: 'today-16', label: 'আজ', sublabel: 'বিকাল ৪:০০ - ৬:০০' },
  { id: 'tomorrow-10', label: 'আগামীকাল', sublabel: 'সকাল ১০:০০ - ১২:০০' },
];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    items, 
    vendor, 
    subtotal,
    deliveryFee,
    serviceFee,
    total,
    itemCount,
    clearCart 
  } = useCart();

  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0]?.id || '');
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const [selectedTime, setSelectedTime] = useState('now');
  const [notes, setNotes] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast({
        title: 'ঠিকানা সিলেক্ট করুন',
        description: 'অর্ডার দিতে একটি ডেলিভারি ঠিকানা সিলেক্ট করতে হবে।',
        variant: 'destructive',
      });
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate order ID
    const orderId = `ORD${Date.now().toString().slice(-8)}`;

    // Clear cart and redirect to confirmation
    clearCart();
    
    navigate(`/order-confirmation/${orderId}`, {
      state: {
        orderId,
        vendor: vendor,
        items: items,
        total: total,
        address: savedAddresses.find(a => a.id === selectedAddress),
        paymentMethod: selectedPayment,
        timeSlot: timeSlots.find(t => t.id === selectedTime),
      }
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 pb-32 lg:pb-8">
      {/* Header */}
      <div className="bg-background border-b sticky top-0 z-40">
        <div className="container-custom py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">চেকআউট</h1>
              <p className="text-sm text-muted-foreground">{vendor?.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    ডেলিভারি ঠিকানা
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/dashboard/addresses">
                      <Plus className="w-4 h-4 mr-1" />
                      নতুন যোগ করুন
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                  <div className="space-y-3">
                    {savedAddresses.map((addr) => (
                      <div
                        key={addr.id}
                        className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedAddress === addr.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedAddress(addr.id)}
                      >
                        <RadioGroupItem value={addr.id} id={addr.id} className="mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Label htmlFor={addr.id} className="font-semibold cursor-pointer">
                              {addr.label}
                            </Label>
                            {addr.isDefault && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                ডিফল্ট
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{addr.address}</p>
                          <p className="text-sm text-muted-foreground">{addr.phone}</p>
                        </div>
                        {selectedAddress === addr.id && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Time Slot */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  সার্ভিস টাইম
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedTime(slot.id)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        selectedTime === slot.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <p className="font-medium">{slot.label}</p>
                      <p className="text-sm text-muted-foreground">{slot.sublabel}</p>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  পেমেন্ট মেথড
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedPayment === method.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedPayment(method.id)}
                      >
                        <RadioGroupItem value={method.id} id={method.id} />
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <method.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <Label htmlFor={method.id} className="font-semibold cursor-pointer">
                            {method.name}
                          </Label>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                        {selectedPayment === method.id && (
                          <Check className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Special Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>বিশেষ নির্দেশনা (ঐচ্ছিক)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="যেমন: গেটে কল করবেন, বিল্ডিং-এর পেছনে..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px]"
                />
              </CardContent>
            </Card>
          </div>

          {/* Order Summary - Desktop */}
          <div className="hidden lg:block">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>অর্ডার সামারি</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3 max-h-[200px] overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span>৳{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>সাবটোটাল ({itemCount} আইটেম)</span>
                    <span>৳{subtotal}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <div className="flex justify-between text-sm">
                      <span>ডেলিভারি ফি</span>
                      <span>৳{deliveryFee}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span>সার্ভিস ফি</span>
                    <span>৳{serviceFee}</span>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>মোট</span>
                  <span className="text-primary">৳{total}</span>
                </div>

                {/* COD Info */}
                {selectedPayment === 'cod' && (
                  <div className="flex items-start gap-2 p-3 bg-warning/10 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      ক্যাশ অন ডেলিভারি সিলেক্ট করা হয়েছে। সার্ভিস শেষে পেমেন্ট করুন।
                    </p>
                  </div>
                )}

                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      প্রসেসিং...
                    </>
                  ) : (
                    <>অর্ডার প্লেস করুন</>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-muted-foreground">মোট পেমেন্ট</p>
            <p className="text-xl font-bold text-primary">৳{total}</p>
          </div>
          <Button 
            size="lg" 
            onClick={handlePlaceOrder}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                প্রসেসিং...
              </>
            ) : (
              <>অর্ডার প্লেস করুন</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
