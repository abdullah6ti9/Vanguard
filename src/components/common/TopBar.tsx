import React from 'react';
import { Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden lg:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: LICENSE & VERIFICATION */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-amber-400 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Licensed & Insured: {businessInfo.licenseNumber}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>Serving {businessInfo.address.city} & Surrounding Counties</span>
          </div>
        </div>

        {/* RIGHT: HOURS & DIRECT PHONE */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Mon-Fri: {businessInfo.businessHours.weekdays}</span>
          </div>
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex items-center space-x-1.5 font-bold text-white hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
            <span>Direct: {businessInfo.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
