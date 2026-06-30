import Card from "../ui/Card";

function StatCard({
  title,
  value,
  subtitle = "",
  icon: Icon,
  iconColor = "text-blue-600",
  iconBackground = "bg-blue-100",
}) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>

          <p className="mt-3 text-3xl font-bold text-gray-900">{value}</p>

          {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
        </div>

        {Icon && (
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBackground}`}
          >
            <Icon size={28} className={iconColor} />
          </div>
        )}
      </div>
    </Card>
  );
}

export default StatCard;
