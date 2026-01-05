// Admin Dashboard Data

export interface AdminStats {
  totalUsers: number;
  totalVendors: number;
  totalRiders: number;
  totalOrders: number;
  todayOrders: number;
  todayRevenue: number;
  monthlyRevenue: number;
  platformCommission: number;
  activeUsers: number;
  pendingVendors: number;
  pendingRiders: number;
}

export interface PlatformUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: 'customer' | 'vendor' | 'rider' | 'admin';
  status: 'active' | 'inactive' | 'suspended' | 'pending';
  createdAt: string;
  lastLogin?: string;
  totalOrders?: number;
  totalSpent?: number;
}

export interface PlatformVendor {
  id: string;
  name: string;
  type: 'salon' | 'laundry';
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  image: string;
  rating: number;
  reviewCount: number;
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  totalOrders: number;
  totalRevenue: number;
  commissionRate: number;
  createdAt: string;
  isVerified: boolean;
}

export interface PlatformRider {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  vehicleType: 'motorcycle' | 'bicycle' | 'car';
  vehicleNumber: string;
  status: 'active' | 'inactive' | 'pending' | 'suspended';
  rating: number;
  totalDeliveries: number;
  totalEarnings: number;
  createdAt: string;
  isVerified: boolean;
}

export interface RevenueData {
  date: string;
  revenue: number;
  orders: number;
  commission: number;
}

export interface SystemSetting {
  id: string;
  key: string;
  label: string;
  value: string | number | boolean;
  type: 'text' | 'number' | 'boolean' | 'select';
  options?: string[];
  description: string;
  category: 'general' | 'payment' | 'delivery' | 'notification';
}

export const adminStats: AdminStats = {
  totalUsers: 15420,
  totalVendors: 342,
  totalRiders: 156,
  totalOrders: 45670,
  todayOrders: 234,
  todayRevenue: 125600,
  monthlyRevenue: 3456000,
  platformCommission: 345600,
  activeUsers: 8934,
  pendingVendors: 12,
  pendingRiders: 8,
};

export const platformUsers: PlatformUser[] = [
  {
    id: 'user-1',
    name: 'রহিম উদ্দিন',
    email: 'rahim@email.com',
    phone: '+880 1712-345678',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    role: 'customer',
    status: 'active',
    createdAt: '2024-01-15',
    lastLogin: '2024-01-20',
    totalOrders: 24,
    totalSpent: 12500,
  },
  {
    id: 'user-2',
    name: 'ফাতিমা বেগম',
    email: 'fatima@email.com',
    phone: '+880 1911-234567',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    role: 'customer',
    status: 'active',
    createdAt: '2024-01-10',
    lastLogin: '2024-01-19',
    totalOrders: 18,
    totalSpent: 8900,
  },
  {
    id: 'user-3',
    name: 'করিম সাহেব',
    email: 'karim@email.com',
    phone: '+880 1811-345678',
    role: 'customer',
    status: 'suspended',
    createdAt: '2023-12-20',
    totalOrders: 5,
    totalSpent: 2300,
  },
  {
    id: 'user-4',
    name: 'সাদিয়া ইসলাম',
    email: 'sadia@email.com',
    phone: '+880 1611-456789',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    role: 'customer',
    status: 'active',
    createdAt: '2024-01-05',
    lastLogin: '2024-01-20',
    totalOrders: 32,
    totalSpent: 15600,
  },
  {
    id: 'user-5',
    name: 'জাহিদ হোসেন',
    email: 'zahid@email.com',
    phone: '+880 1511-567890',
    role: 'customer',
    status: 'pending',
    createdAt: '2024-01-19',
    totalOrders: 0,
    totalSpent: 0,
  },
];

export const platformVendors: PlatformVendor[] = [
  {
    id: 'vendor-1',
    name: 'স্টাইল কাট সেলুন',
    type: 'salon',
    ownerName: 'মোহাম্মদ আলী',
    email: 'stylecut@email.com',
    phone: '+880 1711-222222',
    address: 'গুলশান-২, ঢাকা',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=300',
    rating: 4.8,
    reviewCount: 234,
    status: 'active',
    totalOrders: 1245,
    totalRevenue: 456000,
    commissionRate: 10,
    createdAt: '2023-06-15',
    isVerified: true,
  },
  {
    id: 'vendor-2',
    name: 'ক্লিন ওয়াশ লন্ড্রি',
    type: 'laundry',
    ownerName: 'আব্দুল করিম',
    email: 'cleanwash@email.com',
    phone: '+880 1811-333333',
    address: 'উত্তরা সেক্টর ৩, ঢাকা',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=300',
    rating: 4.6,
    reviewCount: 189,
    status: 'active',
    totalOrders: 987,
    totalRevenue: 325000,
    commissionRate: 12,
    createdAt: '2023-08-20',
    isVerified: true,
  },
  {
    id: 'vendor-3',
    name: 'বিউটি পয়েন্ট স্পা',
    type: 'salon',
    ownerName: 'নাজমা আক্তার',
    email: 'beautypoint@email.com',
    phone: '+880 1911-444444',
    address: 'ধানমন্ডি ২৭, ঢাকা',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300',
    rating: 4.9,
    reviewCount: 312,
    status: 'active',
    totalOrders: 1567,
    totalRevenue: 678000,
    commissionRate: 10,
    createdAt: '2023-05-10',
    isVerified: true,
  },
  {
    id: 'vendor-4',
    name: 'ফ্রেশ লন্ড্রি সার্ভিস',
    type: 'laundry',
    ownerName: 'রফিকুল ইসলাম',
    email: 'freshlaundry@email.com',
    phone: '+880 1611-555555',
    address: 'মিরপুর-১০, ঢাকা',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=300',
    rating: 4.3,
    reviewCount: 98,
    status: 'pending',
    totalOrders: 0,
    totalRevenue: 0,
    commissionRate: 12,
    createdAt: '2024-01-18',
    isVerified: false,
  },
];

export const platformRiders: PlatformRider[] = [
  {
    id: 'rider-1',
    name: 'রহিম উদ্দিন',
    email: 'rahim.rider@email.com',
    phone: '+880 1712-345678',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    vehicleType: 'motorcycle',
    vehicleNumber: 'ঢাকা মেট্রো ক-১২৩৪',
    status: 'active',
    rating: 4.8,
    totalDeliveries: 1247,
    totalEarnings: 156780,
    createdAt: '2023-06-15',
    isVerified: true,
  },
  {
    id: 'rider-2',
    name: 'সোহেল রানা',
    email: 'sohel.rider@email.com',
    phone: '+880 1811-234567',
    vehicleType: 'motorcycle',
    vehicleNumber: 'ঢাকা মেট্রো খ-৫৬৭৮',
    status: 'active',
    rating: 4.6,
    totalDeliveries: 892,
    totalEarnings: 112340,
    createdAt: '2023-08-20',
    isVerified: true,
  },
  {
    id: 'rider-3',
    name: 'আমিনুল ইসলাম',
    email: 'aminul.rider@email.com',
    phone: '+880 1911-345678',
    vehicleType: 'bicycle',
    vehicleNumber: 'N/A',
    status: 'pending',
    rating: 0,
    totalDeliveries: 0,
    totalEarnings: 0,
    createdAt: '2024-01-19',
    isVerified: false,
  },
];

export const monthlyRevenueData: RevenueData[] = [
  { date: 'জানুয়ারি', revenue: 2850000, orders: 4520, commission: 285000 },
  { date: 'ফেব্রুয়ারি', revenue: 3120000, orders: 4890, commission: 312000 },
  { date: 'মার্চ', revenue: 2980000, orders: 4670, commission: 298000 },
  { date: 'এপ্রিল', revenue: 3450000, orders: 5230, commission: 345000 },
  { date: 'মে', revenue: 3680000, orders: 5560, commission: 368000 },
  { date: 'জুন', revenue: 3210000, orders: 4980, commission: 321000 },
  { date: 'জুলাই', revenue: 3890000, orders: 5890, commission: 389000 },
  { date: 'আগস্ট', revenue: 4120000, orders: 6210, commission: 412000 },
  { date: 'সেপ্টেম্বর', revenue: 3780000, orders: 5720, commission: 378000 },
  { date: 'অক্টোবর', revenue: 4350000, orders: 6580, commission: 435000 },
  { date: 'নভেম্বর', revenue: 4680000, orders: 7050, commission: 468000 },
  { date: 'ডিসেম্বর', revenue: 3456000, orders: 5230, commission: 345600 },
];

export const weeklyRevenueData: RevenueData[] = [
  { date: 'শনি', revenue: 125600, orders: 234, commission: 12560 },
  { date: 'রবি', revenue: 142300, orders: 267, commission: 14230 },
  { date: 'সোম', revenue: 98700, orders: 189, commission: 9870 },
  { date: 'মঙ্গল', revenue: 134500, orders: 245, commission: 13450 },
  { date: 'বুধ', revenue: 156800, orders: 289, commission: 15680 },
  { date: 'বৃহস্পতি', revenue: 167200, orders: 312, commission: 16720 },
  { date: 'শুক্র', revenue: 112400, orders: 198, commission: 11240 },
];

export const systemSettings: SystemSetting[] = [
  {
    id: 'setting-1',
    key: 'platform_name',
    label: 'প্ল্যাটফর্ম নাম',
    value: 'Freshzy',
    type: 'text',
    description: 'প্ল্যাটফর্মের প্রদর্শিত নাম',
    category: 'general',
  },
  {
    id: 'setting-2',
    key: 'default_commission',
    label: 'ডিফল্ট কমিশন (%)',
    value: 10,
    type: 'number',
    description: 'নতুন ভেন্ডরদের জন্য ডিফল্ট কমিশন রেট',
    category: 'payment',
  },
  {
    id: 'setting-3',
    key: 'min_order_amount',
    label: 'সর্বনিম্ন অর্ডার পরিমাণ (৳)',
    value: 100,
    type: 'number',
    description: 'অর্ডার করার জন্য সর্বনিম্ন পরিমাণ',
    category: 'payment',
  },
  {
    id: 'setting-4',
    key: 'delivery_fee',
    label: 'ডেলিভারি ফি (৳)',
    value: 50,
    type: 'number',
    description: 'প্রতি ডেলিভারির জন্য চার্জ',
    category: 'delivery',
  },
  {
    id: 'setting-5',
    key: 'free_delivery_threshold',
    label: 'ফ্রি ডেলিভারি থ্রেশহোল্ড (৳)',
    value: 500,
    type: 'number',
    description: 'এই পরিমাণের উপরে ফ্রি ডেলিভারি',
    category: 'delivery',
  },
  {
    id: 'setting-6',
    key: 'email_notifications',
    label: 'ইমেইল নোটিফিকেশন',
    value: true,
    type: 'boolean',
    description: 'অর্ডার আপডেটের জন্য ইমেইল পাঠান',
    category: 'notification',
  },
  {
    id: 'setting-7',
    key: 'sms_notifications',
    label: 'SMS নোটিফিকেশন',
    value: true,
    type: 'boolean',
    description: 'অর্ডার আপডেটের জন্য SMS পাঠান',
    category: 'notification',
  },
  {
    id: 'setting-8',
    key: 'maintenance_mode',
    label: 'মেইনটেন্যান্স মোড',
    value: false,
    type: 'boolean',
    description: 'প্ল্যাটফর্ম মেইনটেন্যান্সে রাখুন',
    category: 'general',
  },
];

export const userStatusLabels: Record<string, string> = {
  active: 'সক্রিয়',
  inactive: 'নিষ্ক্রিয়',
  suspended: 'স্থগিত',
  pending: 'অপেক্ষমান',
};

export const userStatusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-gray-100 text-gray-800',
  suspended: 'bg-red-100 text-red-800',
  pending: 'bg-yellow-100 text-yellow-800',
};

export const roleLabels: Record<string, string> = {
  customer: 'গ্রাহক',
  vendor: 'ভেন্ডর',
  rider: 'রাইডার',
  admin: 'অ্যাডমিন',
};
