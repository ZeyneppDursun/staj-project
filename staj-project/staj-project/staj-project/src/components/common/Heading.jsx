//components/common/Heading.jsx

const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : ''}>
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default Heading;
