import { Link } from 'react-router-dom';
import { Users, Target, Heart, Award, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { platformStats } from '@/data/dummyData';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'রাফিদ হাসান',
      role: 'প্রতিষ্ঠাতা ও CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    {
      name: 'নাজমুল ইসলাম',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    },
    {
      name: 'সামিয়া রহমান',
      role: 'অপারেশনস হেড',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    {
      name: 'তানভীর আহমেদ',
      role: 'মার্কেটিং হেড',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    },
  ];

  const milestones = [
    { year: '২০২২', title: 'যাত্রা শুরু', description: 'ঢাকায় ২০টি পার্টনার নিয়ে শুরু' },
    { year: '২০২৩', title: 'সম্প্রসারণ', description: '১০টি শহরে সেবা বিস্তৃত' },
    { year: '২০২৪', title: 'মাইলস্টোন', description: '৫০,০০০+ অর্ডার সম্পন্ন' },
    { year: '২০২৫', title: 'বর্তমান', description: '৫০০+ পার্টনার, ১০,০০০+ ইউজার' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              আমাদের সম্পর্কে
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Freshzy বাংলাদেশের প্রথম সেলুন ও লন্ড্রি সার্ভিস প্ল্যাটফর্ম। 
              আমরা আপনার দৈনন্দিন জীবনকে সহজ করতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">আমাদের মিশন</h2>
              <p className="text-muted-foreground">
                বাংলাদেশের প্রতিটি মানুষের কাছে মানসম্মত সেলুন ও লন্ড্রি সেবা পৌঁছে দেওয়া। 
                প্রযুক্তির মাধ্যমে সেবা প্রদানকারী ও গ্রাহকদের সংযুক্ত করে উভয়ের জীবনমান উন্নত করা।
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/20">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">আমাদের ভিশন</h2>
              <p className="text-muted-foreground">
                ২০৩০ সালের মধ্যে বাংলাদেশের সবচেয়ে বড় অন-ডিমান্ড সার্ভিস প্ল্যাটফর্ম হওয়া। 
                ১ মিলিয়ন কাস্টমার এবং ১০,০০০ পার্টনার নিয়ে দেশব্যাপী নেটওয়ার্ক গড়ে তোলা।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের অর্জন</h2>
            <p className="text-muted-foreground">সংখ্যায় আমাদের সাফল্য</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background p-6 rounded-2xl text-center shadow-card">
              <p className="text-4xl font-bold text-primary mb-2">{platformStats.totalVendors}</p>
              <p className="text-muted-foreground">পার্টনার</p>
            </div>
            <div className="bg-background p-6 rounded-2xl text-center shadow-card">
              <p className="text-4xl font-bold text-secondary mb-2">{platformStats.totalUsers}</p>
              <p className="text-muted-foreground">ইউজার</p>
            </div>
            <div className="bg-background p-6 rounded-2xl text-center shadow-card">
              <p className="text-4xl font-bold text-success mb-2">{platformStats.totalOrders}</p>
              <p className="text-muted-foreground">অর্ডার সম্পন্ন</p>
            </div>
            <div className="bg-background p-6 rounded-2xl text-center shadow-card">
              <p className="text-4xl font-bold text-warning mb-2">{platformStats.cities}</p>
              <p className="text-muted-foreground">শহরে সেবা</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের যাত্রা</h2>
            <p className="text-muted-foreground">যেভাবে আমরা এখানে এসেছি</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-sm font-medium text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-2">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের টিম</h2>
            <p className="text-muted-foreground">যারা Freshzy-কে সফল করেছেন</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-background p-6 rounded-2xl text-center shadow-card">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">আমাদের মূল্যবোধ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">মান নিশ্চিতকরণ</h3>
              <p className="text-sm text-muted-foreground">সর্বোচ্চ মানের সেবা নিশ্চিত করি</p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">গ্রাহক সন্তুষ্টি</h3>
              <p className="text-sm text-muted-foreground">গ্রাহক সন্তুষ্টিই আমাদের প্রধান লক্ষ্য</p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-success" />
              </div>
              <h3 className="font-semibold mb-2">বিশ্বাসযোগ্যতা</h3>
              <p className="text-sm text-muted-foreground">স্বচ্ছতা ও সততার সাথে কাজ করি</p>
            </div>
            <div className="p-6 rounded-2xl bg-card shadow-card text-center">
              <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-warning" />
              </div>
              <h3 className="font-semibold mb-2">উদ্ভাবন</h3>
              <p className="text-sm text-muted-foreground">প্রযুক্তি দিয়ে সমস্যার সমাধান</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">আমাদের সাথে যুক্ত হন</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            গ্রাহক, পার্টনার বা রাইডার - যেকোনোভাবে আমাদের পরিবারে যোগ দিন
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="glass" size="lg">
              <Link to="/become-partner">
                পার্টনার হন
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                যোগাযোগ করুন
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
