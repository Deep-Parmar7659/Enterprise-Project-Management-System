import DashboardWelcome from "../../components/dashboard/DashboardWelcome";
import DashboardStats from "../../components/dashboard/DashboardStats";
import DashboardProgress from "../../components/dashboard/DashboardProgress";
import DashboardActivity from "../../components/dashboard/DashboardActivity";
import DashboardDeadlines from "../../components/dashboard/DashboardDeadlines";
import DashboardQuickActions from "../../components/dashboard/DashboardQuickActions";

function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardWelcome />

      <DashboardStats />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardProgress />
        <DashboardActivity />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DashboardDeadlines />
        <DashboardQuickActions />
      </div>
    </div>
  );
}

export default Dashboard;
