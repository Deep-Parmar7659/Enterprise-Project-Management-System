function EmptyState({ title }) {
  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-gray-500 mt-2">No data available</p>
    </div>
  );
}

export default EmptyState;
