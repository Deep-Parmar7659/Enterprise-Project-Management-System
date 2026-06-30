function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
            w-full
            border
            rounded-lg
            px-3
            py-2
            outline-none
            focus:ring-2
          focus:ring-black
            ${className}
        `}
    />
  );
}

export default Input;
