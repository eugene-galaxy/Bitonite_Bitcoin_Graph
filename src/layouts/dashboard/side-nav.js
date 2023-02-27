import { useState } from "react";
import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { items } from "./config";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import VisibilityIcon from "@mui/icons-material/Visibility";
const SIDE_NAV_WIDTH = 200;
const TOP_NAV_HEIGHT = 64;

export const SideNav = () => {
  const location = useLocation();
  const [status, setStatus] = useState(["total"]);
  const [visible, setVisible] = useState(true);
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
      <div
        style={{
          display: "grid",
          position: "absolute",
          bottom: 0,
          marginBottom: "20px",
          backgroundColor: "#1d1d1d",
          width: "165px",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            // height: "100%",
          }}
        >
          <span className="MuiTypography-root MuiTypography-h6 css-1m7jvl4-MuiTypography-root">
            {"Wallet"}
          </span>
          <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
            <div
              style={{
                color: "rgba(255, 255, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                marginRight: "3px",
                cursor: "pointer",
              }}
              onClick={() => setVisible((previous) => !previous)}
            >
              {visible ? (
                <VisibilityOffIcon sx={{ fontSize: "large" }} />
              ) : (
                <VisibilityIcon sx={{ fontSize: "large" }} />
              )}
            </div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                marginRight: "3px",
                cursor: "pointer",
              }}
              // onMouseOver="this.style.backgroundColor='rgba(255, 255, 255, 0.9)"
              onClick={() => setStatus("total")}
            >
              <KeyboardArrowLeftIcon sx={{ fontSize: "large" }} />
            </div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => setStatus("available")}
            >
              <KeyboardArrowRightIcon sx={{ fontSize: "large" }} />
            </div>
          </div>
        </div>
        <div
          style={{
            bottom: "0px",
            display: "grid",
            justifyContent: "flex-start",
          }}
        >
          <span
            className="MuiTypography-root css-10pvg4-MuiTypography-root"
            style={{
              fontSize: "10px",
              margin: "auto",
              marginLeft: "0px",
              marginBottom: "0px",
            }}
          >
            {status === "total" ? "Total Balance" : "Available Balance"}
          </span>
          <h6
            className="MuiTypography-root MuiTypography-h6 css-1m7jvl4-MuiTypography-root"
            style={{ margin: "auto", marginLeft: "0px", marginBottom: "0px" }}
          >
            {!visible ? "********" : status === "total" ? "1.0457 BTC" : "0.9457 BTC"}
          </h6>
          <span
            className="MuiTypography-root css-10pvg4-MuiTypography-root"
            style={{
              fontSize: "10px",
              margin: "auto",
              marginLeft: "0px",
              marginBottom: "0px",
            }}
          >
            ~${!visible ? "*******" : status === "total" ? "25052.15" : "22656.42"}
          </span>
        </div>
      </div>
    </Drawer>
  );
};
