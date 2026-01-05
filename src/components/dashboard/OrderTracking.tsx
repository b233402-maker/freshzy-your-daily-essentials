import { Check, Clock } from 'lucide-react';
import { TrackingStep } from '@/data/orderData';
import { cn } from '@/lib/utils';

interface OrderTrackingProps {
  steps: TrackingStep[];
  vertical?: boolean;
}

const OrderTracking = ({ steps, vertical = true }: OrderTrackingProps) => {
  if (vertical) {
    return (
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={step.status} className="flex gap-4">
            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                step.isCompleted 
                  ? "bg-primary text-primary-foreground" 
                  : step.isCurrent
                    ? "bg-primary/20 text-primary border-2 border-primary animate-pulse"
                    : "bg-muted text-muted-foreground"
              )}>
                {step.isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : step.isCurrent ? (
                  <Clock className="h-4 w-4" />
                ) : (
                  <span className="text-xs">{index + 1}</span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "w-0.5 h-12 transition-colors duration-300",
                  step.isCompleted ? "bg-primary" : "bg-muted"
                )} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h4 className={cn(
                "font-medium",
                step.isCompleted || step.isCurrent 
                  ? "text-foreground" 
                  : "text-muted-foreground"
              )}>
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              {step.time && (
                <span className="text-xs text-primary font-medium">
                  {step.time}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Horizontal layout
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.status} className="flex-1 flex items-center">
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
              step.isCompleted 
                ? "bg-primary text-primary-foreground" 
                : step.isCurrent
                  ? "bg-primary/20 text-primary border-2 border-primary animate-pulse"
                  : "bg-muted text-muted-foreground"
            )}>
              {step.isCompleted ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            <p className={cn(
              "text-xs mt-2 font-medium max-w-[80px]",
              step.isCompleted || step.isCurrent 
                ? "text-foreground" 
                : "text-muted-foreground"
            )}>
              {step.title}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className={cn(
              "flex-1 h-0.5 mx-2",
              step.isCompleted ? "bg-primary" : "bg-muted"
            )} />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderTracking;
