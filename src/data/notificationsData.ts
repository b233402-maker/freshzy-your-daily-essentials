export type NotificationType = 
  | 'order_placed' 
  | 'order_confirmed' 
  | 'order_ready' 
  | 'order_picked' 
  | 'order_delivered'
  | 'delivery_assigned'
  | 'delivery_request'
  | 'payment_received'
  | 'new_review'
  | 'vendor_approved'
  | 'rider_approved'
  | 'system_update'
  | 'promotion';

export type UserRole = 'customer' | 'rider' | 'owner' | 'admin';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  link?: string;
  icon?: string;
  priority?: 'low' | 'medium' | 'high';
  role: UserRole[];
}

// Dummy notifications for different roles
export const allNotifications: Notification[] = [
  // Customer notifications
  {
    id: 'notif-1',
    type: 'order_confirmed',
    title: 'অর্ডার নিশ্চিত হয়েছে',
    message: 'আপনার অর্ডার #ORD-001 নিশ্চিত করা হয়েছে। প্রস্তুত হতে আনুমানিক ৩০ মিনিট সময় লাগবে।',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    read: false,
    link: '/dashboard/orders/ORD-001',
    priority: 'high',
    role: ['customer']
  },
  {
    id: 'notif-2',
    type: 'order_ready',
    title: 'অর্ডার তৈরি!',
    message: 'আপনার অর্ডার #ORD-002 তৈরি এবং পিকআপের জন্য প্রস্তুত।',
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    read: false,
    link: '/dashboard/orders/ORD-002',
    priority: 'medium',
    role: ['customer']
  },
  {
    id: 'notif-3',
    type: 'order_delivered',
    title: 'ডেলিভারি সম্পন্ন',
    message: 'আপনার অর্ডার #ORD-003 সফলভাবে ডেলিভারি করা হয়েছে। রেটিং দিন!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: true,
    link: '/dashboard/orders/ORD-003',
    priority: 'low',
    role: ['customer']
  },
  {
    id: 'notif-4',
    type: 'promotion',
    title: '২০% ছাড়!',
    message: 'আজকের জন্য বিশেষ অফার - সব লন্ড্রি সার্ভিসে ২০% ছাড়!',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    read: true,
    priority: 'low',
    role: ['customer']
  },

  // Rider notifications
  {
    id: 'notif-5',
    type: 'delivery_request',
    title: 'নতুন ডেলিভারি অনুরোধ',
    message: 'Sparkle Clean Laundry থেকে নতুন অর্ডার। ১.২ কিমি দূরে, ৳৬০ আয়।',
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    read: false,
    link: '/rider/deliveries',
    priority: 'high',
    role: ['rider']
  },
  {
    id: 'notif-6',
    type: 'delivery_assigned',
    title: 'ডেলিভারি অ্যাসাইন হয়েছে',
    message: 'অর্ডার #DEL-005 আপনাকে অ্যাসাইন করা হয়েছে। এখনই পিকআপ করুন।',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    read: false,
    link: '/rider/deliveries',
    priority: 'high',
    role: ['rider']
  },
  {
    id: 'notif-7',
    type: 'payment_received',
    title: 'পেমেন্ট প্রাপ্ত',
    message: 'আজকের আয় ৳১,২৫০ আপনার ওয়ালেটে জমা হয়েছে।',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
    read: true,
    link: '/rider/earnings',
    priority: 'medium',
    role: ['rider']
  },
  {
    id: 'notif-8',
    type: 'new_review',
    title: 'নতুন রিভিউ!',
    message: 'একজন কাস্টমার আপনাকে ৫ স্টার দিয়েছেন: "চমৎকার সার্ভিস!"',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
    read: true,
    link: '/rider/ratings',
    priority: 'low',
    role: ['rider']
  },

  // Owner notifications
  {
    id: 'notif-9',
    type: 'order_placed',
    title: 'নতুন অর্ডার!',
    message: 'নতুন অর্ডার #ORD-010 পেয়েছেন। এখনই প্রসেস করুন।',
    timestamp: new Date(Date.now() - 3 * 60 * 1000),
    read: false,
    link: '/owner/orders',
    priority: 'high',
    role: ['owner']
  },
  {
    id: 'notif-10',
    type: 'order_placed',
    title: 'নতুন অর্ডার!',
    message: 'নতুন অর্ডার #ORD-011 পেয়েছেন। প্রিমিয়াম ওয়াশ সার্ভিস।',
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    read: false,
    link: '/owner/orders',
    priority: 'high',
    role: ['owner']
  },
  {
    id: 'notif-11',
    type: 'payment_received',
    title: 'পেমেন্ট প্রাপ্ত',
    message: 'অর্ডার #ORD-008 এর জন্য ৳৫৫০ পেমেন্ট পেয়েছেন।',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    read: false,
    link: '/owner',
    priority: 'medium',
    role: ['owner']
  },
  {
    id: 'notif-12',
    type: 'new_review',
    title: 'নতুন রিভিউ',
    message: 'কাস্টমার রিভিউ: ৪ স্টার - "ভালো সার্ভিস, সময়মত ডেলিভারি"',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    read: true,
    link: '/owner',
    priority: 'low',
    role: ['owner']
  },

  // Admin notifications
  {
    id: 'notif-13',
    type: 'vendor_approved',
    title: 'ভেন্ডর অনুমোদন অপেক্ষমাণ',
    message: 'নতুন ভেন্ডর "Clean & Fresh Laundry" অনুমোদনের জন্য অপেক্ষা করছে।',
    timestamp: new Date(Date.now() - 1 * 60 * 1000),
    read: false,
    link: '/admin/vendors',
    priority: 'high',
    role: ['admin']
  },
  {
    id: 'notif-14',
    type: 'rider_approved',
    title: 'রাইডার অনুমোদন অপেক্ষমাণ',
    message: '৩ জন নতুন রাইডার অনুমোদনের জন্য অপেক্ষা করছে।',
    timestamp: new Date(Date.now() - 20 * 60 * 1000),
    read: false,
    link: '/admin/riders',
    priority: 'high',
    role: ['admin']
  },
  {
    id: 'notif-15',
    type: 'system_update',
    title: 'সিস্টেম আপডেট',
    message: 'আজ রাত ২টায় সিস্টেম মেইনটেন্যান্স হবে। আনুমানিক ৩০ মিনিট সময় লাগবে।',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
    link: '/admin/settings',
    priority: 'medium',
    role: ['admin']
  },
  {
    id: 'notif-16',
    type: 'payment_received',
    title: 'দৈনিক আয় রিপোর্ট',
    message: 'আজকের মোট কমিশন আয়: ৳১২,৪৫০',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    read: true,
    link: '/admin/analytics',
    priority: 'medium',
    role: ['admin']
  },
  {
    id: 'notif-17',
    type: 'system_update',
    title: 'নতুন ফিচার লাইভ',
    message: 'রাইডার ট্র্যাকিং ফিচার এখন সব ব্যবহারকারীদের জন্য লাইভ।',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    read: true,
    priority: 'low',
    role: ['admin']
  }
];

// Get notifications by role
export const getNotificationsByRole = (role: UserRole): Notification[] => {
  return allNotifications
    .filter(n => n.role.includes(role))
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

// Get unread count by role
export const getUnreadCount = (role: UserRole): number => {
  return allNotifications.filter(n => n.role.includes(role) && !n.read).length;
};

// Format timestamp relative to now
export const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'এইমাত্র';
  if (diffMins < 60) return `${diffMins} মিনিট আগে`;
  if (diffHours < 24) return `${diffHours} ঘণ্টা আগে`;
  if (diffDays < 7) return `${diffDays} দিন আগে`;
  return date.toLocaleDateString('bn-BD');
};

// Get icon for notification type
export const getNotificationIcon = (type: NotificationType): string => {
  const icons: Record<NotificationType, string> = {
    order_placed: '🛒',
    order_confirmed: '✅',
    order_ready: '📦',
    order_picked: '🚴',
    order_delivered: '🎉',
    delivery_assigned: '📍',
    delivery_request: '🔔',
    payment_received: '💰',
    new_review: '⭐',
    vendor_approved: '🏪',
    rider_approved: '🏍️',
    system_update: '⚙️',
    promotion: '🎁'
  };
  return icons[type];
};

// Get priority color
export const getPriorityColor = (priority?: 'low' | 'medium' | 'high'): string => {
  switch (priority) {
    case 'high': return 'bg-red-500';
    case 'medium': return 'bg-yellow-500';
    default: return 'bg-blue-500';
  }
};
