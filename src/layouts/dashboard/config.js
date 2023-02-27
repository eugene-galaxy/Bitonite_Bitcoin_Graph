import ChartPieIcon from "@heroicons/react/24/solid/CircleStackIcon";
import CogIcon from "@heroicons/react/24/solid/RssIcon";
import DocumentTextIcon from "@heroicons/react/24/solid/UserPlusIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/solid/ExclamationTriangleIcon";
import ShoppingCartIcon from "@heroicons/react/24/solid/SquaresPlusIcon";
import StarIcon from "@heroicons/react/24/solid/RectangleStackIcon";
import { SvgIcon } from "@mui/material";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
export const items = [
  {
    href: "/dashboard",
    icon: (
      <SvgIcon>
        <ChartPieIcon />
      </SvgIcon>
    ),
    label: "Dashboard",
  },
  {
    href: "/orders",
    icon: (
      <SvgIcon>
        <ShoppingCartIcon />
      </SvgIcon>
    ),
    label: "Portfolio",
  },
  {
    href: "/",
    icon: (
      <SvgIcon>
        <SignalCellularAltOutlinedIcon />
      </SvgIcon>
    ),
    label: "Stats",
  },
  {
    href: "/theme",
    icon: (
      <SvgIcon>
        <DocumentTextIcon />
      </SvgIcon>
    ),
    label: "Select Trader",
  },
  {
    href: "/icons",
    icon: (
      <SvgIcon>
        <StarIcon />
      </SvgIcon>
    ),
    label: "Ranks",
  },
  {
    href: "/404",
    label: "HELPER CENTER",
  },
  {
    href: "/404",
    label: "Contact Support",
  },
  {
    href: "/404",
    label: "Report Bug",
  },
];
