// src/sections/Hero/components/BrandLogos.jsx
//worked with logoları

import React from 'react';

const BrandLogos = () => {
  return (
    <div className="px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 text-sm mb-8">Worked with</p>
        <div className="flex items-center justify-between opacity-60 flex-wrap gap-4">
          {/* Her bir logo bileşeni tek div içinde */}
          {[
            { name: 'ClickUp', color: '#7B68EE', svg: <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" /> },
            { name: 'Dropbox', color: '#0061FF', svg: <path d="M7.71 2.51L2.26 6.24l5.45 3.73L12.97 6.24 7.71 2.51zM2.26 13.76l5.45 3.73 5.26-3.73-5.45-3.73L2.26 13.76zM16.29 2.51L12.97 6.24l5.26 3.73 5.45-3.73L16.29 2.51zM21.74 13.76l-5.45 3.73-5.26-3.73 5.45-3.73L21.74 13.76z" /> },
            { name: 'PAYCHEX', color: '#FF6B35', svg: (<><circle cx="12" cy="12" r="10" fill="#FF6B35" /><path d="M8 8h8v8H8z" fill="white" /></>) },
            { name: 'elastic', color: '#005571', svg: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /> },
            { name: 'stripe', color: '#635BFF', svg: <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.605-2.19 1.605-1.92 0-4.633-.918-6.562-1.895L4 21.735c1.739.746 4.413 1.265 7.688 1.265 2.684 0 4.873-.7 6.414-2.038 1.535-1.329 2.314-3.158 2.314-5.432 0-3.988-2.512-5.833-6.44-7.36z" /> }
          ].map(({ name, color, svg }, i) => (
            <div key={i} className="border border-gray-700 rounded-md p-2 flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                {React.cloneElement(svg, { fill: color })}
              </svg>
              <span className="text-gray-500 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
