import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  CreditCard,
  Home,
  FileText,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import confetti from '@/lib/confetti';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  useEffect(() => {
    if (!orderData) {
      navigate('/');
      return;
    }
    // Trigger confetti animation
    confetti();
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  const { orderId, vendor, items, total, address, paymentMethod, timeSlot } = orderData;

  const getPaymentMethodName = (id: string) => {
    const methods: Record<string, string> = {
      cod: 'ক্যাশ অন ডেলিভারি',
      bkash: 'বিকাশ',
      nagad: 'নগদ',
      card: 'কার্ড পেমেন্ট',
    };
    return methods[id] || id;
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container-custom max-w-2xl">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-green-600 mb-2">
            অর্ডার সফল হয়েছে! 🎉
          </h1>
          <p className="text-muted-foreground">
            আপনার অর্ডার সফলভাবে প্লেস করা হয়েছে। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
          </p>
        </div>

        {/* Order Details Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            {/* Order ID */}
            <div className="text-center pb-4 border-b border-dashed">
              <p className="text-sm text-muted-foreground mb-1">অর্ডার আইডি</p>
              <p className="text-2xl font-bold font-mono">{orderId}</p>
            </div>

            {/* Vendor Info */}
            {vendor && (
              <div className="flex items-center gap-4 py-4 border-b">
                <img 
                  src={vendor.image} 
                  alt={vendor.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold">{vendor.name}</h3>
                  <p className="text-sm text-muted-foreground">{vendor.address}</p>
                </div>
              </div>
            )}

            {/* Order Items */}
            <div className="py-4 border-b">
              <h4 className="font-semibold mb-3">অর্ডার আইটেম</h4>
              <div className="space-y-2">
                {items.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium">৳{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-3" />
              <div className="flex justify-between font-semibold">
                <span>মোট</span>
                <span className="text-primary">৳{total}</span>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="py-4 space-y-4">
              {/* Address */}
              {address && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{address.label}</p>
                    <p className="text-sm text-muted-foreground">{address.address}</p>
                  </div>
                </div>
              )}

              {/* Time Slot */}
              {timeSlot && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{timeSlot.label}</p>
                    <p className="text-sm text-muted-foreground">{timeSlot.sublabel}</p>
                  </div>
                </div>
              )}

              {/* Payment Method */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">পেমেন্ট মেথড</p>
                  <p className="text-sm text-muted-foreground">
                    {getPaymentMethodName(paymentMethod)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Info */}
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">সাহায্য প্রয়োজন?</p>
                <p className="text-sm text-muted-foreground">
                  কল করুন: <a href="tel:16262" className="text-primary font-medium">১৬২৬২</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="flex-1" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              হোমে ফিরুন
            </Link>
          </Button>
          <Button className="flex-1" asChild>
            <Link to="/dashboard/orders/active">
              <FileText className="w-4 h-4 mr-2" />
              অর্ডার ট্র্যাক করুন
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
