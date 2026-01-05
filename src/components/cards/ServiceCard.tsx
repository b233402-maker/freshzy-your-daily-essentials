import { Plus, Minus, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Service } from '@/data/dummyData';

interface ServiceCardProps {
  service: Service;
  quantity?: number;
  onAdd?: () => void;
  onRemove?: () => void;
}

const ServiceCard = ({ service, quantity = 0, onAdd, onRemove }: ServiceCardProps) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary-light/30 transition-all group">
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-medium group-hover:text-primary transition-colors">
              {service.name}
            </h4>
            <p className="text-sm text-muted-foreground mt-0.5">
              {service.description}
            </p>
          </div>
          
          {/* Badges */}
          <div className="flex flex-col gap-1 shrink-0">
            {service.isPopular && (
              <span className="badge-available text-[10px]">জনপ্রিয়</span>
            )}
            {service.isUrgent && (
              <span className="badge-urgent text-[10px]">এক্সপ্রেস</span>
            )}
          </div>
        </div>

        {/* Duration */}
        {service.duration && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
            <Clock className="w-3 h-3" />
            <span>{service.duration}</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="font-semibold text-primary">৳{service.price}</span>
          {service.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ৳{service.originalPrice}
            </span>
          )}
          {service.originalPrice && (
            <span className="text-xs text-success font-medium">
              {Math.round((1 - service.price / service.originalPrice) * 100)}% ছাড়
            </span>
          )}
        </div>
      </div>

      {/* Add/Remove Button */}
      <div className="shrink-0">
        {quantity === 0 ? (
          <Button
            onClick={onAdd}
            size="sm"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Plus className="w-4 h-4" />
            যোগ করুন
          </Button>
        ) : (
          <div className="flex items-center gap-2 bg-primary rounded-lg p-1">
            <button
              onClick={onRemove}
              className="w-8 h-8 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center font-medium text-primary-foreground">
              {quantity}
            </span>
            <button
              onClick={onAdd}
              className="w-8 h-8 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
