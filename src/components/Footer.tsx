import React from 'react';
import { DentHouseLogo } from './DentHouseLogo';
import { MessageCircle, Phone, MapPin, Mail, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <DentHouseLogo theme="dark" size="md" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mt-3">
              Dent House Marrakech is a premier center of excellence for cosmetic dentistry, premium porcelain veneers, and 2-day smile transformations designed specifically for selective UK & international patients.
            </p>
            <div className="pt-2 flex items-center gap-3 text-slate-300">
              <span className="flex items-center gap-1.5 text-[11px] font-medium">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                5-Year Veneers / 1-Year Bonding Warranty
              </span>

            </div>
          </div>

          {/* Treatments Col */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs mb-3">
              Cosmetic Treatments
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Premium Porcelain Veneers (5-Yr Warranty)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Composite Bonding (1-Yr Warranty + 6-Mo Checkup)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Trios® 3Shape Digital Intraoral Scanning
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Conservative Enamel-Preserving Protocol
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Zero Laser / Zero Over-Drilling Guarantee
                </a>
              </li>
            </ul>
          </div>

          {/* Packages & Journey Col */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs mb-3">
              Palmeraie Stay & Deals
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Palmeraie Suites (From £70/Night)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Bring 2 Guests for Free (Mid & Luxury)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Extra Nights at 50% OFF
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  The Duo Smile Holiday (Save 15%)
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  4 Included Chauffeur Shuttles
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs mb-3">
              UK & International Patient Desk
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Boulevard Mohammed V, Guéliz, Marrakech 40000, Morocco
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Concierge WhatsApp: +44 20 8092 6820</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Direct Line: +212 5 24 43 80 00</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white transition-colors cursor-pointer"
                >
                  Book Free Digital Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Dent House Marrakech. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Registered Medical Practice No. 49102-MA</span>
            <span className="text-slate-700">·</span>
            <span>Certified Premium Medical-Grade Materials</span>
            <span className="text-slate-700">·</span>
            <span>Flights Not Included</span>
            <span className="text-slate-700">·</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
