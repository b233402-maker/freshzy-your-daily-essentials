// Dummy data for Freshzy platform
// All text is in Bangla (Bengali) for Bangladesh users

export interface Vendor {
  id: string;
  name: string;
  nameEn: string;
  type: 'salon' | 'laundry';
  image: string;
  rating: number;
  reviewCount: number;
  distance: string;
  deliveryTime?: string;
  isOpen: boolean;
  isFeatured?: boolean;
  categories: string[];
  address: string;
  phone: string;
  queueCount?: number;
  urgentQueueCount?: number;
}

export interface Service {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration?: string;
  image?: string;
  category: string;
  isPopular?: boolean;
  isUrgent?: boolean;
}

export interface CartItem extends Service {
  quantity: number;
  vendorId: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

// Salon Services Data
export const salonServices: Service[] = [
  {
    id: 's1',
    name: 'হেয়ারকাট (পুরুষ)',
    nameEn: 'Haircut (Men)',
    description: 'প্রফেশনাল হেয়ারকাট সার্ভিস',
    price: 150,
    duration: '30 মিনিট',
    category: 'হেয়ার',
    isPopular: true,
  },
  {
    id: 's2',
    name: 'হেয়ারকাট (মহিলা)',
    nameEn: 'Haircut (Women)',
    description: 'ফ্যাশনেবল লেডিস হেয়ারকাট',
    price: 300,
    duration: '45 মিনিট',
    category: 'হেয়ার',
    isPopular: true,
  },
  {
    id: 's3',
    name: 'শেভিং',
    nameEn: 'Shaving',
    description: 'ক্লিন শেভ উইথ হট টাওয়েল',
    price: 80,
    duration: '20 মিনিট',
    category: 'শেভিং',
  },
  {
    id: 's4',
    name: 'ফেসিয়াল',
    nameEn: 'Facial',
    description: 'প্রিমিয়াম ফেসিয়াল ট্রিটমেন্ট',
    price: 500,
    originalPrice: 700,
    duration: '60 মিনিট',
    category: 'স্কিনকেয়ার',
    isPopular: true,
  },
  {
    id: 's5',
    name: 'হেয়ার স্পা',
    nameEn: 'Hair Spa',
    description: 'ডিপ কন্ডিশনিং হেয়ার স্পা',
    price: 800,
    duration: '90 মিনিট',
    category: 'হেয়ার',
  },
  {
    id: 's6',
    name: 'ম্যানিকিউর',
    nameEn: 'Manicure',
    description: 'নেইল কেয়ার ও পলিশ',
    price: 250,
    duration: '30 মিনিট',
    category: 'নেইল',
  },
  {
    id: 's7',
    name: 'পেডিকিউর',
    nameEn: 'Pedicure',
    description: 'ফুল পেডিকিউর সার্ভিস',
    price: 350,
    duration: '45 মিনিট',
    category: 'নেইল',
  },
  {
    id: 's8',
    name: 'ব্রাইডাল প্যাকেজ',
    nameEn: 'Bridal Package',
    description: 'কমপ্লিট ব্রাইডাল মেকআপ ও হেয়ার',
    price: 15000,
    originalPrice: 20000,
    duration: '4 ঘন্টা',
    category: 'প্যাকেজ',
    isPopular: true,
  },
];

// Laundry Services Data
export const laundryServices: Service[] = [
  {
    id: 'l1',
    name: 'ওয়াশ অ্যান্ড ফোল্ড',
    nameEn: 'Wash & Fold',
    description: 'প্রতি কেজি - নরমাল ওয়াশ',
    price: 50,
    category: 'ওয়াশ',
    isPopular: true,
  },
  {
    id: 'l2',
    name: 'ড্রাই ক্লিন (শার্ট)',
    nameEn: 'Dry Clean (Shirt)',
    description: 'প্রফেশনাল ড্রাই ক্লিনিং',
    price: 80,
    category: 'ড্রাই ক্লিন',
  },
  {
    id: 'l3',
    name: 'ড্রাই ক্লিন (স্যুট)',
    nameEn: 'Dry Clean (Suit)',
    description: '২ পিস স্যুট ড্রাই ক্লিন',
    price: 350,
    category: 'ড্রাই ক্লিন',
    isPopular: true,
  },
  {
    id: 'l4',
    name: 'আয়রন (শার্ট)',
    nameEn: 'Iron (Shirt)',
    description: 'স্টিম আয়রন',
    price: 25,
    category: 'আয়রন',
  },
  {
    id: 'l5',
    name: 'আয়রন (প্যান্ট)',
    nameEn: 'Iron (Pant)',
    description: 'প্রফেশনাল আয়রন',
    price: 30,
    category: 'আয়রন',
  },
  {
    id: 'l6',
    name: 'বেডশিট ওয়াশ',
    nameEn: 'Bedsheet Wash',
    description: 'ডাবল বেড সাইজ',
    price: 120,
    category: 'হাউসহোল্ড',
  },
  {
    id: 'l7',
    name: 'কম্বল ওয়াশ',
    nameEn: 'Blanket Wash',
    description: 'হেভি ব্ল্যাংকেট ক্লিনিং',
    price: 250,
    category: 'হাউসহোল্ড',
  },
  {
    id: 'l8',
    name: 'এক্সপ্রেস সার্ভিস',
    nameEn: 'Express Service',
    description: '৬ ঘন্টায় ডেলিভারি',
    price: 100,
    category: 'এক্সপ্রেস',
    isUrgent: true,
    isPopular: true,
  },
];

// Vendors Data
export const vendors: Vendor[] = [
  {
    id: 'v1',
    name: 'রয়্যাল সেলুন',
    nameEn: 'Royal Salon',
    type: 'salon',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    rating: 4.8,
    reviewCount: 245,
    distance: '0.5 কি.মি.',
    isOpen: true,
    isFeatured: true,
    categories: ['হেয়ারকাট', 'ফেসিয়াল', 'স্পা'],
    address: 'গুলশান-১, ঢাকা',
    phone: '+880 1712-345678',
    queueCount: 3,
    urgentQueueCount: 1,
  },
  {
    id: 'v2',
    name: 'ক্লিন ওয়াশ লন্ড্রি',
    nameEn: 'Clean Wash Laundry',
    type: 'laundry',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400',
    rating: 4.6,
    reviewCount: 189,
    distance: '0.8 কি.মি.',
    deliveryTime: '৪৫-৬০ মিনিট',
    isOpen: true,
    isFeatured: true,
    categories: ['ওয়াশ', 'ড্রাই ক্লিন', 'আয়রন'],
    address: 'বনানী, ঢাকা',
    phone: '+880 1812-345678',
  },
  {
    id: 'v3',
    name: 'বিউটি পয়েন্ট',
    nameEn: 'Beauty Point',
    type: 'salon',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    rating: 4.5,
    reviewCount: 156,
    distance: '1.2 কি.মি.',
    isOpen: true,
    categories: ['মেকআপ', 'হেয়ার', 'নেইল'],
    address: 'উত্তরা, ঢাকা',
    phone: '+880 1912-345678',
    queueCount: 5,
    urgentQueueCount: 2,
  },
  {
    id: 'v4',
    name: 'ফ্রেশ লন্ড্রি সার্ভিস',
    nameEn: 'Fresh Laundry Service',
    type: 'laundry',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400',
    rating: 4.7,
    reviewCount: 210,
    distance: '0.3 কি.মি.',
    deliveryTime: '৩০-৪৫ মিনিট',
    isOpen: true,
    isFeatured: true,
    categories: ['এক্সপ্রেস', 'ওয়াশ', 'আয়রন'],
    address: 'ধানমন্ডি, ঢাকা',
    phone: '+880 1612-345678',
  },
  {
    id: 'v5',
    name: 'স্টাইল জোন',
    nameEn: 'Style Zone',
    type: 'salon',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=400',
    rating: 4.4,
    reviewCount: 98,
    distance: '2.0 কি.মি.',
    isOpen: false,
    categories: ['হেয়ারকাট', 'কালারিং', 'স্টাইলিং'],
    address: 'মিরপুর, ঢাকা',
    phone: '+880 1512-345678',
    queueCount: 0,
    urgentQueueCount: 0,
  },
  {
    id: 'v6',
    name: 'স্পার্কল ক্লিন',
    nameEn: 'Sparkle Clean',
    type: 'laundry',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400',
    rating: 4.3,
    reviewCount: 134,
    distance: '1.5 কি.মি.',
    deliveryTime: '১-২ ঘন্টা',
    isOpen: true,
    categories: ['ড্রাই ক্লিন', 'প্রিমিয়াম'],
    address: 'মোহাম্মদপুর, ঢাকা',
    phone: '+880 1412-345678',
  },
  {
    id: 'v7',
    name: 'গ্ল্যামার স্পা',
    nameEn: 'Glamour Spa',
    type: 'salon',
    image: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=400',
    rating: 4.9,
    reviewCount: 312,
    distance: '0.7 কি.মি.',
    isOpen: true,
    isFeatured: true,
    categories: ['স্পা', 'ম্যাসাজ', 'স্কিনকেয়ার'],
    address: 'বারিধারা, ঢাকা',
    phone: '+880 1312-345678',
    queueCount: 7,
    urgentQueueCount: 3,
  },
  {
    id: 'v8',
    name: 'কুইক ওয়াশ',
    nameEn: 'Quick Wash',
    type: 'laundry',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400',
    rating: 4.2,
    reviewCount: 87,
    distance: '0.4 কি.মি.',
    deliveryTime: '২০-৩০ মিনিট',
    isOpen: true,
    categories: ['এক্সপ্রেস', 'বাজেট'],
    address: 'কাকরাইল, ঢাকা',
    phone: '+880 1212-345678',
  },
];

// Reviews Data
export const reviews: Review[] = [
  {
    id: 'r1',
    userName: 'রাহিম আহমেদ',
    rating: 5,
    comment: 'অসাধারণ সার্ভিস! সময়মতো কাজ হয়েছে এবং কোয়ালিটি খুবই ভালো।',
    date: '২ দিন আগে',
  },
  {
    id: 'r2',
    userName: 'ফাতেমা খান',
    rating: 4,
    comment: 'ভালো সার্ভিস। একটু দাম বেশি কিন্তু কাজ সুন্দর।',
    date: '১ সপ্তাহ আগে',
  },
  {
    id: 'r3',
    userName: 'করিম সাহেব',
    rating: 5,
    comment: 'রেগুলার কাস্টমার। প্রতিবার সন্তুষ্ট হই।',
    date: '২ সপ্তাহ আগে',
  },
];

// Platform Stats
export const platformStats = {
  totalVendors: '৫০০+',
  totalUsers: '১০,০০০+',
  totalOrders: '৫০,০০০+',
  cities: '১০+',
};

// How It Works Steps
export const howItWorksSteps = {
  salon: [
    {
      step: 1,
      title: 'সেলুন খুঁজুন',
      titleEn: 'Find Salon',
      description: 'আপনার কাছের সেলুন খুঁজে বের করুন',
      icon: 'search',
    },
    {
      step: 2,
      title: 'সার্ভিস সিলেক্ট করুন',
      titleEn: 'Select Service',
      description: 'পছন্দের সার্ভিস বেছে নিন',
      icon: 'list',
    },
    {
      step: 3,
      title: 'বুকিং করুন',
      titleEn: 'Book Appointment',
      description: 'সময় বেছে বুকিং কনফার্ম করুন',
      icon: 'calendar',
    },
    {
      step: 4,
      title: 'সার্ভিস নিন',
      titleEn: 'Get Service',
      description: 'সেলুনে গিয়ে সার্ভিস উপভোগ করুন',
      icon: 'check',
    },
  ],
  laundry: [
    {
      step: 1,
      title: 'অর্ডার দিন',
      titleEn: 'Place Order',
      description: 'আপনার লন্ড্রি সার্ভিস সিলেক্ট করুন',
      icon: 'shirt',
    },
    {
      step: 2,
      title: 'পিকআপ',
      titleEn: 'Pickup',
      description: 'রাইডার আপনার কাপড় নিয়ে যাবে',
      icon: 'truck',
    },
    {
      step: 3,
      title: 'প্রসেসিং',
      titleEn: 'Processing',
      description: 'প্রফেশনাল ক্লিনিং হবে',
      icon: 'wash',
    },
    {
      step: 4,
      title: 'ডেলিভারি',
      titleEn: 'Delivery',
      description: 'পরিষ্কার কাপড় বাসায় পৌঁছে যাবে',
      icon: 'home',
    },
  ],
};

// Vendor Benefits
export const vendorBenefits = [
  {
    title: 'বেশি কাস্টমার পান',
    titleEn: 'Get More Customers',
    description: 'হাজার হাজার ইউজার আপনার সার্ভিস দেখবে',
    icon: 'users',
  },
  {
    title: 'সহজ ম্যানেজমেন্ট',
    titleEn: 'Easy Management',
    description: 'একটি ড্যাশবোর্ডে সব কিছু ম্যানেজ করুন',
    icon: 'dashboard',
  },
  {
    title: 'দ্রুত পেমেন্ট',
    titleEn: 'Fast Payments',
    description: 'প্রতি সপ্তাহে পেমেন্ট পান',
    icon: 'money',
  },
  {
    title: 'ফ্রি মার্কেটিং',
    titleEn: 'Free Marketing',
    description: 'আমরা আপনার ব্যবসা প্রমোট করব',
    icon: 'megaphone',
  },
];

// Navigation Items
export const navItems = [
  { name: 'সার্ভিস', nameEn: 'Services', href: '/vendors' },
  { name: 'লন্ড্রি', nameEn: 'Laundry', href: '/vendors?type=laundry' },
  { name: 'সেলুন', nameEn: 'Salon', href: '/vendors?type=salon' },
  { name: 'আয় করুন', nameEn: 'Earn', href: '/become-partner' },
  { name: 'সাহায্য', nameEn: 'Help', href: '/help' },
];

// Footer Links
export const footerLinks = {
  company: [
    { name: 'আমাদের সম্পর্কে', nameEn: 'About Us', href: '/about' },
    { name: 'ক্যারিয়ার', nameEn: 'Careers', href: '/careers' },
    { name: 'ব্লগ', nameEn: 'Blog', href: '/blog' },
  ],
  partners: [
    { name: 'পার্টনার হন', nameEn: 'Become Partner', href: '/become-partner' },
    { name: 'রাইডার হন', nameEn: 'Become Rider', href: '/become-rider' },
    { name: 'পার্টনার সাপোর্ট', nameEn: 'Partner Support', href: '/partner-support' },
  ],
  legal: [
    { name: 'প্রাইভেসি পলিসি', nameEn: 'Privacy Policy', href: '/privacy' },
    { name: 'টার্মস অফ সার্ভিস', nameEn: 'Terms of Service', href: '/terms' },
    { name: 'রিফান্ড পলিসি', nameEn: 'Refund Policy', href: '/refund' },
  ],
  support: [
    { name: 'হেল্প সেন্টার', nameEn: 'Help Center', href: '/help' },
    { name: 'যোগাযোগ', nameEn: 'Contact', href: '/contact' },
    { name: 'FAQ', nameEn: 'FAQ', href: '/faq' },
  ],
};
