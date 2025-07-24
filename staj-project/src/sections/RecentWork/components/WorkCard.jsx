// src/sections/RecentWork/components/WorkCard.jsx
const WorkCard = ({ title, description, image, button }) => {
  return (
    <div className="space-y-4">
      {/* Görsel */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full max-w-full h-auto rounded-xl shadow"
        />
      )}

      {/* Başlık */}
      {title && <h3 className="font-semibold text-lg">{title}</h3>}

      {/* Açıklama */}
      {description && (
        <p className="text-gray-600 text-sm">{description}</p>
      )}

      {/* Buton */}
      <button className="bg-[#3F8E00] hover:bg-[#348e00cb] text-white px-5 py-2 text-sm font-semibold rounded shadow">
        {button || "Know more >"}
      </button>
    </div>
  );
};

export default WorkCard;
