const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyles = "px-6 py-2.5 rounded-xl font-medium transition-all duration-200 active:scale-95 shadow-warm-sm hover:shadow-warm-md";
  const variants = {
    primary: "bg-accent-600 text-white hover:bg-accent-700 focus:ring-4 focus:ring-accent-200",
    secondary: "bg-white text-warm-700 border border-warm-200 hover:bg-warm-50",
    outline: "bg-transparent border-2 border-accent-600 text-accent-600 hover:bg-accent-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;