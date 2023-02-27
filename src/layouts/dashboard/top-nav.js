import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Link, Stack, Typography } from "@mui/material";
import { Logo } from "src/components/logo";

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
          className="MuiTypography-root css-10pvg4-MuiTypography-root"
          style={{
            fontSize: "10px",
            // marginLeft: "0px",
            marginRight: "15px",
            marginBottom: "0px",
          }}
        >
          Total Balance
        </span>
        <span
          className="MuiTypography-root css-10pvg4-MuiTypography-root"
          style={{
            fontSize: "10px",
            marginLeft: "0px",
            marginRight: "15px",
            marginBottom: "0px",
          }}
        >
          Academy
        </span>
        <span
          className="MuiTypography-root css-10pvg4-MuiTypography-root"
          style={{
            fontSize: "10px",
            marginRight: "10px",
            marginBottom: "0px",
            marginLeft: "0px",
          }}
        >
          Blog
        </span>
      </Stack>
      <Stack alignItems="center" direction="row" spacing={2}>
        {/* <Link
          color="inherit"
          href="https://mui.com/store/items/carpatin-dashboard"
          target="_blank"
          variant="body2"
        >
          See Pro Version
        </Link> */}
        <Avatar src="/assets/avatars/avatar.jpg" />
      </Stack>
    </Stack>
  </Box>
);
