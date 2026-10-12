import React, { useState } from 'react';
import { DentHouseLogo } from './DentHouseLogo';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Packages & Pricing', href: '#packages' },
    { label: '2-Day Journey', href: '#journey' },
    { label: 'Stain & Care Guide', href: '#clinical-care' },
    { label: 'The Clinic', href: '#clinic' },
    { label: 'UK FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text/brand mark */}
          <a href="#" className="flex items-center shrink-0 group py-1">
            <DentHouseLogo size="md" />
          </a>

          {/* Zone 2: 4-5 single-line clean text links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-[#0284C7] transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0284C7] transition-all group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white shrink-0 fill-white/20" />
              <span>Free WhatsApp Review</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
            </button>

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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-[#0284C7] hover:bg-sky-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
              <p className="text-center text-xs text-slate-500 pt-1">
                Fast response within 2 hours • Direct English speaking UK team
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
