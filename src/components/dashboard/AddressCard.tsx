import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Briefcase, MapPin, Phone, Edit2, Trash2, Check } from 'lucide-react';
import { SavedAddress } from '@/data/orderData';
import { cn } from '@/lib/utils';

interface AddressCardProps {
  address: SavedAddress;
  onEdit?: (address: SavedAddress) => void;
  onDelete?: (id: string) => void;
  onSetDefault?: (id: string) => void;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (address: SavedAddress) => void;
}

const AddressCard = ({ 
  address, 
  onEdit, 
  onDelete, 
  onSetDefault,
  selectable,
  selected,
  onSelect
}: AddressCardProps) => {
  const IconComponent = address.type === 'home' 
    ? Home 
    : address.type === 'office' 
      ? Briefcase 
      : MapPin;

  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:shadow-md cursor-pointer",
        selected && "ring-2 ring-primary",
        address.isDefault && "border-primary/50"
      )}
      onClick={() => selectable && onSelect?.(address)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          {/* Icon & Content */}
          <div className="flex gap-3">
            <div className={cn(
              "p-2 rounded-lg",
              address.type === 'home' 
                ? "bg-blue-100 text-blue-600"
                : address.type === 'office'
                  ? "bg-purple-100 text-purple-600"
                  : "bg-gray-100 text-gray-600"
            )}>
              <IconComponent className="h-5 w-5" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-foreground">{address.label}</h3>
                {address.isDefault && (
                  <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                    Default
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground mb-1">
                {address.address}
              </p>
              <p className="text-sm text-muted-foreground">
                {address.area}, {address.city}
              </p>
              
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <Phone className="h-3 w-3" />
                <span>{address.phone}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          {!selectable && (
            <div className="flex flex-col gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit?.(address);
                }}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              {!address.isDefault && (
                <>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSetDefault?.(address.id);
                    }}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete?.(address.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          )}

          {/* Selection Indicator */}
          {selectable && selected && (
            <div className="p-1.5 rounded-full bg-primary text-primary-foreground">
              <Check className="h-4 w-4" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
