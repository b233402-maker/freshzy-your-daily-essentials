import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, Users } from 'lucide-react';
import { Vendor } from '@/data/dummyData';

interface VendorCardProps {
  vendor: Vendor;
}

const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <Link
      to={`/vendor/${vendor.id}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-card card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {vendor.isFeatured && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              ফিচার্ড
            </span>
          )}
          {!vendor.isOpen && (
            <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
              বন্ধ
            </span>
          )}
        </div>

        {/* Type Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            vendor.type === 'salon' 
              ? 'bg-accent text-accent-foreground' 
              : 'bg-secondary text-secondary-foreground'
          }`}>
            {vendor.type === 'salon' ? 'সেলুন' : 'লন্ড্রি'}
          </span>
        </div>

        {/* Queue Info for Salon */}
        {vendor.type === 'salon' && vendor.queueCount !== undefined && vendor.isOpen && (
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            <span className="px-2 py-1 bg-foreground/80 backdrop-blur-sm text-background text-xs font-medium rounded-full flex items-center gap-1">
              <Users className="w-3 h-3" />
              কিউতে {vendor.queueCount} জন
            </span>
            {vendor.urgentQueueCount! > 0 && (
              <span className="badge-urgent flex items-center gap-1">
                আর্জেন্ট {vendor.urgentQueueCount}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {vendor.name}
          </h3>
          <div className="flex items-center gap-1 text-sm shrink-0">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="font-medium">{vendor.rating}</span>
            <span className="text-muted-foreground">({vendor.reviewCount})</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {vendor.categories.slice(0, 3).map((cat, idx) => (
            <span key={idx} className="text-xs text-muted-foreground">
              {cat}{idx < Math.min(vendor.categories.length, 3) - 1 && ' •'}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {vendor.distance}
          </span>
          {vendor.deliveryTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {vendor.deliveryTime}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
