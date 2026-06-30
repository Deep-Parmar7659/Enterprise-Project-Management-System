import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import useAuth from "../../hooks/useAuth";

function Dashboard() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <h2 className="text-xl font-semibold">Total Projects</h2>
          <p className="text-3xl mt-2">12</p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Total Tasks</h2>
          <p className="text-3xl mt-2">48</p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Team Members</h2>
          <p className="text-3xl mt-2">8</p>
        </Card>
      </div>
      <div className="mt-6">
        <Button>Create Project</Button>
      </div>
    </div>
  );
}

export default Dashboard;
