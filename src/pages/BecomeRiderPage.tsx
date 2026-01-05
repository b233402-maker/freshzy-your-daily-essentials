import { Link } from 'react-router-dom';
import { ArrowRight, Check, Bike, Clock, DollarSign, Shield, MapPin, Phone, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BecomeRiderPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground py-20 md:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
              🏍️ Rider Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Freshzy রাইডার হয়ে{' '}
              <span className="text-warning">আয় করুন</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/90 mb-8">
              লন্ড্রি পিকআপ ও ডেলিভারি রাইডার হিসেবে যোগ দিন। নিজের সময়মতো কাজ করুন, ভালো আয় করুন।
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="glass" size="xl">
                রাইডার হিসেবে যোগ দিন
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <p className="text-3xl font-bold">৳১৫,০০০+</p>
                <p className="text-secondary-foreground/70">গড় মাসিক আয়</p>
              </div>
              <div>
                <p className="text-3xl font-bold">৫০০+</p>
                <p className="text-secondary-foreground/70">সক্রিয় রাইডার</p>
              </div>
              <div>
                <p className="text-3xl font-bold">১০+</p>
                <p className="text-secondary-foreground/70">শহরে সেবা</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              কেন Freshzy রাইডার হবেন?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-lg mb-2">সাপ্তাহিক পেমেন্ট</h3>
              <p className="text-sm text-muted-foreground">
                প্রতি সপ্তাহে সরাসরি আপনার অ্যাকাউন্টে পেমেন্ট
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">ফ্লেক্সিবল সময়</h3>
              <p className="text-sm text-muted-foreground">
                নিজের সুবিধামতো সময়ে কাজ করুন
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-warning/10 flex items-center justify-center">
                <Bike className="w-8 h-8 text-warning" />
              </div>
              <h3 className="font-semibold text-lg mb-2">বোনাস ও ইন্সেন্টিভ</h3>
              <p className="text-sm text-muted-foreground">
                বেশি ডেলিভারিতে এক্সট্রা বোনাস পান
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">সহজ অ্যাপ</h3>
              <p className="text-sm text-muted-foreground">
                ইউজার-ফ্রেন্ডলি রাইডার অ্যাপ
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">GPS নেভিগেশন</h3>
              <p className="text-sm text-muted-foreground">
                সহজে গন্তব্যে পৌঁছান
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="font-semibold text-lg mb-2">বীমা সুবিধা</h3>
              <p className="text-sm text-muted-foreground">
                দুর্ঘটনা বীমা কভারেজ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                রাইডার হতে কি লাগবে?
              </h2>
              <ul className="space-y-4">
                {[
                  'বৈধ ড্রাইভিং লাইসেন্স (মোটরসাইকেল)',
                  'নিজস্ব মোটরসাইকেল',
                  'স্মার্টফোন (অ্যান্ড্রয়েড ৬.০+)',
                  'বয়স ১৮-৪৫ বছর',
                  'জাতীয় পরিচয়পত্র (NID)',
                  'ঢাকা শহরে বসবাস',
                ].map((req, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-success shrink-0" />
                    <span className="text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-card">
              <h3 className="font-semibold text-xl mb-6">এখনই আবেদন করুন</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">নাম</label>
                  <input 
                    type="text" 
                    placeholder="আপনার পুরো নাম"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ফোন নম্বর</label>
                  <input 
                    type="tel" 
                    placeholder="01XXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">এলাকা</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                    <option>এলাকা নির্বাচন করুন</option>
                    <option>গুলশান</option>
                    <option>বনানী</option>
                    <option>ধানমন্ডি</option>
                    <option>মিরপুর</option>
                    <option>উত্তরা</option>
                  </select>
                </div>
                <Button className="w-full" size="lg">
                  আবেদন জমা দিন
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              আয়ের হিসাব
            </h2>
            <p className="text-muted-foreground">
              প্রতি ডেলিভারিতে ভালো আয় করুন
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                <p className="text-sm text-muted-foreground mb-2">প্রতি পিকআপ</p>
                <p className="text-3xl font-bold text-primary">৳৩০-৫০</p>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                <p className="text-sm text-muted-foreground mb-2">প্রতি ডেলিভারি</p>
                <p className="text-3xl font-bold text-primary">৳৩০-৫০</p>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                <p className="text-sm text-muted-foreground mb-2">দৈনিক বোনাস</p>
                <p className="text-3xl font-bold text-success">৳২০০+</p>
              </div>
            </div>

            <div className="mt-8 bg-primary/10 rounded-2xl p-6 text-center">
              <p className="text-lg mb-2">পূর্ণ সময় কাজ করলে মাসে আয় করতে পারবেন</p>
              <p className="text-4xl font-bold text-primary">৳১৫,০০০ - ৳২৫,০০০</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            প্রশ্ন আছে?
          </h2>
          <p className="text-muted-foreground mb-8">
            আমাদের টিমের সাথে যোগাযোগ করুন
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
                সাহায্য কেন্দ্র
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeRiderPage;
