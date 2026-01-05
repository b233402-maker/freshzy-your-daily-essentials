import { Star, ThumbsUp, MessageSquare, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { riderProfile, riderStats } from '@/data/riderData';

const ratingBreakdown = [
  { stars: 5, count: 892, percentage: 72 },
  { stars: 4, count: 248, percentage: 20 },
  { stars: 3, count: 74, percentage: 6 },
  { stars: 2, count: 20, percentage: 1.6 },
  { stars: 1, count: 13, percentage: 1 },
];

const recentReviews = [
  {
    id: 1,
    customer: 'আহমেদ হাসান',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50',
    rating: 5,
    comment: 'অনেক দ্রুত ডেলিভারি করেছেন। ধন্যবাদ!',
    date: 'আজ',
    orderId: 'FRZ-2024-001'
  },
  {
    id: 2,
    customer: 'ফাতিমা বেগম',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50',
    rating: 5,
    comment: 'খুব ভদ্র এবং সময়মতো ডেলিভারি। 👍',
    date: 'গতকাল',
    orderId: 'FRZ-2024-002'
  },
  {
    id: 3,
    customer: 'করিম সাহেব',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50',
    rating: 4,
    comment: 'ভালো সার্ভিস, তবে একটু দেরি হয়েছিল।',
    date: '২ দিন আগে',
    orderId: 'FRZ-2024-003'
  },
  {
    id: 4,
    customer: 'সুমাইয়া আক্তার',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50',
    rating: 5,
    comment: 'প্রোডাক্ট অক্ষত অবস্থায় পৌঁছেছে। চমৎকার!',
    date: '৩ দিন আগে',
    orderId: 'FRZ-2024-004'
  },
];

const badges = [
  { icon: '🚀', title: 'স্পিড স্টার', description: '100+ দ্রুত ডেলিভারি' },
  { icon: '⭐', title: 'টপ রেটেড', description: '4.5+ গড় রেটিং' },
  { icon: '🎯', title: 'পারফেক্ট অ্যাটেনডেন্স', description: '30 দিন অনলাইন' },
  { icon: '💯', title: 'মাস্টার রাইডার', description: '1000+ ডেলিভারি' },
];

const RiderRatings = () => {
  const totalReviews = ratingBreakdown.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="space-y-6">
      {/* Overall Rating Card */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-yellow-200 dark:border-yellow-800">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-2">
                {riderProfile.rating}
              </div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < Math.floor(riderProfile.rating) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {totalReviews} টি রিভিউ
              </p>
            </div>

            <div className="flex-1 space-y-2">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="w-8 text-sm">{item.stars} ⭐</span>
                  <Progress value={item.percentage} className="flex-1 h-2" />
                  <span className="w-12 text-sm text-muted-foreground text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <ThumbsUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">98%</p>
            <p className="text-sm text-muted-foreground">পজিটিভ ফিডব্যাক</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{riderStats.acceptanceRate}%</p>
            <p className="text-sm text-muted-foreground">গ্রহণের হার</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold">{totalReviews}</p>
            <p className="text-sm text-muted-foreground">মোট রিভিউ</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
            <p className="text-2xl font-bold">{riderProfile.totalDeliveries}</p>
            <p className="text-sm text-muted-foreground">মোট ডেলিভারি</p>
          </CardContent>
        </Card>
      </div>

      {/* Badges */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">অর্জিত ব্যাজ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-muted rounded-lg"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h3 className="font-semibold text-sm">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reviews */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-muted-foreground" />
            সাম্প্রতিক রিভিউ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div 
                key={review.id}
                className="flex gap-4 p-4 bg-muted/50 rounded-lg"
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src={review.avatar} alt={review.customer} />
                  <AvatarFallback>{review.customer.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">{review.customer}</h3>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${
                          i < review.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    অর্ডার: #{review.orderId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiderRatings;
