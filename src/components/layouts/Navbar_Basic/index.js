import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import InputBase from "@mui/material/InputBase";
import { useRouter } from "next/router";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Divider from "@mui/material/Divider";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const pages = ["Pokemons", "Types", "Items", "About"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [nestedAnchorEl1, setNestedAnchorEl1] = React.useState(null);
  const [nestedOpen1, setNestedOpen1] = React.useState(false);
  const [nestedAnchorEl2, setNestedAnchorEl2] = React.useState(null);
  const [nestedOpen2, setNestedOpen2] = React.useState(false);
  const [nestedAnchorEl3, setNestedAnchorEl3] = React.useState(null);
  const [nestedOpen3, setNestedOpen3] = React.useState(false);

  const [nestedAnchorEl4, setNestedAnchorEl4] = React.useState(null);
  const [nestedOpen4, setNestedOpen4] = React.useState(false);

  const [nestedAnchorEl5, setNestedAnchorEl5] = React.useState(null);
  const [nestedOpen5, setNestedOpen5] = React.useState(false);

  const [nestedAnchorEl6, setNestedAnchorEl6] = React.useState(null);
  const [nestedOpen6, setNestedOpen6] = React.useState(false);

  const [nestedAnchorEl7, setNestedAnchorEl7] = React.useState(null);
  const [nestedOpen7, setNestedOpen7] = React.useState(false);

  const [nestedAnchorEl8, setNestedAnchorEl8] = React.useState(null);
  const [nestedOpen8, setNestedOpen8] = React.useState(false);

  const [nestedAnchorEl9, setNestedAnchorEl9] = React.useState(null);
  const [nestedOpen9, setNestedOpen9] = React.useState(false);

  const [nestedAnchorEl10, setNestedAnchorEl10] = React.useState(null);
  const [nestedOpen10, setNestedOpen10] = React.useState(false);

  const [buttonClicked, setButtonClicked] = useState(false);

  const open = Boolean(anchorEl);

  const router = useRouter();

  // Event handler for menu item click
  const handleMenuItemClick = (menuItemName) => {
    // Construct the route dynamically using the menu item name
    const route = `/${menuItemName.toLowerCase()}`; // Assuming menu item names are in lowercase
    router.push(route);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setButtonClicked(false);
  };

  const handleProfileItemClick = (event) => {
    setNestedAnchorEl1(event.currentTarget);
    setNestedOpen1(!nestedOpen1);
  };

  // Event handler for hovering over Kohyoung to open nested-menu2
  const handleKohyoungHover = (event) => {
    setNestedAnchorEl2(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen2(true); // Open the nested menu
  };

  const handleNestedOpen3 = (event) => {
    setNestedAnchorEl3(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen3(true); // Open the nested menu
  };

  const handleNestedOpen4 = (event) => {
    setNestedAnchorEl4(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen4(true); // Open the nested menu
  };
  const handleNestedOpen5 = (event) => {
    setNestedAnchorEl5(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen5(true); // Open the nested menu
  };
  const handleNestedOpen6 = (event) => {
    setNestedAnchorEl6(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen6(true); // Open the nested menu
  };
  const handleNestedOpen7 = (event) => {
    setNestedAnchorEl7(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen7(true); // Open the nested menu
  };
  const handleNestedOpen8 = (event) => {
    setNestedAnchorEl8(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen8(true); // Open the nested menu
  };
  const handleNestedOpen9 = (event) => {
    setNestedAnchorEl9(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen9(true); // Open the nested menu
  };
  const handleNestedOpen10 = (event) => {
    setNestedAnchorEl10(event.currentTarget); // Anchor the nested menu to the current target
    setNestedOpen10(true); // Open the nested menu
  };

  // Event handler for closing the nested menu2
  const handleNestedClose2 = () => {
    setNestedOpen2(false); // Close the nested menu
  };

  const handleNestedClose = () => {
    setNestedAnchorEl1(null);
    setNestedOpen1(false);
  };

  const handleNestedClose3 = () => {
    setNestedAnchorEl3(null);
    setNestedOpen3(false);
  };

  const handleNestedClose4 = () => {
    setNestedAnchorEl4(null);
    setNestedOpen4(false);
  };

  const handleNestedClose5 = () => {
    setNestedAnchorEl5(null);
    setNestedOpen5(false);
  };

  const handleNestedClose6 = () => {
    setNestedAnchorEl6(null);
    setNestedOpen6(false);
  };

  const handleNestedClose7 = () => {
    setNestedAnchorEl7(null);
    setNestedOpen7(false);
  };

  const handleNestedClose8 = () => {
    setNestedAnchorEl8(null);
    setNestedOpen8(false);
  };

  const handleNestedClose9 = () => {
    setNestedAnchorEl9(null);
    setNestedOpen9(false);
  };

  const handleNestedClose10 = () => {
    setNestedAnchorEl10(null);
    setNestedOpen10(false);
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
    setButtonClicked(true);
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

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "black",
        transition: "background-color 0.3s, color 0.3s",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Image
              src="/logo/logo01.png"
              alt="Description of your image"
              width={180}
              height={50}
              onClick={homeClick}
              style={{ cursor: "pointer", marginTop: "3px" }}
              objectFit="cover"
              objectPosition="center"
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
            {pages.map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`} passHref>
                <Button
                  variant="link"
                  sx={{
                    color: isScrolled ? "black" : "black",
                    transition: "color 0.3s",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: isScrolled ? "blue" : "white",
                      color: isScrolled ? "white" : "blue",
                      fontWeight: "bold",
                      transition: "background-color 0.8s, color 0.8s",
                    },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
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
