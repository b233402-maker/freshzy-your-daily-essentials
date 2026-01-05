import { Link } from 'react-router-dom';
import { ArrowRight, Check, TrendingUp, Users, DollarSign, BarChart3, Store, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { vendorBenefits, platformStats } from '@/data/dummyData';

const BecomePartnerPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
              💼 Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              আপনার ব্যবসা বাড়ান{' '}
              <span className="text-warning">Freshzy</span>-র সাথে
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              সেলুন বা লন্ড্রি - যাই হোক না কেন, হাজার হাজার কাস্টমারের কাছে পৌঁছান। 
              সহজ রেজিস্ট্রেশন, দ্রুত অনবোর্ডিং, এবং নিয়মিত আয়।
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="glass" size="xl">
                এখনই যোগ দিন
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                আরও জানুন
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <p className="text-3xl font-bold">{platformStats.totalVendors}</p>
                <p className="text-white/70">সক্রিয় পার্টনার</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{platformStats.totalUsers}</p>
                <p className="text-white/70">অ্যাক্টিভ ইউজার</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{platformStats.cities}</p>
                <p className="text-white/70">শহরে সেবা</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-warning/20 rounded-full blur-3xl" />
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              কেন Freshzy পার্টনার হবেন?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              আমাদের প্ল্যাটফর্মে যোগ দিয়ে আপনার ব্যবসা নতুন উচ্চতায় নিয়ে যান
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card shadow-card card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">বেশি কাস্টমার</h3>
              <p className="text-sm text-muted-foreground">
                হাজার হাজার ইউজার আপনার সার্ভিস দেখবে
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">সহজ ম্যানেজমেন্ট</h3>
              <p className="text-sm text-muted-foreground">
                একটি ড্যাশবোর্ডে সব কিছু ম্যানেজ করুন
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-success/10 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-lg mb-2">দ্রুত পেমেন্ট</h3>
              <p className="text-sm text-muted-foreground">
                প্রতি সপ্তাহে পেমেন্ট পান
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card card-hover text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">ফ্রি মার্কেটিং</h3>
              <p className="text-sm text-muted-foreground">
                আমরা আপনার ব্যবসা প্রমোট করব
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              কিভাবে শুরু করবেন?
            </h2>
            <p className="text-muted-foreground">
              মাত্র ৩টি সহজ ধাপে পার্টনার হয়ে যান
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold">
                ১
              </div>
              <h3 className="font-semibold text-lg mb-2">রেজিস্ট্রেশন করুন</h3>
              <p className="text-sm text-muted-foreground">
                আপনার ব্যবসার তথ্য দিয়ে ফ্রি রেজিস্ট্রেশন করুন
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold">
                ২
              </div>
              <h3 className="font-semibold text-lg mb-2">ভেরিফিকেশন</h3>
              <p className="text-sm text-muted-foreground">
                আমাদের টিম আপনার তথ্য যাচাই করবে
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold">
                ৩
              </div>
              <h3 className="font-semibold text-lg mb-2">শুরু করুন</h3>
              <p className="text-sm text-muted-foreground">
                সার্ভিস লিস্ট করুন এবং অর্ডার পেতে শুরু করুন
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              সহজ ও স্বচ্ছ মূল্য
            </h2>
            <p className="text-muted-foreground">
              কোন হিডেন চার্জ নেই, শুধুমাত্র সফল অর্ডারে কমিশন
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-card rounded-3xl p-8 shadow-elevated border-2 border-primary">
              <div className="text-center mb-8">
                <span className="text-sm text-primary font-medium">স্ট্যান্ডার্ড প্ল্যান</span>
                <div className="mt-4">
                  <span className="text-5xl font-bold">১৫%</span>
                  <span className="text-muted-foreground">/অর্ডার</span>
                </div>
                <p className="text-muted-foreground mt-2">শুধুমাত্র সফল অর্ডারে কমিশন</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'আনলিমিটেড সার্ভিস লিস্টিং',
                  'ড্যাশবোর্ড অ্যাক্সেস',
                  'রিয়েল-টাইম অর্ডার ম্যানেজমেন্ট',
                  'সাপ্তাহিক পেমেন্ট',
                  '২৪/৭ সাপোর্ট',
                  'মার্কেটিং ও প্রমোশন',
                  'অ্যানালিটিক্স রিপোর্ট',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" size="lg">
                এখনই যোগ দিন
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
              <Shield className="w-10 h-10 text-primary" />
              <div>
                <h4 className="font-semibold">নিরাপদ পেমেন্ট</h4>
                <p className="text-sm text-muted-foreground">SSLCommerz সিকিউর</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
              <Store className="w-10 h-10 text-primary" />
              <div>
                <h4 className="font-semibold">{platformStats.totalVendors}</h4>
                <p className="text-sm text-muted-foreground">সক্রিয় পার্টনার</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
              <Users className="w-10 h-10 text-primary" />
              <div>
                <h4 className="font-semibold">{platformStats.totalUsers}</h4>
                <p className="text-sm text-muted-foreground">রেজিস্টার্ড ইউজার</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
              <TrendingUp className="w-10 h-10 text-primary" />
              <div>
                <h4 className="font-semibold">{platformStats.totalOrders}</h4>
                <p className="text-sm text-muted-foreground">সফল অর্ডার</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আজই শুরু করুন
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            ফ্রি রেজিস্ট্রেশন করুন এবং আপনার ব্যবসাকে নতুন উচ্চতায় নিয়ে যান
          </p>
          <Button variant="glass" size="xl">
            পার্টনার হিসেবে যোগ দিন
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BecomePartnerPage;
