import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DentHouseLogo } from './DentHouseLogo';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/dentHouseData';

interface NavbarProps {
  onOpenConsultation?: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Treatments', path: '/treatments' },
    { label: 'Packages', path: '/packages' },
    { label: 'Calculator', path: '/calculator' },
    { label: 'Smile Stories', path: '/stories' },
    { label: 'Journey & Clinic', path: '/journey' },
    { label: 'FAQs', path: '/faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text/brand mark */}
          <Link to="/" className="flex items-center shrink-0 group py-1">
            <DentHouseLogo size="md" />
          </Link>

          {/* Zone 2: clean text links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `whitespace-nowrap transition-colors py-1 relative group ${
                    isActive
                      ? 'text-[#0284C7] font-semibold'
                      : 'text-slate-600 hover:text-[#0284C7]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#0284C7] rounded-full transition-all ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl("Hello, I would like to request a free consultation at Dent House Marrakech.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white shrink-0 fill-white/20" />
              <span>Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 md:hidden rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#0284C7] bg-sky-50 font-bold'
                      : 'text-slate-700 hover:text-[#0284C7] hover:bg-sky-50/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl("Hello, I would like to request a free consultation at Dent House Marrakech.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-center text-xs text-slate-500 pt-1">
                Fast response within 2 hours • Dedicated UK & International patient concierge
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
