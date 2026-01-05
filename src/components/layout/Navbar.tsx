import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/data/dummyData';
import freshzyLogo from '@/assets/freshzy-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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

            {/* Login Button */}
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4 mr-1" />
              লগইন
            </Button>

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
              <Button variant="outline" className="w-full">
                <User className="w-4 h-4 mr-2" />
                লগইন / সাইন আপ
              </Button>
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
