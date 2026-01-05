import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Play, 
  CheckCircle, 
  Phone, 
  MoreVertical,
  ArrowUp,
  ArrowDown,
  AlertTriangle,
  User
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { queueData, QueueItem } from '@/data/ownerData';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const QueueManagement = () => {
  const [queue, setQueue] = useState<QueueItem[]>(queueData);

  const handleStartService = (id: string) => {
    setQueue(queue.map(item => 
      item.id === id 
        ? { ...item, status: 'in_service' as const, startTime: new Date().toLocaleTimeString('bn-BD') }
        : item
    ));
    toast.success('Service started!');
  };

  const handleCompleteService = (id: string) => {
    setQueue(queue.map(item => 
      item.id === id 
        ? { ...item, status: 'completed' as const }
        : item
    ));
    toast.success('Service completed!');
  };

  const handleMoveUp = (id: string) => {
    const index = queue.findIndex(item => item.id === id);
    if (index > 0) {
      const newQueue = [...queue];
      [newQueue[index - 1], newQueue[index]] = [newQueue[index], newQueue[index - 1]];
      newQueue[index - 1].position = index;
      newQueue[index].position = index + 1;
      setQueue(newQueue);
    }
  };

  const handleMoveDown = (id: string) => {
    const index = queue.findIndex(item => item.id === id);
    if (index < queue.length - 1) {
      const newQueue = [...queue];
      [newQueue[index], newQueue[index + 1]] = [newQueue[index + 1], newQueue[index]];
      newQueue[index].position = index + 1;
      newQueue[index + 1].position = index + 2;
      setQueue(newQueue);
    }
  };

  const waitingQueue = queue.filter(q => q.status === 'waiting');
  const inService = queue.filter(q => q.status === 'in_service');
  const completed = queue.filter(q => q.status === 'completed');

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
            <p className="text-2xl font-bold text-yellow-700">{waitingQueue.length}</p>
            <p className="text-sm text-yellow-600">Waiting</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <Play className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold text-blue-700">{inService.length}</p>
            <p className="text-sm text-blue-600">In Service</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold text-green-700">{completed.length}</p>
            <p className="text-sm text-green-600">Completed</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Currently In Service */}
        {inService.length > 0 && (
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                Currently In Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {inService.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 bg-primary/5 rounded-xl border border-primary/20"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.customerName}</h3>
                        <p className="text-sm text-muted-foreground">{item.serviceName}</p>
                      </div>
                    </div>
                    {item.isUrgent && (
                      <Badge variant="destructive" className="gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Started: {item.startTime}</span>
                    <span className="text-primary font-medium">{item.estimatedTime}</span>
                  </div>
                  <Button 
                    className="w-full mt-3 bg-green-600 hover:bg-green-700"
                    onClick={() => handleCompleteService(item.id)}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Mark as Completed
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Waiting Queue */}
        <Card className={inService.length === 0 ? "lg:col-span-2" : ""}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              Waiting Queue ({waitingQueue.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {waitingQueue.length > 0 ? (
              waitingQueue.map((item, index) => (
                <div 
                  key={item.id}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-lg border transition-all",
                    item.isUrgent ? "bg-red-50 border-red-200" : "bg-muted/50 border-border"
                  )}
                >
                  {/* Position */}
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold",
                    item.isUrgent 
                      ? "bg-red-100 text-red-600" 
                      : "bg-primary/10 text-primary"
                  )}>
                    #{item.position}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{item.customerName}</h4>
                      {item.isUrgent && (
                        <Badge variant="destructive" className="text-xs">Urgent</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.serviceName}</p>
                    <p className="text-xs text-muted-foreground">Est. wait: {item.estimatedTime}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {index === 0 && inService.length === 0 && (
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => handleStartService(item.id)}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Start
                      </Button>
                    )}
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-background border shadow-lg">
                        <DropdownMenuItem onClick={() => handleMoveUp(item.id)}>
                          <ArrowUp className="h-4 w-4 mr-2" />
                          Move Up
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleMoveDown(item.id)}>
                          <ArrowDown className="h-4 w-4 mr-2" />
                          Move Down
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Customer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No customers waiting</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Completed Today */}
      {completed.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Completed Today ({completed.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {completed.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200"
                >
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-sm">{item.customerName}</p>
                    <p className="text-xs text-muted-foreground">{item.serviceName}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QueueManagement;
