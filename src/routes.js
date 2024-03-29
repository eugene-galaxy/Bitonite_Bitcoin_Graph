import { Outlet } from "react-router-dom";
import { Layout as DashboardLayout } from "./layouts/dashboard/layout";
import IconsPage from "./pages/icons";
import NotFoundPage from "./pages/404";
import OrdersPage from "./pages/orders";
import ReportsPage from "./pages";
import SettingsPage from "./pages/settings";
import ThemePage from "./pages/theme";

export const routes = [
  {
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        path: "/dashboard",
        element: <SettingsPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        index: true,
        path: "/",
        element: <ReportsPage />,
      },
      {
        path: "theme",
        element: <ThemePage />,
      },
      {
        path: "icons",
        element: <IconsPage />,
      },
    ],
  },
  {
    path: "404",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
