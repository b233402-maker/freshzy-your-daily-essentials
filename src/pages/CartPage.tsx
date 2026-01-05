import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ChevronLeft,
  Store,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { 
    items, 
    vendor, 
    updateQuantity, 
    clearCart,
    subtotal,
    deliveryFee,
    serviceFee,
    total,
    itemCount 
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <ShoppingCart className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2">আপনার কার্ট খালি</h1>
          <p className="text-muted-foreground mb-6">
            সার্ভিস যোগ করতে ভেন্ডর পেজে যান এবং পছন্দের সার্ভিস সিলেক্ট করুন।
          </p>
          <Button asChild>
            <Link to="/vendors">
              <Store className="w-4 h-4 mr-2" />
              ভেন্ডর দেখুন
            </Link>
          </Button>
        </div>
      </div>
    );
  }

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
              <h1 className="text-xl font-bold">কার্ট</h1>
              <p className="text-sm text-muted-foreground">{itemCount} টি আইটেম</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Vendor Info */}
            {vendor && (
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={vendor.image} 
                      alt={vendor.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{vendor.name}</h3>
                      <p className="text-sm text-muted-foreground">{vendor.address}</p>
                      {vendor.deliveryTime && (
                        <div className="flex items-center gap-1 text-sm text-primary mt-1">
                          <Clock className="w-4 h-4" />
                          {vendor.deliveryTime}
                        </div>
                      )}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/vendor/${vendor.id}`}>
                        আরো যোগ করুন
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Items List */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">আইটেম সমূহ</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-destructive hover:text-destructive"
                    onClick={clearCart}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    সব মুছুন
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id}>
                    {index > 0 && <Separator className="mb-4" />}
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        {item.duration && (
                          <p className="text-xs text-muted-foreground mt-1">
                            সময়: {item.duration}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-semibold text-primary">
                            ৳{item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ৳{item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
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
                <Button className="w-full" size="lg" asChild>
                  <Link to="/checkout">
                    চেকআউট করুন
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
            <p className="text-sm text-muted-foreground">মোট</p>
            <p className="text-xl font-bold text-primary">৳{total}</p>
          </div>
          <Button size="lg" asChild>
            <Link to="/checkout">
              চেকআউট করুন
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
