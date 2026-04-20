const Avatar = ({ src, name = "User" }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-10 h-10 rounded-full border-2 border-white shadow-warm-md overflow-hidden bg-accent-100 flex items-center justify-center">
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-accent-700 font-bold">{name[0]}</span>
        )}
      </div>
      <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/5 transition-colors" />
    </div>
  );
};

export default Avatar;