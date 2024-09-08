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
  const [itemButtonClicked, setItemButtonClicked] = useState(false);

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
    setItemButtonClicked(false);
  };

  const handleItemClose = () => {
    setAnchorEl(null);
    setButtonClicked(false);
    setItemButtonClicked(false);
  };

  const handleProfileItemClick = (event) => {
    setItemButtonClicked(true);
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
    setNestedOpen2(false); // Close the nested
    setItemButtonClicked(false);
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
                src="/logo/tamura02.png"
                alt="Description of your image"
                width={130}
                height={70}
                objectFit="cover"
                onClick={homeClick}
                style={{ cursor: "pointer" }}
                objectPosition="center"
              />
            ) : (
              <Image
                src="/logo/tamura02-white.png"
                alt="Description of your image"
                width={130}
                height={70}
                onClick={homeClick}
                style={{ cursor: "pointer" }}
                objectFit="cover"
                objectPosition="center"
              />
            )}
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: isScrolled ? "blue" : "white",
                  color: isScrolled ? "white" : "blue",
                  fontWeight: "bold",
                  transition: "background-color 0.8s, color 0.8s",
                },
                color: isScrolled ? "black" : "white",
                transition: "backgroundColor 0.3s, color 0.3s",
                textDecoration: "none",
                cursor: "pointer",
                backgroundColor: buttonClicked
                  ? isScrolled
                    ? "blue"
                    : "white"
                  : "",
                color: buttonClicked
                  ? isScrolled
                    ? "white"
                    : "blue"
                  : isScrolled
                  ? "black"
                  : "white",
                fontWeight: buttonClicked ? "bold" : "normal",
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
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  backgroundColor: itemButtonClicked ? "blue" : "blue",
                  color: itemButtonClicked ? "white" : "initial",
                  fontWeight: itemButtonClicked ? "bold" : "initial",
                  "&:hover": {
                    backgroundColor: itemButtonClicked ? "blue" : "blue",
                    color: "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleProfileItemClick}
                onClose={handleItemClose}
              >
                Tamura
                <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleKohyoungHover}
              >
                Kohyoung <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleNestedOpen3}
              >
                MPI <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleNestedOpen4}
              >
                ANDA <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleNestedOpen5}
              >
                JT <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleNestedOpen6}
              >
                Maker Ray <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleNestedOpen7}
              >
                Power Automation <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleNestedOpen8}
              >
                PTI <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleNestedOpen9}
              >
                Sinhovo <ArrowRightIcon />
              </MenuItem>
              <MenuItem
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClick={handleNestedOpen10}
              >
                JTE <ArrowRightIcon />
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
                sx={{
                  display: "flex", // Use flexbox layout
                  justifyContent: "space-between", // Align content with space between
                  alignItems: "center", // Align items vertically at center
                  "&:hover": {
                    backgroundColor: isScrolled ? "blue" : "blue",
                    color: isScrolled ? "white" : "white",
                    fontWeight: "bold",
                  },
                }}
                onClose={handleItemClose}
                onClick={() => handleMenuItemClick("products/tamura/reflow")}
              >
                Reflow
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/tamura/fluxer")}
              >
                Fluxer
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/tamura/wave")}
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
            <Menu
              id="nested-menu3"
              anchorEl={nestedAnchorEl3}
              open={nestedOpen3}
              onClose={handleNestedClose3}
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
                onClick={() =>
                  handleMenuItemClick("products/mpi/laser-marking")
                }
              >
                Laser Marking Equipment
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Automatic Label Equipment
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Automatic Ink Jet Equipment
              </MenuItem>
            </Menu>

            <Menu
              id="nested-menu4"
              anchorEl={nestedAnchorEl4}
              open={nestedOpen4}
              onClose={handleNestedClose4}
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
                onClick={() =>
                  handleMenuItemClick(
                    "products/anda/precision-conformal-coating"
                  )
                }
              >
                Precision Conformal Coating Machine Series
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Dispensing Machine Series
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Curing Ove Series
              </MenuItem>
            </Menu>

            <Menu
              id="nested-menu5"
              anchorEl={nestedAnchorEl5}
              open={nestedOpen5}
              onClose={handleNestedClose5}
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
                onClick={() =>
                  handleMenuItemClick("products/jt/electronic-soldering")
                }
              >
                Electronic Soldering Equipment
              </MenuItem>
            </Menu>

            <Menu
              id="nested-menu6"
              anchorEl={nestedAnchorEl6}
              open={nestedOpen6}
              onClose={handleNestedClose6}
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
                onClick={() => handleMenuItemClick("products/maker-ray/smt")}
              >
                SMT inspection
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                DIP inspection
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Coating inspection
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Final inspection
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                3D inspection
              </MenuItem>
            </Menu>

            <Menu
              id="nested-menu7"
              anchorEl={nestedAnchorEl7}
              open={nestedOpen7}
              onClose={handleNestedClose7}
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
                onClick={() =>
                  handleMenuItemClick("products/power-automation/i-series")
                }
              >
                I Series
              </MenuItem>
            </Menu>

            <Menu
              id="nested-menu8"
              anchorEl={nestedAnchorEl8}
              open={nestedOpen8}
              onClose={handleNestedClose8}
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
                onClick={() =>
                  handleMenuItemClick(
                    "products/pti/electrical-performance-test"
                  )
                }
              >
                Electrical Performance Test Equipment
              </MenuItem>
            </Menu>

            <Menu
              id="nested-menu9"
              anchorEl={nestedAnchorEl9}
              open={nestedOpen9}
              onClose={handleNestedClose9}
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
                onClick={() =>
                  handleMenuItemClick(
                    "products/sinhovo/high-precision-detection"
                  )
                }
              >
                High Precision Detection Class
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                High Efficiency Production
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                High Precision Measurement Class
              </MenuItem>
            </Menu>

            <Menu
              id="nested-menu10"
              anchorEl={nestedAnchorEl10}
              open={nestedOpen10}
              onClose={handleNestedClose10}
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
                onClick={() => handleMenuItemClick("products/jte/aviator")}
              >
                Aviator Series
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Navigator Series
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Automatic Radial Lead Component
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("products/kohyoung/spi")}
              >
                Automatic Axial Lead Component
              </MenuItem>
            </Menu>

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
                      fontWeight: "bold",
                      transition: "background-color 0.8s, color 0.8s",
                    },
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
