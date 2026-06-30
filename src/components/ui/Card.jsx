function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        border
        rounded-xl
        p-4
        shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
