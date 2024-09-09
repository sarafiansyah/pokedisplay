import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Typography,
  Box,
  Divider,
  MenuItem,
  Menu,
  Avatar,
  TableCell,
  TableRow,
  TableHead,
  Table,
  Paper,
  TableBody,
  TableContainer,
  TablePagination,
  Button,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import { users } from "@/data/user";

import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState("Dashboard");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [nestedAnchorEl1, setNestedAnchorEl1] = React.useState(null);
  const [nestedOpen1, setNestedOpen1] = React.useState(false);
  const [userName, setUserName] = useState("");
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuItems = [
    { text: "Dashboard", icon: <InboxIcon /> },
    { text: "Manage Users", icon: <MailIcon /> },
    { text: "Feedbacks", icon: <InboxIcon /> },
    { text: "Summary", icon: <MailIcon /> },
    { text: "Version", icon: <InboxIcon /> },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
    router.push("/"); // Redirect to login page or another appropriate page
    window.location.href = "/";
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "Dashboard":
        return (
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Dashboard
            </Typography>
            <Box display="flex">
              <Box sx={{ mt: 0, ml: -20 }}>
                <Image
                  src="/images/figures/fig01.png"
                  alt="Logo"
                  width={600}
                  height={500}
                  objectFit="cover"
                  style={{ cursor: "pointer", marginTop: "3px" }}
                />
              </Box>
              <Box sx={{ mt: 5 }}>
                <Typography variant="h4" color="initial">
                  Welcome, {userName}
                </Typography>
                <Typography variant="body1" color="initial">
                  Manage application background through this administrator
                  panel!
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      case "Manage Users":
        return (
          <Box>
            <Typography variant="h5" fontWeight="bold">
              Users Management
            </Typography>
            <Box padding={2}>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Username
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          First Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Last Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.LastName}</TableCell>
                            <TableCell>{user.role}</TableCell>
                          </TableRow>
                        ))}
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={6} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
          </Box>
        );
      case "Feedbacks":
        return <Typography>This is content for Feedbacks</Typography>;
      case "Summary":
        return <Typography>This is content for Summary</Typography>;
      case "Version":
        return (
          <Box>
            <Typography variant="h5" fontWeight="bold"></Typography>
            <Box sx={{ mt: 0, ml: 0 }}>
              <Image
                src="/logo/logo01.png"
                alt="Logo"
                width={370}
                height={100}
                objectFit="cover"
                style={{ cursor: "pointer", marginTop: "3px" }}
              />
            </Box>
          </Box>
        );
      default:
        return <Typography>Select a menu item</Typography>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#000000" }} open={open}>
        <Toolbar>
          {/* Left side content */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ marginRight: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ marginLeft: "-10px", display: "flex" }}>
              <Image
                src="/logo/logo02.png"
                alt="Logo"
                width={180}
                height={50}
                objectFit="cover"
                style={{ cursor: "pointer", marginTop: "3px" }}
              />
            </Box>
          </Box>

          {/* Right side content */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
                  sx={{ color: "white" }}
                >
                  {userName}
                </Typography>
              </Box>
            </IconButton>
            <Tooltip title="Logout">
              <Button
                variant="text"
                onClick={handleLogout}
                sx={{ mt: -0.5, ml: -2, color: "white" }}
              >
                <Logout />
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                display: "block",
                backgroundColor:
                  selectedMenu === item.text ? "#2196f3" : "transparent",
                color: selectedMenu === item.text ? "#fff" : "#000",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => setSelectedMenu(item.text)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#dedede" }}
      >
        <DrawerHeader />
        {renderContent()}
      </Box>
    </Box>
  );
}
