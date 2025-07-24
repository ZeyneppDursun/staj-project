import Avatar from '../../../components/common/Avatar';

const TestimonialCard = ({ name, text, image}) => {
  return (
    <div className="relative border border-gray-700 rounded-xl p-6 bg-zinc-900">
      {/* Tırnak işareti */}
      <div className="text-6xl text-white absolute top-0 left-4 drop-shadow-[0_2px_4px_rgba(98,186,27,0.5)]">
        “
      </div>

      {/* Yorum metni */}
      <p className="text-sm text-gray-300 mt-12 mb-6 leading-relaxed">
        {text}
      </p>

      {/* Avatar ve isim */}
      <div className="flex items-center space-x-4">
        <Avatar src={image} alt={name} />
        <p name="font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
