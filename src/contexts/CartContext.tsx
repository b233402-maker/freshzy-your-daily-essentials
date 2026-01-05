import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Service, Vendor, vendors } from '@/data/dummyData';

export interface CartItem extends Service {
  quantity: number;
  vendorId: string;
}

interface CartContextType {
  items: CartItem[];
  vendorId: string | null;
  vendor: Vendor | null;
  addItem: (service: Service, vendorId: string) => void;
  removeItem: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (serviceId: string) => number;
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [vendorId, setVendorId] = useState<string | null>(null);

  const vendor = vendorId ? vendors.find(v => v.id === vendorId) || null : null;

  const addItem = useCallback((service: Service, newVendorId: string) => {
    setItems(prev => {
      // If cart has items from different vendor, clear cart first
      if (vendorId && vendorId !== newVendorId) {
        setVendorId(newVendorId);
        return [{ ...service, quantity: 1, vendorId: newVendorId }];
      }

      setVendorId(newVendorId);
      
      const existing = prev.find(item => item.id === service.id);
      if (existing) {
        return prev.map(item =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...service, quantity: 1, vendorId: newVendorId }];
    });
  }, [vendorId]);

  const removeItem = useCallback((serviceId: string) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === serviceId);
      if (existing && existing.quantity > 1) {
        return prev.map(item =>
          item.id === serviceId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      const newItems = prev.filter(item => item.id !== serviceId);
      if (newItems.length === 0) {
        setVendorId(null);
      }
      return newItems;
    });
  }, []);

  const updateQuantity = useCallback((serviceId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => {
        const newItems = prev.filter(item => item.id !== serviceId);
        if (newItems.length === 0) {
          setVendorId(null);
        }
        return newItems;
      });
    } else {
      setItems(prev =>
        prev.map(item =>
          item.id === serviceId ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setVendorId(null);
  }, []);

  const getItemQuantity = useCallback((serviceId: string) => {
    return items.find(item => item.id === serviceId)?.quantity || 0;
  }, [items]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = vendor?.type === 'laundry' ? 30 : 0;
  const serviceFee = Math.round(subtotal * 0.05); // 5% service fee
  const total = subtotal + deliveryFee + serviceFee;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        vendorId,
        vendor,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemQuantity,
        subtotal,
        deliveryFee,
        serviceFee,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
