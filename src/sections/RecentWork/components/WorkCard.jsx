const WorkCard = ({ title, description, image }) => {
  return (
    <div className="space-y-4">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full shadow-md"
      />
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <button className="bg-[#3F8E00] hover:bg-[#348e00cb] text-white px-5 py-2 text-sm font-semibold rounded shadow">
        Know more &gt;
      </button>
    </div>
  );
};

export default WorkCard;

          