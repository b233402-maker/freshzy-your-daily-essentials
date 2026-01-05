export interface RiderProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: string;
  rating: number;
  totalDeliveries: number;
  joinDate: string;
  vehicleType: 'motorcycle' | 'bicycle' | 'car';
  vehicleNumber: string;
  isOnline: boolean;
  currentLocation: {
    lat: number;
    lng: number;
    address: string;
  };
}

export interface DeliveryOrder {
  id: string;
  orderNumber: string;
  status: 'pending' | 'accepted' | 'picked_up' | 'on_the_way' | 'delivered' | 'cancelled';
  customer: {
    name: string;
    phone: string;
    address: string;
    lat: number;
    lng: number;
  };
  vendor: {
    name: string;
    phone: string;
    address: string;
    lat: number;
    lng: number;
    image: string;
  };
  items: {
    name: string;
    quantity: number;
  }[];
  totalAmount: number;
  deliveryFee: number;
  tip: number;
  distance: number;
  estimatedTime: number;
  createdAt: string;
  pickedUpAt?: string;
  deliveredAt?: string;
  paymentMethod: 'cash' | 'online';
  isPaid: boolean;
}

export interface EarningsData {
  date: string;
  deliveries: number;
  earnings: number;
  tips: number;
  bonus: number;
}

export interface RiderStats {
  todayEarnings: number;
  todayDeliveries: number;
  weeklyEarnings: number;
  weeklyDeliveries: number;
  monthlyEarnings: number;
  monthlyDeliveries: number;
  totalEarnings: number;
  pendingPayout: number;
  rating: number;
  acceptanceRate: number;
}

export const riderProfile: RiderProfile = {
  id: 'rider-1',
  name: 'রহিম উদ্দিন',
  phone: '+880 1712-345678',
  email: 'rahim@freshzy.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  rating: 4.8,
  totalDeliveries: 1247,
  joinDate: '2023-06-15',
  vehicleType: 'motorcycle',
  vehicleNumber: 'ঢাকা মেট্রো ক-১২৩৪',
  isOnline: true,
  currentLocation: {
    lat: 23.8103,
    lng: 90.4125,
    address: 'গুলশান-১, ঢাকা'
  }
};

export const deliveryOrders: DeliveryOrder[] = [
  {
    id: 'del-1',
    orderNumber: 'FRZ-2024-001',
    status: 'accepted',
    customer: {
      name: 'আহমেদ হাসান',
      phone: '+880 1811-111111',
      address: 'বাসা ১২, রোড ৫, বনানী, ঢাকা',
      lat: 23.7937,
      lng: 90.4066
    },
    vendor: {
      name: 'স্টাইল কাট সেলুন',
      phone: '+880 1711-222222',
      address: 'গুলশান-২, ঢাকা',
      lat: 23.7925,
      lng: 90.4078,
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=300'
    },
    items: [
      { name: 'হেয়ার সিরাম', quantity: 2 },
      { name: 'শেভিং কিট', quantity: 1 }
    ],
    totalAmount: 850,
    deliveryFee: 60,
    tip: 20,
    distance: 2.5,
    estimatedTime: 15,
    createdAt: '2024-01-15T10:30:00',
    paymentMethod: 'cash',
    isPaid: false
  },
  {
    id: 'del-2',
    orderNumber: 'FRZ-2024-002',
    status: 'picked_up',
    customer: {
      name: 'ফাতিমা বেগম',
      phone: '+880 1911-333333',
      address: 'ফ্ল্যাট ৪বি, উত্তরা সেক্টর ৭, ঢাকা',
      lat: 23.8759,
      lng: 90.3795
    },
    vendor: {
      name: 'ক্লিন ওয়াশ লন্ড্রি',
      phone: '+880 1811-444444',
      address: 'উত্তরা সেক্টর ৩, ঢাকা',
      lat: 23.8687,
      lng: 90.3986,
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=300'
    },
    items: [
      { name: 'শার্ট ওয়াশ ও আয়রন', quantity: 5 },
      { name: 'প্যান্ট ড্রাই ক্লিন', quantity: 3 }
    ],
    totalAmount: 650,
    deliveryFee: 50,
    tip: 30,
    distance: 3.2,
    estimatedTime: 20,
    createdAt: '2024-01-15T09:00:00',
    pickedUpAt: '2024-01-15T10:45:00',
    paymentMethod: 'online',
    isPaid: true
  },
  {
    id: 'del-3',
    orderNumber: 'FRZ-2024-003',
    status: 'pending',
    customer: {
      name: 'করিম সাহেব',
      phone: '+880 1611-555555',
      address: 'মিরপুর-১০, ঢাকা',
      lat: 23.8069,
      lng: 90.3687
    },
    vendor: {
      name: 'বিউটি পয়েন্ট স্পা',
      phone: '+880 1511-666666',
      address: 'মিরপুর-২, ঢাকা',
      lat: 23.8041,
      lng: 90.3529,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300'
    },
    items: [
      { name: 'স্পা কিট', quantity: 1 },
      { name: 'ম্যাসাজ অয়েল', quantity: 2 }
    ],
    totalAmount: 1200,
    deliveryFee: 70,
    tip: 0,
    distance: 4.1,
    estimatedTime: 25,
    createdAt: '2024-01-15T11:00:00',
    paymentMethod: 'cash',
    isPaid: false
  },
  {
    id: 'del-4',
    orderNumber: 'FRZ-2024-004',
    status: 'delivered',
    customer: {
      name: 'সুমাইয়া আক্তার',
      phone: '+880 1711-777777',
      address: 'ধানমন্ডি ২৭, ঢাকা',
      lat: 23.7465,
      lng: 90.3762
    },
    vendor: {
      name: 'গ্ল্যামার সেলুন',
      phone: '+880 1911-888888',
      address: 'ধানমন্ডি ১৫, ঢাকা',
      lat: 23.7461,
      lng: 90.3742,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300'
    },
    items: [
      { name: 'হেয়ার প্রোডাক্ট', quantity: 3 }
    ],
    totalAmount: 450,
    deliveryFee: 40,
    tip: 50,
    distance: 1.8,
    estimatedTime: 12,
    createdAt: '2024-01-15T08:00:00',
    pickedUpAt: '2024-01-15T08:30:00',
    deliveredAt: '2024-01-15T08:50:00',
    paymentMethod: 'online',
    isPaid: true
  },
  {
    id: 'del-5',
    orderNumber: 'FRZ-2024-005',
    status: 'delivered',
    customer: {
      name: 'জাহিদ হোসেন',
      phone: '+880 1811-999999',
      address: 'মোহাম্মদপুর, ঢাকা',
      lat: 23.7662,
      lng: 90.3589
    },
    vendor: {
      name: 'ফ্রেশ লন্ড্রি',
      phone: '+880 1611-000000',
      address: 'মোহাম্মদপুর টাউন হল, ঢাকা',
      lat: 23.7654,
      lng: 90.3601,
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=300'
    },
    items: [
      { name: 'বেডশিট ওয়াশ', quantity: 2 },
      { name: 'কম্বল ড্রাই ক্লিন', quantity: 1 }
    ],
    totalAmount: 550,
    deliveryFee: 45,
    tip: 25,
    distance: 2.0,
    estimatedTime: 14,
    createdAt: '2024-01-14T14:00:00',
    pickedUpAt: '2024-01-14T14:30:00',
    deliveredAt: '2024-01-14T14:55:00',
    paymentMethod: 'cash',
    isPaid: true
  }
];

export const weeklyEarnings: EarningsData[] = [
  { date: 'শনি', deliveries: 12, earnings: 720, tips: 150, bonus: 100 },
  { date: 'রবি', deliveries: 15, earnings: 900, tips: 200, bonus: 150 },
  { date: 'সোম', deliveries: 10, earnings: 600, tips: 120, bonus: 0 },
  { date: 'মঙ্গল', deliveries: 14, earnings: 840, tips: 180, bonus: 100 },
  { date: 'বুধ', deliveries: 18, earnings: 1080, tips: 250, bonus: 200 },
  { date: 'বৃহস্পতি', deliveries: 16, earnings: 960, tips: 220, bonus: 150 },
  { date: 'শুক্র', deliveries: 8, earnings: 480, tips: 100, bonus: 0 }
];

export const riderStats: RiderStats = {
  todayEarnings: 580,
  todayDeliveries: 8,
  weeklyEarnings: 5580,
  weeklyDeliveries: 93,
  monthlyEarnings: 22350,
  monthlyDeliveries: 372,
  totalEarnings: 156780,
  pendingPayout: 5580,
  rating: 4.8,
  acceptanceRate: 94
};

export const deliveryStatusLabels: Record<string, string> = {
  pending: 'অপেক্ষমান',
  accepted: 'গৃহীত',
  picked_up: 'পিকআপ সম্পন্ন',
  on_the_way: 'পথে আছে',
  delivered: 'ডেলিভারি সম্পন্ন',
  cancelled: 'বাতিল'
};

export const deliveryStatusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  accepted: 'bg-blue-100 text-blue-800',
  picked_up: 'bg-purple-100 text-purple-800',
  on_the_way: 'bg-orange-100 text-orange-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

export const getActiveDeliveries = () => 
  deliveryOrders.filter(o => ['pending', 'accepted', 'picked_up', 'on_the_way'].includes(o.status));

export const getCompletedDeliveries = () => 
  deliveryOrders.filter(o => o.status === 'delivered');
