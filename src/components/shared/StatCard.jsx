import Card from "../ui/Card";

function StatCard({ title, value, subtitle = "", className = "" }) {
  return (
    <Card className={className}>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>

      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>

      {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
    </Card>
  );
}

export default StatCard;
