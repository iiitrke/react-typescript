"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { link } from "fs";

// import {} from "next-auth"
// import { Link } from "react-router-dom";

const enum IDS {
  PROFILE = "profile",
  SIGNUP = "signup",
  DASHBOARD = "dashboard",
  LOGOUT = "logout",
  LOGIN = "login",
}

interface IPages {
  name: string;
  link?: string;
}
const pages: IPages[] = [
  { name: "Home", link: "/" },
  { name: "Training", link: "training" },
  // { name: "Services", link: "development" },

  { name: "Software Development", link: "development" },
  { name: "Digital Marketing", link: "development" },
  { name: "About us", link: "about" },
];

const settings = [
  { id: IDS.PROFILE, name: "Profile", link: "/private" },
  { id: IDS.DASHBOARD, name: "Dashboard" },
  { id: IDS.LOGOUT, name: "Logout" },
  { id: IDS.LOGIN, name: "Login", link: "/login" },

  { id: IDS.SIGNUP, name: "Signup ", link: "/register" },
];

function AppBarFC() {
  const { data, status } = useSession();

  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e: React.FormEvent, item: any) => {
    e.preventDefault();

    console.log("ITEM", item);
    if (item === "backdropClick") {
      setAnchorElUser(null);
      return;
    }
    console.log(e.target, item.link);
    if (item.id === IDS.LOGOUT) {
      const result = signOut();
      result.then(() => {
        router.push("/");
        setIsLoggedIn(false);
      });

      return;
    }
    router.push(item.link);
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Itasca Technologies
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page: { name: string }) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Itasca Technologies
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {/* <Typography noWrap component="a" href="/about"> */}
                {/* <Link
                  href="/about"
                  color="inherit"
                  style={{ textDecoration: "none" }}
                > */}
                {/* <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={page.link!}
                >
                  {page.name}
                </Link> */}
                {/* </Link> */}
                {/* </Typography> */}
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* { id: IDS.PROFILE, name: "Profile", link: "/private" },
  { id: IDS.SIGNUP, name: "Signup ", link: "/register" },
  { id: IDS.DASHBOARD, name: "Dashboard" },
  { id: IDS.LOGOUT, name: "Logout" },
  { id: IDS.LOGIN, name: "Login", link: "/login" }, */}
              {isLoggedIn && (
                <MenuItem
                  key={settings[0].id}
                  onClick={(e) => {
                    handleCloseUserMenu(e, settings[0]);
                  }}
                >
                  <Typography textAlign="center">{settings[0].name}</Typography>
                </MenuItem>
              )}

              {isLoggedIn && (
                <MenuItem
                  key={settings[1].id}
                  onClick={(e) => {
                    handleCloseUserMenu(e, settings[1]);
                  }}
                >
                  <Typography textAlign="center">{settings[1].name}</Typography>
                </MenuItem>
              )}

              {isLoggedIn && (
                <MenuItem
                  key={settings[2].id}
                  onClick={(e) => {
                    handleCloseUserMenu(e, settings[2]);
                  }}
                >
                  <Typography textAlign="center">{settings[2].name}</Typography>
                </MenuItem>
              )}

              {!isLoggedIn && (
                <MenuItem
                  key={settings[3].id}
                  onClick={(e) => {
                    handleCloseUserMenu(e, settings[3]);
                  }}
                >
                  <Typography textAlign="center">{settings[3].name}</Typography>
                </MenuItem>
              )}
              {!isLoggedIn && (
                <MenuItem
                  key={settings[4].id}
                  onClick={(e) => {
                    handleCloseUserMenu(e, settings[4]);
                  }}
                >
                  <Typography textAlign="center">{settings[4].name}</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export { AppBarFC };
