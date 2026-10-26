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
                  Direct Composite Bonding (1-Yr Guarantee)
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">
                  E.max Porcelain Veneers (5-Yr Guarantee)
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">
                  Full Smile Makeovers (10–20 Teeth)
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-white transition-colors">
                  Diastema & Gap Closure
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-white transition-colors">
                  3Shape Trios® Digital Smile Simulation
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
                  All-Inclusive Hotel & Transfer Packages
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-white transition-colors">
                  Instant Price & Stay Calculator
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-white transition-colors">
                  Before & After Smile Stories
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-white transition-colors">
                  2-Day VIP Patient Journey
                </Link>
              </li>
              <li>
                <Link to="/aftercare" className="hover:text-white transition-colors">
                  Aftercare Protocol & Night Guards
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white transition-colors">
                  UK & International Patient FAQs
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
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <span>Certified Premium Medical-Grade Materials</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span>Flights Arranged Independently</span>
            <span className="text-slate-700 hidden sm:inline">·</span>
            <span>Patient Confidentiality & Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
