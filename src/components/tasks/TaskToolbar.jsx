import { TASK_PRIORITY, PROJECT_STATUS } from "../../constants";

function TaskToolbar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 rounded-xl border bg-white p-4 shadow-sm md:grid-cols-4">
      {/* Search */}

      <input
        type="text"
        placeholder="Search Task..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="rounded-lg border p-2"
      />

      {/* Status */}

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="rounded-lg border p-2"
      >
        <option value="All">All Status</option>

        <option value={PROJECT_STATUS.PENDING}>Pending</option>

        <option value={PROJECT_STATUS.IN_PROGRESS}>In Progress</option>

        <option value={PROJECT_STATUS.COMPLETED}>Completed</option>
      </select>

      {/* Priority */}

      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="rounded-lg border p-2"
      >
        <option value="All">All Priority</option>

        <option value={TASK_PRIORITY.HIGH}>High</option>

        <option value={TASK_PRIORITY.MEDIUM}>Medium</option>

        <option value={TASK_PRIORITY.LOW}>Low</option>
      </select>

      {/* Sort */}

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="rounded-lg border p-2"
      >
        <option value="asc">A → Z</option>

        <option value="desc">Z → A</option>
      </select>
    </div>
  );
}

export default TaskToolbar;
