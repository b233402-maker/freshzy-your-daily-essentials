import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, Filter, ChevronDown, Scissors, Shirt, Star, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VendorCard from '@/components/cards/VendorCard';
import { vendors } from '@/data/dummyData';

const VendorsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  const activeType = (searchParams.get('type') as 'salon' | 'laundry') || 'all';

  const filteredVendors = useMemo(() => {
    let result = [...vendors];
    
    // Filter by type
    if (activeType !== 'all') {
      result = result.filter(v => v.type === activeType);
    }
    
    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(v => 
        v.name.toLowerCase().includes(query) ||
        v.nameEn.toLowerCase().includes(query) ||
        v.categories.some(c => c.toLowerCase().includes(query))
      );
    }
    
    // Sort
    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'distance':
        result.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        break;
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }
    
    return result;
  }, [activeType, searchQuery, sortBy]);

  const setType = (type: string) => {
    if (type === 'all') {
      searchParams.delete('type');
    } else {
      searchParams.set('type', type);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container-custom py-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">হোম</Link>
            <span>/</span>
            <span className="text-foreground">সার্ভিস</span>
            {activeType !== 'all' && (
              <>
                <span>/</span>
                <span className="text-foreground">
                  {activeType === 'salon' ? 'সেলুন' : 'লন্ড্রি'}
                </span>
              </>
            )}
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-muted rounded-xl">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="সেলুন বা লন্ড্রি সার্ভিস খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none flex-1 text-foreground placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-background rounded-full">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Location */}
            <button className="flex items-center gap-2 px-4 py-3 bg-muted rounded-xl hover:bg-muted/80 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">ঢাকা</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Filter Toggle - Mobile */}
            <Button 
              variant="outline" 
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5" />
              ফিল্টার
            </Button>
          </div>

          {/* Type Tabs & Sort */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
            {/* Type Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setType('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeType === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                সব
              </button>
              <button
                onClick={() => setType('salon')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeType === 'salon'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Scissors className="w-4 h-4" />
                সেলুন
              </button>
              <button
                onClick={() => setType('laundry')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeType === 'laundry'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <Shirt className="w-4 h-4" />
                লন্ড্রি
              </button>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">সাজান:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-muted px-3 py-2 rounded-lg text-sm outline-none cursor-pointer hover:bg-muted/80"
              >
                <option value="recommended">সুপারিশকৃত</option>
                <option value="rating">সেরা রেটিং</option>
                <option value="distance">কাছের</option>
                <option value="reviews">বেশি রিভিউ</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-6">
        <div className="flex gap-6">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-background rounded-2xl p-6 shadow-card sticky top-40">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                ফিল্টার
              </h3>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">রেটিং</h4>
                <div className="space-y-2">
                  {[4.5, 4, 3.5, 3].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="rounded border-border" />
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="text-sm group-hover:text-primary">{rating}+ এবং উপরে</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">স্ট্যাটাস</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="rounded border-border" defaultChecked />
                    <span className="text-sm group-hover:text-primary">এখন খোলা</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-sm group-hover:text-primary">ফিচার্ড</span>
                  </label>
                </div>
              </div>

              {/* Distance Filter */}
              <div>
                <h4 className="font-medium mb-3">দূরত্ব</h4>
                <div className="space-y-2">
                  {['১ কি.মি. এর মধ্যে', '৩ কি.মি. এর মধ্যে', '৫ কি.মি. এর মধ্যে', 'যেকোনো'].map((dist) => (
                    <label key={dist} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="distance" className="rounded-full border-border" />
                      <span className="text-sm group-hover:text-primary">{dist}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full mt-6">ফিল্টার প্রয়োগ করুন</Button>
            </div>
          </aside>

          {/* Vendor Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">{filteredVendors.length}</span> টি সার্ভিস পাওয়া গেছে
              </p>
            </div>

            {/* Grid */}
            {filteredVendors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVendors.map((vendor, index) => (
                  <div 
                    key={vendor.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <VendorCard vendor={vendor} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">কোন সার্ভিস পাওয়া যায়নি</h3>
                <p className="text-muted-foreground mb-4">
                  আপনার সার্চ পরিবর্তন করে আবার চেষ্টা করুন
                </p>
                <Button onClick={() => {
                  setSearchQuery('');
                  setType('all');
                }}>
                  সব দেখুন
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sheet */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setShowFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl p-6 animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg">ফিল্টার</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Filter content same as sidebar */}
            <div className="space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Rating */}
              <div>
                <h4 className="font-medium mb-3">রেটিং</h4>
                <div className="flex flex-wrap gap-2">
                  {[4.5, 4, 3.5, 3].map((rating) => (
                    <button 
                      key={rating}
                      className="flex items-center gap-1 px-3 py-2 rounded-full bg-muted text-sm"
                    >
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      {rating}+
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" className="flex-1" onClick={() => setShowFilters(false)}>
                রিসেট
              </Button>
              <Button className="flex-1" onClick={() => setShowFilters(false)}>
                প্রয়োগ করুন
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorsPage;
