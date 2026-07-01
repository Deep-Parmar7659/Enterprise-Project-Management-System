function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",

    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",

    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4
        py-2
        rounded-lg
        transition
        duration-200
        font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
