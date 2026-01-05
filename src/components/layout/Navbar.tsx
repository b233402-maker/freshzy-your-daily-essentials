import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  ChevronDown, 
  User, 
  LayoutDashboard, 
  ShoppingBag, 
  MapPinned, 
  Settings, 
  LogOut,
  Bike,
  Store
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { navItems } from '@/data/dummyData';
import { userProfile } from '@/data/orderData';
import { riderProfile } from '@/data/riderData';
import { ownerVendor } from '@/data/ownerData';
import freshzyLogo from '@/assets/freshzy-logo.png';

// Simulating user roles - in real app this would come from auth context
type UserRole = 'customer' | 'rider' | 'owner';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  // Simulating logged in state - in real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentRole, setCurrentRole] = useState<UserRole>('customer');
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentRole('customer');
  };

  const switchRole = (role: UserRole) => {
    setCurrentRole(role);
  };

  const getCurrentProfile = () => {
    switch (currentRole) {
      case 'rider':
        return { name: riderProfile.name, avatar: riderProfile.avatar, email: riderProfile.email };
      case 'owner':
        return { name: ownerVendor.name, avatar: ownerVendor.image, email: ownerVendor.phone };
      default:
        return { name: userProfile.name, avatar: userProfile.avatar, email: userProfile.email };
    }
  };

  const getDashboardPath = () => {
    switch (currentRole) {
      case 'rider':
        return '/rider';
      case 'owner':
        return '/owner';
      default:
        return '/dashboard';
    }
  };

  const profile = getCurrentProfile();

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={freshzyLogo} alt="Freshzy" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Location Selector - Desktop */}
          <button
            onClick={() => setShowLocation(!showLocation)}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light hover:bg-primary/10 transition-colors"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">ঢাকা, বাংলাদেশ</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Phone - Desktop */}
            <a
              href="tel:+8801712345678"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>১৬২৬২</span>
            </a>

            {/* User Menu - Desktop */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden sm:flex items-center gap-2 px-2">
                    <Avatar className="h-8 w-8 border-2 border-primary/20">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {profile.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline text-sm font-medium max-w-[100px] truncate">
                      {profile.name.split(' ')[0]}
                    </span>
                    <Badge variant="outline" className="hidden md:flex text-xs capitalize">
                      {currentRole === 'customer' ? 'গ্রাহক' : currentRole === 'rider' ? 'রাইডার' : 'মালিক'}
                    </Badge>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 bg-background border shadow-lg z-50">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{profile.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {profile.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  {/* Role Switcher */}
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-xs text-muted-foreground">
                      অ্যাকাউন্ট পরিবর্তন করুন
                    </DropdownMenuLabel>
                    <DropdownMenuItem 
                      onClick={() => switchRole('customer')}
                      className={`cursor-pointer ${currentRole === 'customer' ? 'bg-primary/10' : ''}`}
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span>গ্রাহক অ্যাকাউন্ট</span>
                      {currentRole === 'customer' && <Badge className="ml-auto" variant="secondary">সক্রিয়</Badge>}
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => switchRole('rider')}
                      className={`cursor-pointer ${currentRole === 'rider' ? 'bg-primary/10' : ''}`}
                    >
                      <Bike className="mr-2 h-4 w-4" />
                      <span>রাইডার অ্যাকাউন্ট</span>
                      {currentRole === 'rider' && <Badge className="ml-auto" variant="secondary">সক্রিয়</Badge>}
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => switchRole('owner')}
                      className={`cursor-pointer ${currentRole === 'owner' ? 'bg-primary/10' : ''}`}
                    >
                      <Store className="mr-2 h-4 w-4" />
                      <span>মালিক অ্যাকাউন্ট</span>
                      {currentRole === 'owner' && <Badge className="ml-auto" variant="secondary">সক্রিয়</Badge>}
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem asChild>
                    <Link to={getDashboardPath()} className="flex items-center cursor-pointer">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  
                  {currentRole === 'customer' && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard/orders/active" className="flex items-center cursor-pointer">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          <span>My Orders</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard/addresses" className="flex items-center cursor-pointer">
                          <MapPinned className="mr-2 h-4 w-4" />
                          <span>Saved Addresses</span>
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  
                  <DropdownMenuItem asChild>
                    <Link to={`${getDashboardPath()}/settings`} className="flex items-center cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="text-destructive focus:text-destructive cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" className="hidden sm:flex" onClick={() => setIsLoggedIn(true)}>
                <User className="w-4 h-4 mr-1" />
                লগইন
              </Button>
            )}

            {/* CTA Button */}
            <Button variant="hero" size="sm" className="hidden md:flex">
              অ্যাপ ডাউনলোড করুন
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {/* Location - Mobile */}
            <button className="flex items-center gap-2 w-full px-4 py-3 rounded-lg bg-primary-light mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">ঢাকা, বাংলাদেশ</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
            </button>

            {/* Nav Links - Mobile */}
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 pt-4 border-t border-border space-y-2">
              {isLoggedIn ? (
                <>
                  {/* User Info - Mobile */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-lg mb-3">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {profile.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{profile.name}</p>
                      <p className="text-xs text-muted-foreground">{profile.email}</p>
                    </div>
                    <Badge variant="outline" className="text-xs capitalize">
                      {currentRole === 'customer' ? 'গ্রাহক' : currentRole === 'rider' ? 'রাইডার' : 'মালিক'}
                    </Badge>
                  </div>

                  {/* Role Switcher - Mobile */}
                  <div className="flex gap-2 mb-3 px-1">
                    <Button 
                      variant={currentRole === 'customer' ? 'default' : 'outline'} 
                      size="sm" 
                      className="flex-1"
                      onClick={() => switchRole('customer')}
                    >
                      <User className="w-4 h-4 mr-1" />
                      গ্রাহক
                    </Button>
                    <Button 
                      variant={currentRole === 'rider' ? 'default' : 'outline'} 
                      size="sm" 
                      className="flex-1"
                      onClick={() => switchRole('rider')}
                    >
                      <Bike className="w-4 h-4 mr-1" />
                      রাইডার
                    </Button>
                    <Button 
                      variant={currentRole === 'owner' ? 'default' : 'outline'} 
                      size="sm" 
                      className="flex-1"
                      onClick={() => switchRole('owner')}
                    >
                      <Store className="w-4 h-4 mr-1" />
                      মালিক
                    </Button>
                  </div>

                  {/* Dashboard Links - Mobile */}
                  <Link
                    to={getDashboardPath()}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <LayoutDashboard className="h-5 w-5 text-primary" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  
                  {currentRole === 'customer' && (
                    <Link
                      to="/dashboard/orders/active"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <ShoppingBag className="h-5 w-5 text-primary" />
                      <span className="font-medium">My Orders</span>
                    </Link>
                  )}
                  
                  <Link
                    to={`${getDashboardPath()}/settings`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Settings className="h-5 w-5 text-primary" />
                    <span className="font-medium">Settings</span>
                  </Link>

                  <Button 
                    variant="outline" 
                    className="w-full text-destructive border-destructive/30 hover:bg-destructive/10"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Log out
                  </Button>
                </>
              ) : (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setIsLoggedIn(true);
                    setIsOpen(false);
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  লগইন / সাইন আপ
                </Button>
              )}
              <Button variant="hero" className="w-full">
                অ্যাপ ডাউনলোড করুন
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
