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
  LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { navItems } from '@/data/dummyData';
import { userProfile } from '@/data/orderData';
import freshzyLogo from '@/assets/freshzy-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  // Simulating logged in state - in real app this would come from auth context
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

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
                      <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {userProfile.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline text-sm font-medium max-w-[100px] truncate">
                      {userProfile.name.split(' ')[0]}
                    </span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-background border shadow-lg z-50">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{userProfile.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {userProfile.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center cursor-pointer">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
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
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard/profile" className="flex items-center cursor-pointer">
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
                      <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {userProfile.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{userProfile.name}</p>
                      <p className="text-xs text-muted-foreground">{userProfile.email}</p>
                    </div>
                  </div>

                  {/* Dashboard Links - Mobile */}
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <LayoutDashboard className="h-5 w-5 text-primary" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link
                    to="/dashboard/orders/active"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span className="font-medium">My Orders</span>
                  </Link>
                  <Link
                    to="/dashboard/profile"
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
