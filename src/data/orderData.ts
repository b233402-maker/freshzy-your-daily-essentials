// Order and User related dummy data for dashboard

export type OrderStatus = 'pending' | 'confirmed' | 'in_progress' | 'ready' | 'picked_up' | 'delivered' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  orderNumber: string;
  type: 'salon' | 'laundry';
  vendorId: string;
  vendorName: string;
  vendorImage: string;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  paymentMethod: 'cod' | 'online';
  paymentStatus: 'pending' | 'paid';
  createdAt: string;
  scheduledDate?: string;
  scheduledTime?: string;
  deliveryAddress?: string;
  pickupTime?: string;
  deliveryTime?: string;
  riderName?: string;
  riderPhone?: string;
  queuePosition?: number;
  estimatedTime?: string;
  trackingSteps: TrackingStep[];
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  duration?: string;
}

export interface TrackingStep {
  status: string;
  title: string;
  description: string;
  time?: string;
  isCompleted: boolean;
  isCurrent: boolean;
}

export interface SavedAddress {
  id: string;
  label: string;
  address: string;
  area: string;
  city: string;
  phone: string;
  isDefault: boolean;
  type: 'home' | 'office' | 'other';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  joinedDate: string;
  totalOrders: number;
  loyaltyPoints: number;
}

// Dummy User Profile
export const userProfile: UserProfile = {
  id: 'u1',
  name: 'মোহাম্মদ রাশিদ',
  email: 'rashid@example.com',
  phone: '+880 1712-345678',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  joinedDate: 'জানুয়ারি ২০২৪',
  totalOrders: 24,
  loyaltyPoints: 450,
};

// Dummy Saved Addresses
export const savedAddresses: SavedAddress[] = [
  {
    id: 'addr1',
    label: 'বাসা',
    address: 'হাউজ ১২, রোড ৫, ব্লক এ',
    area: 'গুলশান-১',
    city: 'ঢাকা',
    phone: '+880 1712-345678',
    isDefault: true,
    type: 'home',
  },
  {
    id: 'addr2',
    label: 'অফিস',
    address: 'ফ্লোর ৮, টাওয়ার বি, আইডিবি ভবন',
    area: 'আগারগাঁও',
    city: 'ঢাকা',
    phone: '+880 1812-345678',
    isDefault: false,
    type: 'office',
  },
  {
    id: 'addr3',
    label: 'বাবার বাসা',
    address: 'বাড়ি ৪৫, রোড ১০',
    area: 'ধানমন্ডি',
    city: 'ঢাকা',
    phone: '+880 1912-345678',
    isDefault: false,
    type: 'other',
  },
];

// Laundry order tracking steps
const laundryTrackingSteps: TrackingStep[] = [
  { status: 'pending', title: 'অর্ডার নিশ্চিত', description: 'আপনার অর্ডার নিশ্চিত করা হয়েছে', time: '১০:৩০ AM', isCompleted: true, isCurrent: false },
  { status: 'picked_up', title: 'পিকআপ সম্পন্ন', description: 'রাইডার কাপড় নিয়ে গেছে', time: '১১:১৫ AM', isCompleted: true, isCurrent: false },
  { status: 'in_progress', title: 'প্রসেসিং চলছে', description: 'আপনার কাপড় পরিষ্কার হচ্ছে', time: '১২:০০ PM', isCompleted: true, isCurrent: true },
  { status: 'ready', title: 'প্রস্তুত', description: 'আপনার কাপড় প্রস্তুত', isCompleted: false, isCurrent: false },
  { status: 'delivered', title: 'ডেলিভারি সম্পন্ন', description: 'আপনার কাপড় বাসায় পৌঁছে গেছে', isCompleted: false, isCurrent: false },
];

// Salon order tracking steps
const salonTrackingSteps: TrackingStep[] = [
  { status: 'confirmed', title: 'বুকিং নিশ্চিত', description: 'আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত', time: '০৯:০০ AM', isCompleted: true, isCurrent: false },
  { status: 'in_progress', title: 'সার্ভিস চলছে', description: 'আপনার সার্ভিস শুরু হয়েছে', time: '১০:০০ AM', isCompleted: true, isCurrent: true },
  { status: 'completed', title: 'সম্পন্ন', description: 'সার্ভিস সম্পন্ন হয়েছে', isCompleted: false, isCurrent: false },
];

// Dummy Orders
export const orders: Order[] = [
  {
    id: 'ord1',
    orderNumber: 'FZ-2024-001234',
    type: 'laundry',
    vendorId: 'v2',
    vendorName: 'ক্লিন ওয়াশ লন্ড্রি',
    vendorImage: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400',
    items: [
      { id: 'i1', name: 'ওয়াশ অ্যান্ড ফোল্ড (৫ কেজি)', quantity: 1, price: 250 },
      { id: 'i2', name: 'ড্রাই ক্লিন (শার্ট)', quantity: 3, price: 240 },
      { id: 'i3', name: 'আয়রন (শার্ট)', quantity: 5, price: 125 },
    ],
    status: 'in_progress',
    totalAmount: 615,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    createdAt: 'আজ, ১০:৩০ AM',
    deliveryAddress: 'হাউজ ১২, রোড ৫, গুলশান-১, ঢাকা',
    pickupTime: '১১:১৫ AM',
    deliveryTime: '৬:০০ PM (আনুমানিক)',
    riderName: 'করিম উদ্দিন',
    riderPhone: '+880 1612-789456',
    estimatedTime: '৪ ঘন্টা বাকি',
    trackingSteps: laundryTrackingSteps,
  },
  {
    id: 'ord2',
    orderNumber: 'FZ-2024-001235',
    type: 'salon',
    vendorId: 'v1',
    vendorName: 'রয়্যাল সেলুন',
    vendorImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
    items: [
      { id: 'i4', name: 'হেয়ারকাট (পুরুষ)', quantity: 1, price: 150, duration: '30 মিনিট' },
      { id: 'i5', name: 'শেভিং', quantity: 1, price: 80, duration: '20 মিনিট' },
    ],
    status: 'in_progress',
    totalAmount: 230,
    paymentMethod: 'online',
    paymentStatus: 'paid',
    createdAt: 'আজ, ০৯:০০ AM',
    scheduledDate: 'আজ',
    scheduledTime: '১০:০০ AM',
    queuePosition: 2,
    estimatedTime: '১৫ মিনিট বাকি',
    trackingSteps: salonTrackingSteps,
  },
  {
    id: 'ord3',
    orderNumber: 'FZ-2024-001230',
    type: 'laundry',
    vendorId: 'v4',
    vendorName: 'ফ্রেশ লন্ড্রি সার্ভিস',
    vendorImage: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400',
    items: [
      { id: 'i6', name: 'এক্সপ্রেস সার্ভিস', quantity: 1, price: 100 },
      { id: 'i7', name: 'ওয়াশ অ্যান্ড ফোল্ড (৩ কেজি)', quantity: 1, price: 150 },
    ],
    status: 'completed',
    totalAmount: 250,
    paymentMethod: 'online',
    paymentStatus: 'paid',
    createdAt: 'গতকাল, ০২:০০ PM',
    deliveryAddress: 'হাউজ ১২, রোড ৫, গুলশান-১, ঢাকা',
    trackingSteps: [
      { status: 'pending', title: 'অর্ডার নিশ্চিত', description: 'আপনার অর্ডার নিশ্চিত করা হয়েছে', time: '০২:০০ PM', isCompleted: true, isCurrent: false },
      { status: 'picked_up', title: 'পিকআপ সম্পন্ন', description: 'রাইডার কাপড় নিয়ে গেছে', time: '০২:৪৫ PM', isCompleted: true, isCurrent: false },
      { status: 'in_progress', title: 'প্রসেসিং চলছে', description: 'আপনার কাপড় পরিষ্কার হচ্ছে', time: '০৩:৩০ PM', isCompleted: true, isCurrent: false },
      { status: 'ready', title: 'প্রস্তুত', description: 'আপনার কাপড় প্রস্তুত', time: '০৬:০০ PM', isCompleted: true, isCurrent: false },
      { status: 'delivered', title: 'ডেলিভারি সম্পন্ন', description: 'আপনার কাপড় বাসায় পৌঁছে গেছে', time: '০৬:৪৫ PM', isCompleted: true, isCurrent: false },
    ],
  },
  {
    id: 'ord4',
    orderNumber: 'FZ-2024-001225',
    type: 'salon',
    vendorId: 'v7',
    vendorName: 'গ্ল্যামার স্পা',
    vendorImage: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=400',
    items: [
      { id: 'i8', name: 'ফেসিয়াল', quantity: 1, price: 500, duration: '60 মিনিট' },
      { id: 'i9', name: 'হেয়ার স্পা', quantity: 1, price: 800, duration: '90 মিনিট' },
    ],
    status: 'completed',
    totalAmount: 1300,
    paymentMethod: 'cod',
    paymentStatus: 'paid',
    createdAt: '৩ দিন আগে',
    scheduledDate: '৩ দিন আগে',
    scheduledTime: '১১:০০ AM',
    trackingSteps: [
      { status: 'confirmed', title: 'বুকিং নিশ্চিত', description: 'আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত', time: '০৯:০০ AM', isCompleted: true, isCurrent: false },
      { status: 'in_progress', title: 'সার্ভিস চলছে', description: 'আপনার সার্ভিস শুরু হয়েছে', time: '১১:০০ AM', isCompleted: true, isCurrent: false },
      { status: 'completed', title: 'সম্পন্ন', description: 'সার্ভিস সম্পন্ন হয়েছে', time: '০১:৩০ PM', isCompleted: true, isCurrent: false },
    ],
  },
  {
    id: 'ord5',
    orderNumber: 'FZ-2024-001220',
    type: 'laundry',
    vendorId: 'v6',
    vendorName: 'স্পার্কল ক্লিন',
    vendorImage: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400',
    items: [
      { id: 'i10', name: 'ড্রাই ক্লিন (স্যুট)', quantity: 2, price: 700 },
      { id: 'i11', name: 'ড্রাই ক্লিন (শার্ট)', quantity: 4, price: 320 },
    ],
    status: 'completed',
    totalAmount: 1020,
    paymentMethod: 'online',
    paymentStatus: 'paid',
    createdAt: '১ সপ্তাহ আগে',
    deliveryAddress: 'ফ্লোর ৮, টাওয়ার বি, আইডিবি ভবন, আগারগাঁও, ঢাকা',
    trackingSteps: [
      { status: 'pending', title: 'অর্ডার নিশ্চিত', description: 'আপনার অর্ডার নিশ্চিত করা হয়েছে', isCompleted: true, isCurrent: false },
      { status: 'picked_up', title: 'পিকআপ সম্পন্ন', description: 'রাইডার কাপড় নিয়ে গেছে', isCompleted: true, isCurrent: false },
      { status: 'in_progress', title: 'প্রসেসিং চলছে', description: 'আপনার কাপড় পরিষ্কার হচ্ছে', isCompleted: true, isCurrent: false },
      { status: 'ready', title: 'প্রস্তুত', description: 'আপনার কাপড় প্রস্তুত', isCompleted: true, isCurrent: false },
      { status: 'delivered', title: 'ডেলিভারি সম্পন্ন', description: 'আপনার কাপড় বাসায় পৌঁছে গেছে', isCompleted: true, isCurrent: false },
    ],
  },
  {
    id: 'ord6',
    orderNumber: 'FZ-2024-001210',
    type: 'salon',
    vendorId: 'v3',
    vendorName: 'বিউটি পয়েন্ট',
    vendorImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400',
    items: [
      { id: 'i12', name: 'হেয়ারকাট (মহিলা)', quantity: 1, price: 300, duration: '45 মিনিট' },
      { id: 'i13', name: 'ম্যানিকিউর', quantity: 1, price: 250, duration: '30 মিনিট' },
      { id: 'i14', name: 'পেডিকিউর', quantity: 1, price: 350, duration: '45 মিনিট' },
    ],
    status: 'cancelled',
    totalAmount: 900,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    createdAt: '২ সপ্তাহ আগে',
    scheduledDate: '২ সপ্তাহ আগে',
    scheduledTime: '০৩:০০ PM',
    trackingSteps: [
      { status: 'confirmed', title: 'বুকিং নিশ্চিত', description: 'আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত', isCompleted: true, isCurrent: false },
      { status: 'cancelled', title: 'বাতিল', description: 'অর্ডার বাতিল করা হয়েছে', isCompleted: true, isCurrent: true },
    ],
  },
];

// Get active orders
export const getActiveOrders = () => orders.filter(o => ['pending', 'confirmed', 'in_progress', 'ready', 'picked_up'].includes(o.status));

// Get order history
export const getOrderHistory = () => orders.filter(o => ['completed', 'delivered', 'cancelled'].includes(o.status));

// Status labels in Bengali
export const statusLabels: Record<OrderStatus, string> = {
  pending: 'অপেক্ষমান',
  confirmed: 'নিশ্চিত',
  in_progress: 'চলমান',
  ready: 'প্রস্তুত',
  picked_up: 'পিকআপ সম্পন্ন',
  delivered: 'ডেলিভারি সম্পন্ন',
  completed: 'সম্পন্ন',
  cancelled: 'বাতিল',
};

// Status colors
export const statusColors: Record<OrderStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  in_progress: 'bg-primary/10 text-primary',
  ready: 'bg-green-100 text-green-800',
  picked_up: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};
