// src/sections/Hero/components/BrandLogos.jsx

const BrandLogos = ({ cards }) => {
  if (!cards || cards.length === 0) return null;

  // SVG path kontrolü yapan yardımcı fonksiyon
  const renderLogo = (badge, title) => {
    // Eğer badge bir SVG path ise
    if (badge && typeof badge === 'string' && badge.includes('<path')) {
      return (
        <svg 
          className="w-8 h-8" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d={badge.match(/d="([^"]+)"/)?.[1]} />
        </svg>
      );
    }
    
    // Eğer sadece path string'i ise (d attribute'u olmadan)
    if (badge && typeof badge === 'string' && badge.startsWith('M')) {
      return (
        <svg 
          className="w-8 h-8" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d={badge} />
        </svg>
      );
    }
    
    // Normal resim URL'si ise
    if (badge && typeof badge === 'string' && (badge.startsWith('http') || badge.startsWith('/'))) {
      return (
        <img
          src={badge}
          alt={title}
          className="w-8 h-8 object-contain"
        />
      );
    }
    
    // Fallback: İlk harfi göster
    return (
      <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-white text-sm font-bold">
        {title?.charAt(0)?.toUpperCase() || '?'}
      </div>
    );
  };

  return (
    <div className="px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 text-sm mb-8">Worked with</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-lg p-4 flex items-center gap-3 bg-black/20"
            >
              {renderLogo(card.badge, card.title)}
              <span className="text-gray-300 text-sm font-medium">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;