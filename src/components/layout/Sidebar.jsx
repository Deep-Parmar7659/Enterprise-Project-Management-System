import { NavLink } from "react-router-dom";

import { SIDEBAR_LINKS } from "../../constants/sidebarLinks";
import useAuth from "../../hooks/useAuth";

function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 border-r bg-white h-full">
      <nav className="p-4">
        <ul className="space-y-3">
          {SIDEBAR_LINKS.filter((link) => link.roles.includes(user?.role)).map(
            (link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "block bg-black text-white px-3 py-2 rounded"
                      : "block px-3 py-2"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
