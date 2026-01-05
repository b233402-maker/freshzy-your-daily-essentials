import { Link } from 'react-router-dom';
import { 
  Search, Phone, MessageCircle, FileText, ShoppingBag, 
  CreditCard, Truck, User, Store, Bike, HelpCircle, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      icon: ShoppingBag,
      title: 'অর্ডার সম্পর্কিত',
      description: 'অর্ডার দেওয়া, ট্র্যাক করা, ক্যান্সেল করা',
      link: '/faq?category=order',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: CreditCard,
      title: 'পেমেন্ট ও রিফান্ড',
      description: 'পেমেন্ট মেথড, রিফান্ড প্রসেস',
      link: '/faq?category=payment',
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
    {
      icon: Truck,
      title: 'ডেলিভারি',
      description: 'পিকআপ, ডেলিভারি টাইম, চার্জ',
      link: '/faq?category=delivery',
      color: 'text-success',
      bg: 'bg-success/10',
    },
    {
      icon: User,
      title: 'অ্যাকাউন্ট',
      description: 'রেজিস্ট্রেশন, প্রোফাইল, পাসওয়ার্ড',
      link: '/faq?category=account',
      color: 'text-warning',
      bg: 'bg-warning/10',
    },
    {
      icon: Store,
      title: 'পার্টনার হেল্প',
      description: 'ভেন্ডর অনবোর্ডিং, ড্যাশবোর্ড',
      link: '/faq?category=partner',
      color: 'text-accent',
      bg: 'bg-accent/10',
    },
    {
      icon: Bike,
      title: 'রাইডার হেল্প',
      description: 'রাইডার রেজিস্ট্রেশন, আয়',
      link: '/become-rider',
      color: 'text-destructive',
      bg: 'bg-destructive/10',
    },
  ];

  const popularQuestions = [
    { question: 'কিভাবে অর্ডার দিব?', link: '/faq#faq-1' },
    { question: 'অর্ডার ক্যান্সেল করতে চাইলে কি করব?', link: '/faq#faq-2' },
    { question: 'কোন কোন পেমেন্ট মেথড সাপোর্ট করেন?', link: '/faq#faq-3' },
    { question: 'রিফান্ড পেতে কত সময় লাগে?', link: '/faq#faq-4' },
    { question: 'ডেলিভারি চার্জ কত?', link: '/faq#faq-6' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              হেল্প সেন্টার
            </h1>
            <p className="text-lg text-white/90 mb-8">
              আমরা কিভাবে আপনাকে সাহায্য করতে পারি?
            </p>
            
            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="আপনার সমস্যা বা প্রশ্ন লিখুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-muted/50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="tel:16262" 
              className="flex items-center gap-3 px-6 py-3 bg-background rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">১৬২৬২ কল করুন</span>
            </a>
            <Link 
              to="/contact" 
              className="flex items-center gap-3 px-6 py-3 bg-background rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">মেসেজ পাঠান</span>
            </Link>
            <Link 
              to="/faq" 
              className="flex items-center gap-3 px-6 py-3 bg-background rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">FAQ দেখুন</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            কোন বিষয়ে সাহায্য দরকার?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <Link 
                key={index}
                to={category.link}
                className="p-6 rounded-2xl bg-card shadow-card card-hover block group"
              >
                <div className={`w-14 h-14 rounded-xl ${category.bg} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-7 h-7 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            জনপ্রিয় প্রশ্নসমূহ
          </h2>

          <div className="max-w-2xl mx-auto space-y-3">
            {popularQuestions.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center justify-between p-4 bg-background rounded-xl hover:shadow-md transition-shadow group"
              >
                <span className="font-medium group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/faq">
                সব প্রশ্ন দেখুন
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            দরকারি লিংক
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              to="/privacy"
              className="p-6 rounded-2xl bg-card shadow-card text-center card-hover"
            >
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">প্রাইভেসি পলিসি</h3>
            </Link>
            <Link 
              to="/terms"
              className="p-6 rounded-2xl bg-card shadow-card text-center card-hover"
            >
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">টার্মস অফ সার্ভিস</h3>
            </Link>
            <Link 
              to="/refund"
              className="p-6 rounded-2xl bg-card shadow-card text-center card-hover"
            >
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">রিফান্ড পলিসি</h3>
            </Link>
            <Link 
              to="/about"
              className="p-6 rounded-2xl bg-card shadow-card text-center card-hover"
            >
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold">আমাদের সম্পর্কে</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenterPage;
