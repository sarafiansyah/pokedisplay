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

const pages = ["About", "Services", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [nestedAnchorEl1, setNestedAnchorEl1] = React.useState(null);
  const [nestedOpen1, setNestedOpen1] = React.useState(false);
  const [nestedAnchorEl2, setNestedAnchorEl2] = React.useState(null);
  const [nestedOpen2, setNestedOpen2] = React.useState(false);
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

  // Event handler for closing the nested menu2
  const handleNestedClose2 = () => {
    setNestedOpen2(false); // Close the nested menu
  };

  const handleNestedClose = () => {
    setNestedAnchorEl1(null);
    setNestedOpen1(false);
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

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "black",
        transition: "background-color 0.3s, color 0.3s",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box>
            <Image
              src="/logo/tamura02.png"
              alt="Description of your image"
              width={130}
              height={70}
              objectFit="cover"
              onClick={homeClick}
              style={{ cursor: "pointer" }}
              objectPosition="center"
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
            <Button
              sx={{
                color: "black",
                transition: "color 0.3s",
                textDecoration: "none",
                cursor: "pointer",
              }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Products
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleProfileItemClick}>
                Tamura <ArrowRightIcon />
              </MenuItem>
              <MenuItem onClick={handleKohyoungHover}>
                Kohyoung <ArrowRightIcon />
              </MenuItem>
            </Menu>

            <Menu
              id="nested-menu"
              anchorEl={nestedAnchorEl1}
              open={nestedOpen1}
              onClose={handleNestedClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() => handleMenuItemClick("products/tamura/reflow")}
              >
                Reflow
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung")}
              >
                Fluxer
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung")}
              >
                Wave
              </MenuItem>
              {/* Add more items as needed */}
            </Menu>

            <Menu
              id="nested-menu2"
              anchorEl={nestedAnchorEl2}
              open={nestedOpen2}
              onClose={handleNestedClose2}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/aoi")}
              >
                AOI
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                SPI
              </MenuItem>

              {/* Add more items as needed */}
            </Menu>

            {pages.map((page) => (
              <Link key={page} href={`/${page.toLowerCase()}`} passHref>
                <Button
                  variant="link"
                  sx={{
                    color: "black",
                    transition: "color 0.3s",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
                },
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href={`/products`}
                passHref
              >
                <MenuItem onClick={handleCloseNavMenu}>Products</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} href={`/about`} passHref>
                <MenuItem onClick={handleCloseNavMenu}>About</MenuItem>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={`/services`}
                passHref
              >
                <MenuItem onClick={handleCloseNavMenu}>Services</MenuItem>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={`/contact`}
                passHref
              >
                <MenuItem onClick={handleCloseNavMenu}>Contact</MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
