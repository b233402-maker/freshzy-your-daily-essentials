import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { footerLinks } from '@/data/dummyData';
import freshzyLogo from '@/assets/freshzy-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={freshzyLogo} alt="Freshzy" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-background/70 mb-4">
              বাংলাদেশের সেরা সেলুন ও লন্ড্রি সার্ভিস প্ল্যাটফর্ম। আপনার কাছের সেবা খুঁজুন এবং সহজেই বুকিং করুন।
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="tel:16262" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                <span>১৬২৬২ (হেল্পলাইন)</span>
              </a>
              <a href="mailto:info@freshzy.com.bd" className="flex items-center gap-2 text-background/70 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@freshzy.com.bd</span>
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>বাড়ি ১২, রোড ৫, গুলশান-১, ঢাকা ১২১২</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">কোম্পানি</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h4 className="font-semibold mb-4">পার্টনার</h4>
            <ul className="space-y-2">
              {footerLinks.partners.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">আইনি</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">সাহায্য</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* App Download Banner */}
      <div className="bg-primary py-6">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-primary-foreground">অ্যাপ ডাউনলোড করুন</h3>
            <p className="text-sm text-primary-foreground/80">সহজে অর্ডার করুন মোবাইল অ্যাপে</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-12 px-6 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </button>
            <button className="h-12 px-6 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5S6 2.67 6 3.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zM16.5 12L6 3.5v17l10.5-8.5zm-1.4 0l-6.6 5.25V6.75L15.1 12zM21 12l-5.5 4.5v-9L21 12z"/>
              </svg>
              Play Store
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-background/60">
          <p>© ২০২৫ Freshzy। সর্বস্বত্ব সংরক্ষিত।</p>
          <p>বাংলাদেশে ❤️ দিয়ে তৈরি</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
