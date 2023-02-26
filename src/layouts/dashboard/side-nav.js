import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { items } from "./config";

const SIDE_NAV_WIDTH = 200;
const TOP_NAV_HEIGHT = 64;

export const SideNav = () => {
  const location = useLocation();

  return (
    <Drawer
      open
      variant="persistent"
      PaperProps={{
        sx: {
          backgroundColor: "#0e0e0e",
          display: "flex",
          flexDirection: "column",
          height: `calc(100% - ${TOP_NAV_HEIGHT}px)`,
          p: 2,
          top: TOP_NAV_HEIGHT,
          width: SIDE_NAV_WIDTH,
          zIndex: (theme) => theme.zIndex.appBar - 100,
        },
      }}
    >
      <List sx={{ width: "100%" }}>
        {items.map((item, index) => {
          const active = matchPath({ path: item.href, end: true }, location.pathname);

          return (
            <ListItem
              disablePadding
              component={RouterLink}
              key={index}
              to={item.href}
              sx={{
                flexDirection: "row",
                px: 2,
                py: 1.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                  color: active ? "primary.main" : "neutral.400",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  variant: "caption",
                  sx: {
                    paddingLeft: "1em",
                    color: active ? "primary.main" : "text.secondary",
                  },
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
