import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  IconButton,
  ListItemIcon,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import InputBase from "@mui/material/InputBase";
import { useRouter } from "next/router";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Divider from "@mui/material/Divider";

import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const pages = ["Pokemons", "Generations", "Items", "About", "Users"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this state
  const [nestedAnchorEl1, setNestedAnchorEl1] = React.useState(null);
  const [nestedOpen1, setNestedOpen1] = React.useState(false);
  const [userName, setUserName] = useState("");

  const open = Boolean(anchorEl);
  const router = useRouter();

  useEffect(() => {
    // Simulate checking if user is logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setIsLoggedIn(true);
      setUserName(user.firstName);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const isScrolling = currentScrollY > 0;
        setIsScrolled(isScrolling);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Event handler for menu item click
  const handleMenuItemClick = (menuItemName) => {
    // Construct the route dynamically using the menu item name
    const route = `/${menuItemName.toLowerCase()}`; // Assuming menu item names are in lowercase
    router.push(route);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileItemClick = (event) => {
    setNestedAnchorEl1(event.currentTarget);
    setNestedOpen1(!nestedOpen1);
  };

  const homeClick = () => {
    // Define the URL you want to navigate to
    const desiredURL = "/";

    // Navigate to the URL
    window.location.href = desiredURL;
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const isScrolling = currentScrollY > 0;
        setIsScrolled(isScrolling);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),

    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
    router.push("/"); // Redirect to login page or another appropriate page
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "white" : "transparent",
        color: isScrolled ? "black" : "white",
        transition: "background-color 0.3s, color 0.3s",
        boxShadow: isScrolled ? "0px 1px 5px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            {isScrolled ? (
              <Image
                src="/logo/logo01.png"
                alt="Description of your image"
                width={180}
                height={50}
                objectFit="cover"
                onClick={homeClick}
                style={{ cursor: "pointer", marginTop: "3px" }}
                objectPosition="center"
              />
            ) : (
              <Image
                src="/logo/logo02.png"
                alt="Description of your image"
                width={180}
                height={50}
                onClick={homeClick}
                style={{ cursor: "pointer", marginTop: "3px" }}
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
            <Box sx={{ marginTop: isLoggedIn ? 1 : 0 }}>
              {pages.map((page) => (
                <Link key={page} href={`/${page.toLowerCase()}`} passHref>
                  <Button
                    variant="link"
                    sx={{
                      color: isScrolled ? "black" : "white",
                      transition: "color 0.3s",
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: isScrolled ? "blue" : "white",
                        color: isScrolled ? "white" : "blue",
                        borderRadius: "50px",
                        fontWeight: "bold",
                        transition: "background-color 0.8s, color 0.8s",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
              {!isLoggedIn && (
                <Button
                  variant="contained"
                  href={`/auth/login`}
                  sx={{
                    borderRadius: "50px",
                    "@media (max-width: 600px)": {
                      fontSize: "12px",
                      paddingX: 2,
                    },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>

            {isLoggedIn && (
              <IconButton
                size="small"
                onClick={handleClick}
                sx={{
                  p: 1,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
                <Box
                  sx={{
                    ml: 1,
                    textAlign: "left",
                    display: {
                      xs: "none",
                      md: "flex",
                      flexDirection: "column",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    color="white"
                    fontWeight="bold"
                    sx={{ color: isScrolled ? "black" : "white" }}
                  >
                    {userName}
                  </Typography>
                </Box>
              </IconButton>
            )}
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiMenuItem-root": {
                  color: "black",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s, color 0.3s",
                },
                "& .MuiMenuItem-root:hover": {
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "blue",
                },
              }}
            >
              <Link style={{ textDecoration: "none" }} href={`/`} passHref>
                <MenuItem onClick={handleCloseNavMenu}>
                  <DashboardIcon sx={{ marginRight: 1 }} />
                  Home
                </MenuItem>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={`/products`}
                passHref
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <SettingsSuggestIcon sx={{ marginRight: 1 }} />
                  Pokemons
                </MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} href={`/about`} passHref>
                <MenuItem onClick={handleCloseNavMenu}>
                  <AccountBalanceIcon sx={{ marginRight: 1 }} />
                  Items
                </MenuItem>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={`/services`}
                passHref
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <LibraryAddCheckIcon sx={{ marginRight: 1 }} />
                  Types
                </MenuItem>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={`/contact`}
                passHref
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <SupportAgentIcon sx={{ marginRight: 1 }} />
                  About
                </MenuItem>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  justifyItems="center"
                  marginTop={1}
                  marginBottom={2}
                >
                  <Button
                    justifyContent="center"
                    alignItems="center"
                    justifyItems="center"
                    variant="contained"
                    borderRadius="50px"
                    href={`/auth/login`}
                    sx={{
                      borderRadius: "50px",
                      "@media (max-width: 600px)": {
                        fontSize: "12px",
                        paddingX: 2,
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>

                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                  }}
                />
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
