import { useState } from "react";
import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
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
          p: 1.5,
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
                py: 0.8,
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
      <div style={{ position: "absolute", bottom: 0, width: "165px", marginBottom: "10px" }}>
        <div
          style={{
            display: "grid",
            marginBottom: "10px",
            backgroundColor: "#1d1d1d",
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
            <span
              style={{
                margin: "0",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "1.5",
                fontFamily: "Inter,sans-serif",
              }}
            >
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
              style={{
                margin: "auto",
                marginLeft: "0px",
                marginBottom: "0px",
                fontSize: "10px",
                fontWeight: "600",
                lineHeight: "1.5",
                fontFamily: "Inter,sans-serif",
                color: "rgb(102, 112, 133)",
              }}
            >
              {status === "total" ? "Total Balance" : "Available Balance"}
            </span>
            <h6
              style={{
                margin: "auto",
                marginLeft: "0px",
                marginBottom: "0px",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "1.5",
                fontFamily: "Inter,sans-serif",
              }}
            >
              {!visible ? "********" : status === "total" ? "1.0457 BTC" : "0.9457 BTC"}
            </h6>
            <span
              style={{
                margin: "auto",
                marginLeft: "0px",
                marginBottom: "0px",
                fontSize: "10px",
                fontWeight: "600",
                lineHeight: "1.5",
                fontFamily: "Inter,sans-serif",
                color: "rgb(102, 112, 133)",
              }}
            >
              ~${!visible ? "*******" : status === "total" ? "25052.15" : "22656.42"}
            </span>
          </div>
        </div>
        <span
          style={{
            margin: "auto",
            marginLeft: "0px",
            marginBottom: "0px",
            fontSize: "10px",
            fontWeight: "600",
            lineHeight: "1.5",
            fontFamily: "Inter,sans-serif",
            color: "rgb(102, 112, 133)",
          }}
        >
          © 2023 Bitonite. Version 1.01 Bitonite is used to under license.
        </span>
      </div>
    </Drawer>
  );
};
