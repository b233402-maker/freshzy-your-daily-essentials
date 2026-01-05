import { useState } from 'react';
import { Search, MapPin, Scissors, Shirt, ArrowRight, Star, Users, CheckCircle, TrendingUp, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/cards/VendorCard';
import { vendors, platformStats, howItWorksSteps, vendorBenefits } from '@/data/dummyData';
import heroPattern from '@/assets/hero-pattern.png';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'salon' | 'laundry'>('salon');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredVendors = vendors.filter(v => v.isFeatured);
  const filteredServices = activeTab === 'salon' 
    ? vendors.filter(v => v.type === 'salon').slice(0, 8)
    : vendors.filter(v => v.type === 'laundry').slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content */}
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              বাংলাদেশের ১ নম্বর সার্ভিস প্ল্যাটফর্ম
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              আপনার কাছের সেরা{' '}
              <span className="text-warning">সেলুন</span> ও{' '}
              <span className="text-warning">লন্ড্রি</span>{' '}
              সার্ভিস
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-fade-in delay-100">
              ঘরে বসে সেলুন অ্যাপয়েন্টমেন্ট নিন অথবা লন্ড্রি পিকআপ-ডেলিভারি বুক করুন। 
              সবকিছু এক অ্যাপে!
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-2xl p-2 shadow-elevated max-w-2xl animate-fade-in delay-200">
              <div className="flex flex-col sm:flex-row gap-2">
                {/* Location */}
                <div className="flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <input
                    type="text"
                    placeholder="আপনার লোকেশন"
                    className="bg-transparent outline-none text-foreground placeholder:text-muted-foreground w-full sm:w-32"
                    defaultValue="ঢাকা"
                  />
                </div>
                
                {/* Search */}
                <div className="flex-1 flex items-center gap-2 px-4 py-3">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="সেলুন বা লন্ড্রি খুঁজুন..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent outline-none text-foreground placeholder:text-muted-foreground w-full"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="shrink-0">
                  <Search className="w-5 h-5" />
                  খুঁজুন
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-8 animate-fade-in delay-300">
              <div className="flex items-center gap-2 text-white">
                <Users className="w-5 h-5" />
                <span>{platformStats.totalUsers} ইউজার</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Star className="w-5 h-5" />
                <span>{platformStats.totalVendors} সার্ভিস প্রোভাইডার</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5" />
                <span>{platformStats.totalOrders} অর্ডার সম্পন্ন</span>
              </div>
            </div>
          </div>

          {/* Mobile App Preview - Coming Soon */}
          {/* TODO: Uncomment when ready to show mobile app preview
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-80">
            <div className="relative">
              <div className="w-64 h-[500px] bg-white/10 backdrop-blur-lg rounded-[3rem] border border-white/20 p-4 mx-auto">
                <div className="w-full h-full bg-foreground/20 rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="font-medium">মোবাইল অ্যাপ</p>
                    <p className="text-sm opacity-80">শীঘ্রই আসছে</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          {/* Section Header with Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                আমাদের প্ল্যাটফর্ম
              </h2>
              <p className="text-muted-foreground">
                সেরা মানের সার্ভিস প্রোভাইডার থেকে সেবা নিন
              </p>
            </div>
            
            {/* Tabs */}
            <div className="inline-flex p-1 rounded-xl bg-background shadow-md">
              <button
                onClick={() => setActiveTab('salon')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'salon'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Scissors className="w-5 h-5" />
                সেলুন
              </button>
              <button
                onClick={() => setActiveTab('laundry')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'laundry'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Shirt className="w-5 h-5" />
                লন্ড্রি
              </button>
            </div>
          </div>

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((vendor, index) => (
              <div 
                key={vendor.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <VendorCard vendor={vendor} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to={`/vendors?type=${activeTab}`}>
                সব দেখুন
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              কিভাবে কাজ করে?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              মাত্র কয়েকটি সহজ ধাপে আপনার প্রয়োজনীয় সার্ভিস বুক করুন
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-xl bg-muted">
              <button
                onClick={() => setActiveTab('salon')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'salon'
                    ? 'bg-background shadow-sm text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                সেলুন বুকিং
              </button>
              <button
                onClick={() => setActiveTab('laundry')}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'laundry'
                    ? 'bg-background shadow-sm text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                লন্ড্রি সার্ভিস
              </button>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'salon' ? howItWorksSteps.salon : howItWorksSteps.laundry).map((step, index) => (
              <div 
                key={step.step}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
                )}
                
                {/* Step Number */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Vendor Section */}
      <section className="section-padding bg-gradient-hero text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
                💼 পার্টনার হন
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                আপনার ব্যবসা বাড়ান Freshzy-র সাথে
              </h2>
              <p className="text-lg text-white/90 mb-8">
                হাজার হাজার কাস্টমারের কাছে পৌঁছান। সেলুন অথবা লন্ড্রি - যাই হোক না কেন, 
                আমাদের প্ল্যাটফর্মে আপনার সার্ভিস লিস্ট করুন এবং আয় বাড়ান।
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {vendorBenefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{benefit.title}</h4>
                      <p className="text-sm text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild variant="glass" size="lg">
                <Link to="/become-partner">
                  এখনই যোগ দিন
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">পার্টনারদের আয়</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/10">
                    <span>গড় মাসিক আয়</span>
                    <span className="text-2xl font-bold text-warning">৳৫০,০০০+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/10">
                    <span>সক্রিয় পার্টনার</span>
                    <span className="text-2xl font-bold">{platformStats.totalVendors}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/10">
                    <span>কমিশন রেট</span>
                    <span className="text-2xl font-bold text-success">মাত্র ১৫%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earn Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
              🏍️ রাইডার হন
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Freshzy-র সাথে আয় করুন
            </h2>
            <p className="text-lg text-secondary-foreground/90 mb-8">
              লন্ড্রি পিকআপ ও ডেলিভারি রাইডার হিসেবে যোগ দিন। 
              নিজের সময়মতো কাজ করুন, ভালো আয় করুন।
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="glass" size="lg">
                <Link to="/become-rider">
                  রাইডার হিসেবে যোগ দিন
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Rider Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-white/10">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="font-semibold mb-2">সাপ্তাহিক পেমেন্ট</h4>
                <p className="text-sm text-secondary-foreground/80">প্রতি সপ্তাহে পেমেন্ট পান</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/10">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="font-semibold mb-2">ফ্লেক্সিবল সময়</h4>
                <p className="text-sm text-secondary-foreground/80">নিজের সুবিধামতো কাজ করুন</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/10">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="font-semibold mb-2">বোনাস আয়</h4>
                <p className="text-sm text-secondary-foreground/80">এক্সট্রা বোনাস ও ইন্সেন্টিভ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              কেন Freshzy বেছে নেবেন?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              বাংলাদেশের হাজার হাজার ইউজার আমাদের উপর ভরসা রাখেন
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '✅', title: 'ভেরিফাইড সার্ভিস', desc: 'সব সার্ভিস প্রোভাইডার যাচাই করা' },
              { icon: '💯', title: 'সন্তুষ্টির গ্যারান্টি', desc: 'সন্তুষ্ট না হলে রিফান্ড' },
              { icon: '🔒', title: 'নিরাপদ পেমেন্ট', desc: 'SSLCommerz সিকিউর পেমেন্ট' },
              { icon: '📞', title: '২৪/৭ সাপোর্ট', desc: 'যেকোনো সময় সাহায্য পান' },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[500px] bg-muted">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-10" />
        
        {/* Placeholder Map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-20 bg-background/90 backdrop-blur-sm p-8 rounded-2xl shadow-elevated">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
            <h3 className="text-2xl font-bold mb-2">আপনার কাছের সার্ভিস</h3>
            <p className="text-muted-foreground mb-4">
              ম্যাপে দেখুন আপনার এলাকায় কোন সার্ভিস আছে
            </p>
            <Button asChild>
              <Link to="/vendors">
                ম্যাপে দেখুন
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Map Background Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("https://api.mapbox.com/styles/v1/mapbox/light-v11/static/90.4125,23.8103,11,0/1200x500?access_token=pk.placeholder")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Fake Map Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Markers */}
        <div className="absolute top-1/4 left-1/4 map-marker">
          <Scissors className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="absolute top-1/3 right-1/3 map-marker" style={{ animationDelay: '0.5s' }}>
          <Shirt className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 map-marker" style={{ animationDelay: '1s' }}>
          <Scissors className="w-4 h-4 text-primary-foreground" />
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              সাহায্য দরকার?
            </h2>
            <p className="text-muted-foreground mb-8">
              আমাদের কাস্টমার সাপোর্ট টিম ২৪/৭ আপনার সেবায়
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="tel:16262">
                  <Phone className="w-5 h-5" />
                  ১৬২৬২ কল করুন
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/help">
                  <MessageCircle className="w-5 h-5" />
                  লাইভ চ্যাট
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
