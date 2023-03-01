import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Link, Stack, Typography } from "@mui/material";
import { Logo } from "src/components/logo";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
const TOP_NAV_HEIGHT = 64;

export const TopNav = () => (
  <Box
    component="header"
    sx={{
      backgroundColor: "neutral.top_nav",
      color: "common.white",
      position: "fixed",
      width: "100%",
      zIndex: (theme) => theme.zIndex.appBar,
    }}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        minHeight: TOP_NAV_HEIGHT,
        px: 3,
      }}
    >
      <Stack alignItems="center" direction="row" spacing={3}>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: "inline-flex",
            height: 24,
            width: 24,
          }}
        >
          <Logo />
        </Box>
        <Typography variant="subtitle2">BITONITE</Typography>
        <span
          style={{
            marginRight: "15px",
            marginBottom: "0px",
            fontSize: "10px",
            fontWeight: "600",
            lineHeight: "1.5",
            fontFamily: "Inter,sans-serif",
            color: "rgb(102, 112, 133)",
          }}
        >
          Portal
        </span>
        <span
          style={{
            marginRight: "15px",
            marginBottom: "0px",
            fontSize: "10px",
            fontWeight: "600",
            lineHeight: "1.5",
            fontFamily: "Inter,sans-serif",
            color: "rgb(102, 112, 133)",
          }}
        >
          Academy
        </span>
        <span
          style={{
            marginRight: "15px",
            marginBottom: "0px",
            fontSize: "10px",
            fontWeight: "600",
            lineHeight: "1.5",
            fontFamily: "Inter,sans-serif",
            color: "rgb(102, 112, 133)",
          }}
        >
          Blog
        </span>
        <span
          style={{
            marginRight: "15px",
            marginBottom: "0px",
            fontSize: "10px",
            fontWeight: "600",
            lineHeight: "1.5",
            fontFamily: "Inter,sans-serif",
            color: "rgb(102, 112, 133)",
          }}
        >
          ...
        </span>
      </Stack>
      <Stack alignItems="center" direction="row" spacing={2}>
        <AllInboxOutlinedIcon sx={{ color: "rgb(102, 112, 133)", fontSize: "large" }} />
        <Avatar src="/assets/avatars/avatar.jpg" sx={{ width: "30px", height: "30px" }} />
      </Stack>
    </Stack>
  </Box>
);
