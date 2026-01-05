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
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                বাংলাদেশের ১ নম্বর সার্ভিস প্ল্যাটফর্ম
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
                আপনার কাছের সেরা{' '}
                <span className="text-warning">সেলুন</span> ও{' '}
                <span className="text-warning">লন্ড্রি</span>{' '}
                সার্ভিস
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-fade-in delay-100">
                ঘরে বসে সেলুন অ্যাপয়েন্টমেন্ট নিন অথবা লন্ড্রি পিকআপ-ডেলিভারি বুক করুন। 
                সবকিছু এক প্ল্যাটফর্মে!
              </p>

              {/* Search Box */}
              <div className="bg-white rounded-2xl p-2 shadow-elevated max-w-xl animate-fade-in delay-200">
                <div className="flex flex-col sm:flex-row gap-2">
                  {/* Location */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r border-border">
                    <MapPin className="w-5 h-5 text-primary" />
                    <input
                      type="text"
                      placeholder="আপনার লোকেশন"
                      className="bg-transparent outline-none text-foreground placeholder:text-muted-foreground w-full sm:w-28"
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

            {/* Decorative Right Side - Service Architecture - 3 columns */}
            <div className="hidden lg:block lg:col-span-3 relative">
              {/* Floating Service Cards */}
              <div className="relative max-w-sm ml-auto">
                {/* Main Map Card */}
                <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-5 border border-white/20 shadow-2xl animate-fade-in">
                  {/* Map Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">আপনার এলাকায়</p>
                      <p className="text-white/70 text-sm">১৫+ সার্ভিস প্রোভাইডার</p>
                    </div>
                  </div>
                  
                  {/* Abstract Map Grid */}
                  <div className="relative h-48 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <div key={`h-${i}`} className="absolute w-full h-px bg-white" style={{ top: `${(i + 1) * 16.66}%` }} />
                      ))}
                      {[...Array(6)].map((_, i) => (
                        <div key={`v-${i}`} className="absolute h-full w-px bg-white" style={{ left: `${(i + 1) * 16.66}%` }} />
                      ))}
                    </div>
                    
                    {/* Location Pins */}
                    <div className="absolute top-6 left-8 animate-pulse">
                      <div className="w-4 h-4 rounded-full bg-warning shadow-lg shadow-warning/50" />
                      <div className="w-1 h-3 bg-warning mx-auto -mt-0.5 rounded-b" />
                    </div>
                    <div className="absolute top-12 right-12 animate-pulse delay-100">
                      <div className="w-4 h-4 rounded-full bg-success shadow-lg shadow-success/50" />
                      <div className="w-1 h-3 bg-success mx-auto -mt-0.5 rounded-b" />
                    </div>
                    <div className="absolute bottom-16 left-16 animate-pulse delay-200">
                      <div className="w-4 h-4 rounded-full bg-primary-foreground shadow-lg shadow-white/30" />
                      <div className="w-1 h-3 bg-primary-foreground mx-auto -mt-0.5 rounded-b" />
                    </div>
                    <div className="absolute bottom-8 right-20 animate-pulse delay-300">
                      <div className="w-4 h-4 rounded-full bg-warning shadow-lg shadow-warning/50" />
                      <div className="w-1 h-3 bg-warning mx-auto -mt-0.5 rounded-b" />
                    </div>
                    <div className="absolute top-20 left-1/2 animate-pulse delay-150">
                      <div className="w-5 h-5 rounded-full bg-success shadow-lg shadow-success/50 ring-4 ring-success/30" />
                      <div className="w-1.5 h-4 bg-success mx-auto -mt-0.5 rounded-b" />
                    </div>
                    
                    {/* Center User Location */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-white shadow-xl flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
                      </div>
                      <div className="absolute -inset-4 rounded-full border-2 border-white/30 animate-ping" />
                    </div>
                  </div>
                </div>

                {/* Floating Salon Card */}
                <div className="absolute -left-8 top-4 bg-white rounded-2xl p-4 shadow-elevated animate-fade-in delay-200 w-40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                      <Scissors className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">সেলুন</p>
                      <p className="text-xs text-muted-foreground">২৪৭+</p>
                    </div>
                  </div>
                </div>

                {/* Floating Laundry Card */}
                <div className="absolute -right-4 bottom-8 bg-white rounded-2xl p-4 shadow-elevated animate-fade-in delay-300 w-40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                      <Shirt className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">লন্ড্রি</p>
                      <p className="text-xs text-muted-foreground">১৫৩+</p>
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute left-0 bottom-20 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 border border-white/30 animate-fade-in delay-400">
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="font-medium text-sm">৪.৯ রেটিং</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

      {/* Rider Section - Premium Design */}
      <section className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-warning/10 via-transparent to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-warning/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/20 border border-warning/30 text-warning text-sm font-medium mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                এখনই সুযোগ নিন
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
                রাইডার হয়ে{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning to-orange-400">
                  আয় করুন
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 mb-8 max-w-lg animate-fade-in">
                Freshzy-র সাথে লন্ড্রি পিকআপ ও ডেলিভারি রাইডার হিসেবে যোগ দিন। 
                নিজের সময়মতো কাজ করুন, সাপ্তাহিক পেমেন্ট পান।
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 mb-8 animate-fade-in">
                <div className="text-center">
                  <p className="text-3xl font-bold text-warning">৳২৫,০০০+</p>
                  <p className="text-sm text-slate-400">গড় মাসিক আয়</p>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">৫০০+</p>
                  <p className="text-sm text-slate-400">সক্রিয় রাইডার</p>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-success">৪.৮★</p>
                  <p className="text-sm text-slate-400">রাইডার রেটিং</p>
                </div>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-warning to-orange-500 hover:from-warning/90 hover:to-orange-500/90 text-slate-900 font-semibold shadow-lg shadow-warning/25 animate-fade-in">
                <Link to="/become-rider">
                  রাইডার হিসেবে যোগ দিন
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Right - Benefits Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-warning/30 transition-all duration-300 hover:bg-white/10 animate-fade-in">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-warning/20 to-warning/5 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">সাপ্তাহিক পেমেন্ট</h4>
                  <p className="text-sm text-slate-400">প্রতি সপ্তাহে সরাসরি আপনার অ্যাকাউন্টে</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:bg-white/10 animate-fade-in delay-100">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">ফ্লেক্সিবল সময়</h4>
                  <p className="text-sm text-slate-400">নিজের সুবিধামতো সময়ে কাজ করুন</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-success/30 transition-all duration-300 hover:bg-white/10 animate-fade-in delay-200">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-success/20 to-success/5 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">বোনাস ও ইন্সেন্টিভ</h4>
                  <p className="text-sm text-slate-400">এক্সট্রা ডেলিভারিতে বোনাস আয়</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:bg-white/10 animate-fade-in delay-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">ইনস্যুরেন্স কভার</h4>
                  <p className="text-sm text-slate-400">রাইডারদের জন্য সুরক্ষা বীমা</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-warning to-orange-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-fade-in">
                🔥 এখনই যোগ দিন
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
