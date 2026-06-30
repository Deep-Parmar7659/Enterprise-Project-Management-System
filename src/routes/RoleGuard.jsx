import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RoleGuard({ children, allowedRoles }) {
  const { user } = useAuth();

  const hasAccess = allowedRoles.includes(user?.role);

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default RoleGuard;
