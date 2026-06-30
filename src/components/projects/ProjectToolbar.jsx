function ProjectToolbar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">
      <input
        type="text"
        placeholder="Search Projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg p-2"
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="asc">Name A-Z</option>
        <option value="desc">Name Z-A</option>
      </select>
    </div>
  );
}

export default ProjectToolbar;
