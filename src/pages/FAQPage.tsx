import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'সব' },
    { id: 'order', name: 'অর্ডার' },
    { id: 'payment', name: 'পেমেন্ট' },
    { id: 'delivery', name: 'ডেলিভারি' },
    { id: 'account', name: 'অ্যাকাউন্ট' },
    { id: 'partner', name: 'পার্টনার' },
  ];

  const faqs = [
    {
      id: 'faq-1',
      category: 'order',
      question: 'কিভাবে অর্ডার দিব?',
      answer: 'অর্ডার দিতে প্রথমে আমাদের ওয়েবসাইট বা অ্যাপে লগইন করুন। তারপর আপনার কাছের সেলুন বা লন্ড্রি সার্ভিস খুঁজুন, পছন্দের সার্ভিস সিলেক্ট করুন এবং বুকিং কনফার্ম করুন। পেমেন্ট করে অর্ডার সম্পন্ন করুন।',
    },
    {
      id: 'faq-2',
      category: 'order',
      question: 'অর্ডার ক্যান্সেল করতে চাইলে কি করব?',
      answer: 'অর্ডার ক্যান্সেল করতে আপনার ড্যাশবোর্ডে যান, Active Orders সেকশনে গিয়ে যে অর্ডার ক্যান্সেল করতে চান সেটি সিলেক্ট করুন এবং Cancel বাটনে ক্লিক করুন। সার্ভিস শুরু হওয়ার আগে ক্যান্সেল করলে পূর্ণ রিফান্ড পাবেন।',
    },
    {
      id: 'faq-3',
      category: 'payment',
      question: 'কোন কোন পেমেন্ট মেথড সাপোর্ট করেন?',
      answer: 'আমরা বিকাশ, নগদ, রকেট, কার্ড পেমেন্ট (Visa, MasterCard), এবং ক্যাশ অন ডেলিভারি সাপোর্ট করি। আপনি আপনার সুবিধামতো যেকোনো পেমেন্ট মেথড ব্যবহার করতে পারেন।',
    },
    {
      id: 'faq-4',
      category: 'payment',
      question: 'রিফান্ড পেতে কত সময় লাগে?',
      answer: 'রিফান্ড সাধারণত ৩-৫ কার্যদিবসের মধ্যে প্রসেস হয়। বিকাশ/নগদ/রকেট এর ক্ষেত্রে ২৪-৪৮ ঘন্টার মধ্যে এবং কার্ড পেমেন্টের ক্ষেত্রে ৫-৭ কার্যদিবস সময় লাগতে পারে।',
    },
    {
      id: 'faq-5',
      category: 'delivery',
      question: 'লন্ড্রি পিকআপ ও ডেলিভারি কিভাবে হয়?',
      answer: 'অর্ডার কনফার্ম হলে আমাদের রাইডার আপনার দেওয়া ঠিকানায় কাপড় পিকআপ করতে আসবে। লন্ড্রি প্রসেস শেষে পরিষ্কার কাপড় আবার আপনার ঠিকানায় ডেলিভারি করা হবে।',
    },
    {
      id: 'faq-6',
      category: 'delivery',
      question: 'ডেলিভারি চার্জ কত?',
      answer: 'ডেলিভারি চার্জ আপনার লোকেশন এবং অর্ডার সাইজের উপর নির্ভর করে। সাধারণত ঢাকার মধ্যে ৳৩০-৫০ এবং অন্যান্য শহরে ৳৪০-৬০। ৳৫০০+ অর্ডারে ফ্রি ডেলিভারি।',
    },
    {
      id: 'faq-7',
      category: 'account',
      question: 'অ্যাকাউন্ট তৈরি করতে কি লাগবে?',
      answer: 'অ্যাকাউন্ট তৈরি করতে শুধু আপনার ফোন নম্বর বা ইমেইল দরকার। OTP ভেরিফিকেশনের মাধ্যমে সহজেই অ্যাকাউন্ট তৈরি করতে পারবেন।',
    },
    {
      id: 'faq-8',
      category: 'account',
      question: 'পাসওয়ার্ড ভুলে গেলে কি করব?',
      answer: 'লগইন পেজে "Forgot Password" অপশনে ক্লিক করুন। আপনার রেজিস্টার্ড ফোন নম্বর বা ইমেইলে একটি OTP পাঠানো হবে। OTP দিয়ে নতুন পাসওয়ার্ড সেট করুন।',
    },
    {
      id: 'faq-9',
      category: 'partner',
      question: 'কিভাবে পার্টনার হব?',
      answer: '"পার্টনার হন" পেজে গিয়ে রেজিস্ট্রেশন ফর্ম পূরণ করুন। আমাদের টিম আপনার তথ্য যাচাই করবে এবং ২-৩ কার্যদিবসের মধ্যে অনবোর্ডিং প্রসেস সম্পন্ন করবে।',
    },
    {
      id: 'faq-10',
      category: 'partner',
      question: 'পার্টনারদের কমিশন রেট কত?',
      answer: 'আমরা প্রতি সফল অর্ডারে মাত্র ১৫% কমিশন চার্জ করি। কোন হিডেন চার্জ বা মাসিক ফি নেই। শুধুমাত্র সফল অর্ডারেই কমিশন কাটা হয়।',
    },
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              সচরাচর জিজ্ঞাসা (FAQ)
            </h1>
            <p className="text-lg text-white/90 mb-8">
              আপনার প্রশ্নের উত্তর খুঁজুন
            </p>
            
            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="প্রশ্ন খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="bg-card rounded-xl border border-border px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-medium pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">কোন প্রশ্ন পাওয়া যায়নি</p>
                <Button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                  সব দেখুন
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              এখনও সাহায্য দরকার?
            </h2>
            <p className="text-muted-foreground mb-8">
              আপনার প্রশ্নের উত্তর না পেলে আমাদের সাথে সরাসরি যোগাযোগ করুন
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="tel:16262">
                  <Phone className="w-5 h-5" />
                  ১৬২৬২ কল করুন
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <MessageCircle className="w-5 h-5" />
                  মেসেজ পাঠান
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
