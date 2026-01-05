// Owner Dashboard Data

export interface OwnerVendor {
  id: string;
  name: string;
  type: 'salon' | 'laundry';
  image: string;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  address: string;
  phone: string;
  createdAt: string;
}

export interface OwnerService {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration?: string;
  category: string;
  isActive: boolean;
  isPopular?: boolean;
  ordersCount: number;
}

export interface OwnerOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerAvatar?: string;
  items: { name: string; quantity: number; price: number }[];
  status: 'pending' | 'confirmed' | 'in_progress' | 'ready' | 'completed' | 'cancelled';
  totalAmount: number;
  paymentMethod: 'cod' | 'online';
  paymentStatus: 'pending' | 'paid';
  createdAt: string;
  scheduledTime?: string;
  queuePosition?: number;
  isUrgent?: boolean;
  notes?: string;
}

export interface QueueItem {
  id: string;
  orderId: string;
  customerName: string;
  serviceName: string;
  position: number;
  estimatedTime: string;
  status: 'waiting' | 'in_service' | 'completed';
  isUrgent: boolean;
  startTime?: string;
}

export interface RevenueData {
  date: string;
  revenue: number;
  orders: number;
}

export interface OwnerStats {
  todayRevenue: number;
  todayOrders: number;
  pendingOrders: number;
  totalCustomers: number;
  avgRating: number;
  monthlyRevenue: number;
  monthlyOrders: number;
  growthPercent: number;
}

// Owner's Vendor
export const ownerVendor: OwnerVendor = {
  id: 'ov1',
  name: 'রয়্যাল সেলুন',
  type: 'salon',
  image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
  rating: 4.8,
  reviewCount: 245,
  isOpen: true,
  address: 'গুলশান-১, ঢাকা',
  phone: '+880 1712-345678',
  createdAt: 'জানুয়ারি ২০২৩',
};

// Owner's Services
export const ownerServices: OwnerService[] = [
  {
    id: 'os1',
    name: 'হেয়ারকাট (পুরুষ)',
    nameEn: 'Haircut (Men)',
    description: 'প্রফেশনাল হেয়ারকাট সার্ভিস',
    price: 150,
    duration: '30 মিনিট',
    category: 'হেয়ার',
    isActive: true,
    isPopular: true,
    ordersCount: 156,
  },
  {
    id: 'os2',
    name: 'হেয়ারকাট (মহিলা)',
    nameEn: 'Haircut (Women)',
    description: 'ফ্যাশনেবল লেডিস হেয়ারকাট',
    price: 300,
    duration: '45 মিনিট',
    category: 'হেয়ার',
    isActive: true,
    isPopular: true,
    ordersCount: 89,
  },
  {
    id: 'os3',
    name: 'শেভিং',
    nameEn: 'Shaving',
    description: 'ক্লিন শেভ উইথ হট টাওয়েল',
    price: 80,
    duration: '20 মিনিট',
    category: 'শেভিং',
    isActive: true,
    ordersCount: 234,
  },
  {
    id: 'os4',
    name: 'ফেসিয়াল',
    nameEn: 'Facial',
    description: 'প্রিমিয়াম ফেসিয়াল ট্রিটমেন্ট',
    price: 500,
    originalPrice: 700,
    duration: '60 মিনিট',
    category: 'স্কিনকেয়ার',
    isActive: true,
    isPopular: true,
    ordersCount: 67,
  },
  {
    id: 'os5',
    name: 'হেয়ার স্পা',
    nameEn: 'Hair Spa',
    description: 'ডিপ কন্ডিশনিং হেয়ার স্পা',
    price: 800,
    duration: '90 মিনিট',
    category: 'হেয়ার',
    isActive: false,
    ordersCount: 23,
  },
  {
    id: 'os6',
    name: 'ব্রাইডাল প্যাকেজ',
    nameEn: 'Bridal Package',
    description: 'কমপ্লিট ব্রাইডাল মেকআপ ও হেয়ার',
    price: 15000,
    originalPrice: 20000,
    duration: '4 ঘন্টা',
    category: 'প্যাকেজ',
    isActive: true,
    ordersCount: 12,
  },
];

// Owner's Orders
export const ownerOrders: OwnerOrder[] = [
  {
    id: 'oo1',
    orderNumber: 'FZ-2024-001250',
    customerName: 'রাহিম আহমেদ',
    customerPhone: '+880 1712-111111',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    items: [
      { name: 'হেয়ারকাট (পুরুষ)', quantity: 1, price: 150 },
      { name: 'শেভিং', quantity: 1, price: 80 },
    ],
    status: 'pending',
    totalAmount: 230,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    createdAt: '২ মিনিট আগে',
    scheduledTime: '১১:৩০ AM',
    queuePosition: 4,
    isUrgent: false,
  },
  {
    id: 'oo2',
    orderNumber: 'FZ-2024-001249',
    customerName: 'ফাতেমা খান',
    customerPhone: '+880 1812-222222',
    items: [
      { name: 'ফেসিয়াল', quantity: 1, price: 500 },
    ],
    status: 'in_progress',
    totalAmount: 500,
    paymentMethod: 'online',
    paymentStatus: 'paid',
    createdAt: '১৫ মিনিট আগে',
    scheduledTime: '১০:০০ AM',
    queuePosition: 1,
    isUrgent: true,
    notes: 'Please use organic products',
  },
  {
    id: 'oo3',
    orderNumber: 'FZ-2024-001248',
    customerName: 'করিম সাহেব',
    customerPhone: '+880 1912-333333',
    items: [
      { name: 'হেয়ারকাট (পুরুষ)', quantity: 1, price: 150 },
    ],
    status: 'confirmed',
    totalAmount: 150,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    createdAt: '২৫ মিনিট আগে',
    scheduledTime: '১১:০০ AM',
    queuePosition: 2,
    isUrgent: false,
  },
  {
    id: 'oo4',
    orderNumber: 'FZ-2024-001247',
    customerName: 'সুমাইয়া আক্তার',
    customerPhone: '+880 1612-444444',
    items: [
      { name: 'হেয়ারকাট (মহিলা)', quantity: 1, price: 300 },
      { name: 'ফেসিয়াল', quantity: 1, price: 500 },
    ],
    status: 'confirmed',
    totalAmount: 800,
    paymentMethod: 'online',
    paymentStatus: 'paid',
    createdAt: '৪০ মিনিট আগে',
    scheduledTime: '১১:১৫ AM',
    queuePosition: 3,
    isUrgent: false,
  },
  {
    id: 'oo5',
    orderNumber: 'FZ-2024-001246',
    customerName: 'মাহমুদ হাসান',
    customerPhone: '+880 1512-555555',
    items: [
      { name: 'হেয়ারকাট (পুরুষ)', quantity: 1, price: 150 },
      { name: 'শেভিং', quantity: 1, price: 80 },
    ],
    status: 'completed',
    totalAmount: 230,
    paymentMethod: 'cod',
    paymentStatus: 'paid',
    createdAt: '১ ঘন্টা আগে',
  },
  {
    id: 'oo6',
    orderNumber: 'FZ-2024-001245',
    customerName: 'নাজমুল ইসলাম',
    customerPhone: '+880 1412-666666',
    items: [
      { name: 'শেভিং', quantity: 1, price: 80 },
    ],
    status: 'completed',
    totalAmount: 80,
    paymentMethod: 'online',
    paymentStatus: 'paid',
    createdAt: '২ ঘন্টা আগে',
  },
];

// Queue Data
export const queueData: QueueItem[] = [
  {
    id: 'q1',
    orderId: 'oo2',
    customerName: 'ফাতেমা খান',
    serviceName: 'ফেসিয়াল',
    position: 1,
    estimatedTime: '৪৫ মিনিট বাকি',
    status: 'in_service',
    isUrgent: true,
    startTime: '১০:০০ AM',
  },
  {
    id: 'q2',
    orderId: 'oo3',
    customerName: 'করিম সাহেব',
    serviceName: 'হেয়ারকাট (পুরুষ)',
    position: 2,
    estimatedTime: '১ ঘন্টা ১৫ মিনিট',
    status: 'waiting',
    isUrgent: false,
  },
  {
    id: 'q3',
    orderId: 'oo4',
    customerName: 'সুমাইয়া আক্তার',
    serviceName: 'হেয়ারকাট + ফেসিয়াল',
    position: 3,
    estimatedTime: '২ ঘন্টা',
    status: 'waiting',
    isUrgent: false,
  },
  {
    id: 'q4',
    orderId: 'oo1',
    customerName: 'রাহিম আহমেদ',
    serviceName: 'হেয়ারকাট + শেভিং',
    position: 4,
    estimatedTime: '২ ঘন্টা ৩০ মিনিট',
    status: 'waiting',
    isUrgent: false,
  },
];

// Revenue Data for Charts
export const revenueData: RevenueData[] = [
  { date: 'সোম', revenue: 4500, orders: 12 },
  { date: 'মঙ্গল', revenue: 5200, orders: 15 },
  { date: 'বুধ', revenue: 3800, orders: 10 },
  { date: 'বৃহঃ', revenue: 6100, orders: 18 },
  { date: 'শুক্র', revenue: 7500, orders: 22 },
  { date: 'শনি', revenue: 8200, orders: 25 },
  { date: 'রবি', revenue: 5600, orders: 16 },
];

// Monthly Revenue Data
export const monthlyRevenueData: RevenueData[] = [
  { date: 'জানু', revenue: 125000, orders: 320 },
  { date: 'ফেব্রু', revenue: 142000, orders: 365 },
  { date: 'মার্চ', revenue: 138000, orders: 348 },
  { date: 'এপ্রি', revenue: 155000, orders: 392 },
  { date: 'মে', revenue: 168000, orders: 425 },
  { date: 'জুন', revenue: 178500, orders: 456 },
];

// Owner Stats
export const ownerStats: OwnerStats = {
  todayRevenue: 8200,
  todayOrders: 25,
  pendingOrders: 4,
  totalCustomers: 1250,
  avgRating: 4.8,
  monthlyRevenue: 178500,
  monthlyOrders: 456,
  growthPercent: 12.5,
};

// Order status labels
export const ownerOrderStatusLabels: Record<string, string> = {
  pending: 'অপেক্ষমান',
  confirmed: 'নিশ্চিত',
  in_progress: 'চলমান',
  ready: 'প্রস্তুত',
  completed: 'সম্পন্ন',
  cancelled: 'বাতিল',
};

// Service categories
export const serviceCategories = ['হেয়ার', 'শেভিং', 'স্কিনকেয়ার', 'নেইল', 'স্পা', 'প্যাকেজ'];
