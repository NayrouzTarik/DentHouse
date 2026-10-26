import React from 'react';
import { Link } from 'react-router-dom';
import { DentHouseLogo } from './DentHouseLogo';
import { MessageCircle, Phone, MapPin, Mail, ShieldCheck, Heart } from 'lucide-react';
import { getWhatsAppUrl, CLINIC_WHATSAPP_DISPLAY } from '../data/dentHouseData';

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
                <Link to="/treatments" className="hover:text-white transition-colors">
                  Premium Porcelain Veneers (5-Yr Warranty)
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">
                  Composite Bonding (1-Yr Warranty)
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-white transition-colors">
                  Trios® 3Shape Digital Intraoral Scanning
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">
                  Conservative Enamel-Preserving Care
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  Patient FAQs & Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages & Experience Col */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase tracking-wider text-xs mb-3">
              Packages & Experience
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/packages" className="hover:text-white transition-colors">
                  All-Inclusive Packages
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-white transition-colors">
                  Price & Stay Calculator
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-white transition-colors">
                  Smile Stories & Reviews
                </Link>
              </li>
              <li>
                <Link to="/aftercare" className="hover:text-white transition-colors">
                  Aftercare & Longevity Guide
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-white transition-colors">
                  2-Day Journey & Clinic
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  Patient FAQs & Support
                </Link>
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
                  Bd. Allal Al Fassi, Marrakech, Morocco
                </span>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Concierge WhatsApp: {CLINIC_WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href="tel:+212789668454"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Direct Line: {CLINIC_WHATSAPP_DISPLAY}</span>
              </a>
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello, I would like to request a free digital assessment at Dent House Marrakech.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 text-xs font-semibold rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white transition-colors cursor-pointer flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                  <span>Book Free Digital Assessment</span>
                </a>
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
