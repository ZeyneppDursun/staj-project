//components/common/Avatar.jsx

const Avatar = ({ src, alt = 'Avatar', size = 48 }) => (
  <img
    src={src}
    alt={alt}
    className={`rounded-full object-cover`}
    style={{ width: `${size}px`, height: `${size}px` }}
  />
);

export default Avatar;
