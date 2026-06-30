import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import AuthLayout from "../../layouts/AuthLayout";
import DashboardLayout from "../../layouts/DashboardLayout";

import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";

import Dashboard from "../../pages/dashboard/Dashboard";
import Projects from "../../pages/projects/Projects";
import Tasks from "../../pages/tasks/Tasks";
import Teams from "../../pages/teams/Teams";
import Reports from "../../pages/reports/Reports";
import Settings from "../../pages/settings/Settings";

import NotFound from "../../pages/NotFound";

import ProtectedRoute from "../../routes/ProtectedRoute";
import PublicRoute from "../../routes/PublicRoute";

import Unauthorized from "../../pages/Unauthorized";

import RoleGuard from "../../routes/RoleGuard";
import { ROLES } from "../../constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: (
              <PublicRoute>
                <Login />
              </PublicRoute>
            ),
          },
          {
            path: "register",
            element: (
              <PublicRoute>
                <Register />
              </PublicRoute>
            ),
          },
        ],
      },

      {
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            element: (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            ),
          },
          {
            path: "projects",
            element: (
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            ),
          },
          {
            path: "tasks",
            element: (
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            ),
          },
          {
            path: "teams",
            element: (
              <ProtectedRoute>
                <RoleGuard allowedRoles={[ROLES.ADMIN, ROLES.MANAGER]}>
                  <Teams />
                </RoleGuard>
              </ProtectedRoute>
            ),
          },
          {
            path: "reports",
            element: (
              <ProtectedRoute>
                <RoleGuard allowedRoles={[ROLES.ADMIN]}>
                  <Reports />
                </RoleGuard>
              </ProtectedRoute>
            ),
          },
          {
            path: "settings",
            element: (
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            ),
          },
          {
            path: "*",
            element: (
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            ),
          },
          {
            path: "unauthorized",
            element: <Unauthorized />,
          },
        ],
      },
    ],
  },
]);

export default router;
