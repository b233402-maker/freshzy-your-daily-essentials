import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, Clock, MapPin, Phone, ChevronLeft, Heart, Share2, 
  Users, AlertCircle, Plus, Minus, ShoppingCart, Info,
  MessageCircle, Check, Truck, Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ServiceCard from '@/components/cards/ServiceCard';
import { vendors, salonServices, laundryServices, reviews, Service } from '@/data/dummyData';
import { useCart } from '@/contexts/CartContext';

const VendorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vendor = vendors.find(v => v.id === id) || vendors[0];
  const services = vendor.type === 'salon' ? salonServices : laundryServices;
  
  const { 
    items: cart, 
    addItem, 
    removeItem, 
    getItemQuantity, 
    subtotal: cartTotal, 
    itemCount: cartItemCount,
    vendorId: currentVendorId
  } = useCart();
  
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', ...new Set(services.map(s => s.category))];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const addToCart = (service: Service) => {
    addItem(service, vendor.id);
  };

  const removeFromCart = (serviceId: string) => {
    removeItem(serviceId);
  };

  const getQuantity = (serviceId: string) => {
    return getItemQuantity(serviceId);
  };

  const handleCheckout = () => {
    navigate('/cart');
  };

  // Show items only from this vendor
  const vendorCart = currentVendorId === vendor.id ? cart : [];

  return (
    <div className="min-h-screen bg-muted/30 pb-32 md:pb-0">
      {/* Header Image */}
      <div className="relative h-64 md:h-80">
        <img 
          src={vendor.image} 
          alt={vendor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Link 
            to="/vendors" 
            className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Vendor Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  vendor.type === 'salon' ? 'bg-accent' : 'bg-secondary'
                }`}>
                  {vendor.type === 'salon' ? 'সেলুন' : 'লন্ড্রি'}
                </span>
                {vendor.isOpen ? (
                  <span className="badge-available">খোলা আছে</span>
                ) : (
                  <span className="badge-urgent">বন্ধ</span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">{vendor.name}</h1>
              <p className="text-sm text-white/80">{vendor.categories.join(' • ')}</p>
            </div>
            <div className="bg-background/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <div className="flex items-center gap-1 text-warning">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-xl font-bold text-white">{vendor.rating}</span>
              </div>
              <p className="text-xs text-white/80">{vendor.reviewCount} রিভিউ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Services */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Info */}
            <div className="bg-background rounded-2xl p-4 shadow-card">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">{vendor.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${vendor.phone}`} className="text-sm hover:text-primary">
                    {vendor.phone}
                  </a>
                </div>
                {vendor.deliveryTime && (
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="text-sm">{vendor.deliveryTime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Queue Info - Salon Only */}
            {vendor.type === 'salon' && vendor.queueCount !== undefined && (
              <div className="bg-warning/10 border border-warning/30 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-warning shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">বর্তমান কিউ</h3>
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <span className="text-2xl font-bold">{vendor.queueCount}</span>
                        <span className="text-sm text-muted-foreground ml-1">জন সাধারণ কিউতে</span>
                      </div>
                      {vendor.urgentQueueCount! > 0 && (
                        <div>
                          <span className="text-2xl font-bold text-destructive">{vendor.urgentQueueCount}</span>
                          <span className="text-sm text-muted-foreground ml-1">জন আর্জেন্ট কিউতে</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      আনুমানিক অপেক্ষার সময়: <strong>~{(vendor.queueCount || 0) * 15} মিনিট</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tabs */}
            <Tabs defaultValue="services" className="bg-background rounded-2xl shadow-card overflow-hidden">
              <TabsList className="w-full justify-start p-0 h-auto bg-muted/50 rounded-none border-b">
                <TabsTrigger 
                  value="services" 
                  className="flex-1 py-4 rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                  সার্ভিস
                </TabsTrigger>
                <TabsTrigger 
                  value="info" 
                  className="flex-1 py-4 rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                  তথ্য
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews" 
                  className="flex-1 py-4 rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                  রিভিউ ({vendor.reviewCount})
                </TabsTrigger>
              </TabsList>

              {/* Services Tab */}
              <TabsContent value="services" className="p-4 mt-0">
                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        activeCategory === cat
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {cat === 'all' ? 'সব' : cat}
                    </button>
                  ))}
                </div>

                {/* Services List */}
                <div className="space-y-3">
                  {filteredServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      quantity={getQuantity(service.id)}
                      onAdd={() => addToCart(service)}
                      onRemove={() => removeFromCart(service.id)}
                    />
                  ))}
                </div>
              </TabsContent>

              {/* Info Tab */}
              <TabsContent value="info" className="p-4 mt-0">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      সময়সূচী
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between p-2 bg-muted rounded-lg">
                        <span>শনি - বৃহঃ</span>
                        <span className="font-medium">সকাল ১০টা - রাত ১০টা</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted rounded-lg">
                        <span>শুক্রবার</span>
                        <span className="font-medium">বিকাল ৩টা - রাত ১০টা</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      সম্পর্কে
                    </h3>
                    <p className="text-muted-foreground">
                      {vendor.name} একটি প্রিমিয়াম {vendor.type === 'salon' ? 'সেলুন' : 'লন্ড্রি'} সার্ভিস। 
                      আমরা উন্নতমানের সেবা প্রদান করি এবং গ্রাহক সন্তুষ্টিই আমাদের প্রধান লক্ষ্য।
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      ঠিকানা
                    </h3>
                    <p className="text-muted-foreground">{vendor.address}</p>
                    {/* Map Placeholder */}
                    <div className="mt-3 h-40 bg-muted rounded-xl flex items-center justify-center">
                      <span className="text-muted-foreground">ম্যাপ দেখুন</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="p-4 mt-0">
                {/* Rating Summary */}
                <div className="flex items-center gap-6 p-4 bg-muted rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold">{vendor.rating}</div>
                    <div className="flex items-center gap-1 justify-center my-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(vendor.rating) ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">{vendor.reviewCount} রিভিউ</div>
                  </div>
                  <div className="flex-1 space-y-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs w-4">{star}</span>
                        <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-warning rounded-full"
                            style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-4 border border-border rounded-xl">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-medium text-primary">{review.userName.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-medium">{review.userName}</h4>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          <span className="font-medium">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  সব রিভিউ দেখুন
                </Button>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Cart & Queue */}
          <div className="hidden lg:block space-y-6">
            {/* Queue Card - Salon */}
            {vendor.type === 'salon' && (
              <div className="bg-background rounded-2xl p-6 shadow-card sticky top-24">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  কিউ তথ্য
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">সাধারণ কিউ</span>
                      <span className="badge-queue">{vendor.queueCount} জন</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      আনুমানিক অপেক্ষা: ~{(vendor.queueCount || 0) * 15} মিনিট
                    </p>
                  </div>

                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4 text-destructive" />
                        আর্জেন্ট কিউ
                      </span>
                      <span className="badge-urgent">{vendor.urgentQueueCount} জন</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +৫০% চার্জে দ্রুত সার্ভিস পান
                    </p>
                  </div>

                  <div className="text-center p-4 border-2 border-dashed border-border rounded-xl">
                    <p className="text-2xl font-bold text-primary">#{(vendor.queueCount || 0) + 1}</p>
                    <p className="text-sm text-muted-foreground">আপনার সিরিয়াল হবে</p>
                  </div>
                </div>
              </div>
            )}

            {/* Delivery Info - Laundry */}
            {vendor.type === 'laundry' && (
              <div className="bg-background rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  ডেলিভারি তথ্য
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                    <span className="text-sm">পিকআপ সময়</span>
                    <span className="font-medium">{vendor.deliveryTime}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                    <span className="text-sm">ডেলিভারি সময়</span>
                    <span className="font-medium">২৪-৪৮ ঘন্টা</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-xl">
                    <span className="text-sm flex items-center gap-1">
                      <Check className="w-4 h-4 text-success" />
                      ফ্রি পিকআপ
                    </span>
                    <span className="font-medium text-success">৳৫০০+ অর্ডারে</span>
                  </div>
                </div>
              </div>
            )}

            {/* Cart */}
            <div className="bg-background rounded-2xl p-6 shadow-card sticky top-24">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                আপনার অর্ডার
                {cartItemCount > 0 && (
                  <span className="ml-auto badge-available">{cartItemCount} আইটেম</span>
                )}
              </h3>

              {vendorCart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">আপনার কার্ট খালি</p>
                  <p className="text-sm text-muted-foreground">সার্ভিস যোগ করুন</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {vendorCart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-muted rounded-xl">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-muted-foreground">৳{item.price} × {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="w-7 h-7 rounded-full bg-background flex items-center justify-center hover:bg-destructive/10"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => addToCart(item)}
                            className="w-7 h-7 rounded-full bg-background flex items-center justify-center hover:bg-primary/10"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border mt-4 pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">মোট</span>
                      <span className="text-xl font-bold text-primary">৳{cartTotal}</span>
                    </div>
                    <Button className="w-full" size="lg" onClick={handleCheckout}>
                      {vendor.type === 'salon' ? 'বুকিং করুন' : 'অর্ডার করুন'}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      {vendor.type === 'salon' 
                        ? 'সেলুনে গিয়ে পেমেন্ট করতে পারবেন'
                        : 'অনলাইন পেমেন্ট বা ক্যাশ অন ডেলিভারি'
                      }
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cart Bar */}
      {vendorCart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 lg:hidden z-50">
          <div className="container-custom">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{cartItemCount} আইটেম</p>
                <p className="text-xl font-bold text-primary">৳{cartTotal}</p>
              </div>
              <Button size="lg" onClick={handleCheckout}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                {vendor.type === 'salon' ? 'বুকিং করুন' : 'অর্ডার করুন'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDetailPage;
