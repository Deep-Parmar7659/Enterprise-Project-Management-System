function AuthCard({ title, children }) {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">EPMS</h2>
        <p className="text-gray-500">Enterprise Project Management System</p>
      </div>

      <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
      {children}
    </div>
  );
}

export default AuthCard;
