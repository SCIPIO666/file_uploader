const InputField = ({ label, placeholder, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-semibold text-warm-700 ml-1">{label}</label>}
      <input 
        className="bg-warm-50 border border-warm-200 rounded-xl px-4 py-3 text-warm-900 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:bg-white transition-all shadow-inner-warm"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputField;