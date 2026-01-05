import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'বার্তা পাঠানো হয়েছে!',
      description: 'আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'ফোন',
      value: '১৬২৬২',
      description: '২৪/৭ হেল্পলাইন',
      link: 'tel:16262',
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      icon: Mail,
      title: 'ইমেইল',
      value: 'support@freshzy.com.bd',
      description: '২৪ ঘন্টার মধ্যে উত্তর',
      link: 'mailto:support@freshzy.com.bd',
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    },
    {
      icon: MessageCircle,
      title: 'লাইভ চ্যাট',
      value: 'অনলাইন সাপোর্ট',
      description: 'সকাল ৯টা - রাত ১০টা',
      link: '#',
      color: 'text-success',
      bg: 'bg-success/10',
    },
    {
      icon: MapPin,
      title: 'অফিস',
      value: 'গুলশান-১, ঢাকা',
      description: 'বাড়ি ১২, রোড ৫',
      link: '#',
      color: 'text-warning',
      bg: 'bg-warning/10',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
            <p className="text-lg text-white/90">
              আমাদের সাথে যোগাযোগ করতে নিচের যেকোনো মাধ্যম ব্যবহার করুন। 
              আমরা সবসময় আপনাকে সাহায্য করতে প্রস্তুত।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.link}
                className="p-6 rounded-2xl bg-card shadow-card card-hover block"
              >
                <div className={`w-14 h-14 rounded-xl ${method.bg} flex items-center justify-center mb-4`}>
                  <method.icon className={`w-7 h-7 ${method.color}`} />
                </div>
                <h3 className="font-semibold mb-1">{method.title}</h3>
                <p className="text-primary font-medium">{method.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
              </a>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">মেসেজ পাঠান</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">নাম *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="আপনার নাম"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">ফোন *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">ইমেইল</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">বিষয় *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    required
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="order">অর্ডার সম্পর্কিত</option>
                    <option value="payment">পেমেন্ট সমস্যা</option>
                    <option value="partner">পার্টনারশিপ</option>
                    <option value="rider">রাইডার সম্পর্কিত</option>
                    <option value="complaint">অভিযোগ</option>
                    <option value="suggestion">পরামর্শ</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">বার্তা *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা লিখুন..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  বার্তা পাঠান
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">আমাদের অফিস</h2>
              
              {/* Map Placeholder */}
              <div className="h-64 bg-muted rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>ম্যাপ লোড হচ্ছে...</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/50">
                  <h3 className="font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    ঠিকানা
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    বাড়ি ১২, রোড ৫, গুলশান-১, ঢাকা ১২১২
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/50">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    অফিস সময়
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    শনি - বৃহস্পতি: সকাল ১০টা - সন্ধ্যা ৭টা<br />
                    শুক্রবার: বন্ধ
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-primary" />
                    জরুরি সাপোর্ট
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    জরুরি প্রয়োজনে ১৬২৬২ নম্বরে কল করুন।<br />
                    আমাদের হেল্পলাইন ২৪/৭ চালু আছে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
