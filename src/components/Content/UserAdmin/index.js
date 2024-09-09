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
  InputLabel,
  Container,
  DialogContent,
  Select,
  Divider,
  MenuItem,
  DialogActions,
  Menu,
  Avatar,
  TableCell,
  TableRow,
  FormControl,
  Dialog,
  DialogTitle,
  TextField,
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
import { users as initialUsers } from "@/data/user";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ArticleIcon from "@mui/icons-material/Article";
import ListIcon from "@mui/icons-material/List";

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
  const [users, setUsers] = useState(initialUsers);
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

  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUserData, setNewUserData] = useState({
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenDialog = (user = null) => {
    setEditingUser(user);
    setNewUserData(
      user || { id: "", username: "", firstName: "", lastName: "", role: "" }
    );
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (editingUser) {
      // Edit existing user
      const updatedUsers = users.map((user) =>
        user.id === editingUser.id ? { ...newUserData } : user
      );
      setUsers(updatedUsers);
      Swal.fire(
        "Success",
        "User data has been updated successfully!",
        "success"
      );
    } else {
      // Add new user
      const newId = users.length ? users[users.length - 1].id + 1 : 1;
      const newUser = { ...newUserData, id: newId };
      setUsers([...users, newUser]);
      Swal.fire("Success", "New user has been added successfully!", "success");
    }
    handleCloseDialog();
  };

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
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Manage Users", icon: <GroupIcon /> },
    { text: "Feedbacks", icon: <FeedbackIcon /> },
    { text: "Summary", icon: <ArticleIcon /> },
    { text: "Version", icon: <ListIcon /> },
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
          <Container>
            <Box>
              <Box display="flex">
                <Box sx={{ mt: 0 }}>
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
          </Container>
        );
      case "Manage Users":
        return (
          <Container>
            <Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  ml: {
                    xs: -4,
                    sm: -4,
                    md: 0,
                    lg: 0,
                    xl: 0,
                  },
                }}
              >
                Users Management
              </Typography>
              <Box
                padding={1}
                sx={{
                  ml: {
                    xs: -5,
                    sm: -5,
                    md: 0,
                    lg: 0,
                    xl: 0,
                  },
                }}
              >
                <Box
                  pb={1}
                  gap={1}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  <TextField
                    label="Search by Username"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ maxWidth: 200 }} // Limit width of the text field
                  />
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpenDialog()}
                  >
                    Add New User
                  </Button>
                </Box>

                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              padding: "8px",
                              maxWidth: "60px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            ID
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              padding: "8px",
                              maxWidth: "120px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Username
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              padding: "8px",
                              maxWidth: "120px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            First Name
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              padding: "8px",
                              maxWidth: "120px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Last Name
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              padding: "8px",
                              maxWidth: "100px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Role
                          </TableCell>
                          <TableCell
                            sx={{
                              fontWeight: "bold",
                              padding: "8px",
                              maxWidth: "100px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Actions
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredUsers
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((user) => (
                            <TableRow key={user.id}>
                              <TableCell
                                sx={{
                                  padding: "8px",
                                  maxWidth: "60px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {user.id}
                              </TableCell>
                              <TableCell
                                sx={{
                                  padding: "8px",
                                  maxWidth: "120px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {user.username}
                              </TableCell>
                              <TableCell
                                sx={{
                                  padding: "8px",
                                  maxWidth: "120px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {user.firstName}
                              </TableCell>
                              <TableCell
                                sx={{
                                  padding: "8px",
                                  maxWidth: "120px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {user.lastName}
                              </TableCell>
                              <TableCell
                                sx={{
                                  padding: "8px",
                                  maxWidth: "100px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {user.role}
                              </TableCell>
                              <TableCell
                                sx={{
                                  padding: "8px",
                                  maxWidth: "100px",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <Button
                                  size="small"
                                  variant="outlined"
                                  onClick={() => handleOpenDialog(user)}
                                >
                                  Edit
                                </Button>
                              </TableCell>
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
                    sx={{ padding: "8px" }} // Adjust pagination padding
                  />
                </Paper>

                <Dialog open={openDialog} onClose={handleCloseDialog}>
                  <DialogTitle>
                    {editingUser ? "Edit User" : "Add New User"}
                  </DialogTitle>
                  <DialogContent>
                    <TextField
                      margin="dense"
                      label="ID"
                      type="text"
                      fullWidth
                      name="id"
                      value={newUserData.id}
                      onChange={handleInputChange}
                      disabled={!!editingUser} // Disable the ID field when editing
                      sx={{ marginBottom: "8px" }} // Reduce bottom margin
                    />
                    <TextField
                      margin="dense"
                      label="Username"
                      type="text"
                      fullWidth
                      name="username"
                      value={newUserData.username}
                      onChange={handleInputChange}
                      sx={{ marginBottom: "8px" }} // Reduce bottom margin
                    />
                    <TextField
                      margin="dense"
                      label="First Name"
                      type="text"
                      fullWidth
                      name="firstName"
                      value={newUserData.firstName}
                      onChange={handleInputChange}
                      sx={{ marginBottom: "8px" }} // Reduce bottom margin
                    />
                    <TextField
                      margin="dense"
                      label="Last Name"
                      type="text"
                      fullWidth
                      name="lastName"
                      value={newUserData.lastName}
                      onChange={handleInputChange}
                      sx={{ marginBottom: "8px" }} // Reduce bottom margin
                    />
                    <FormControl fullWidth margin="dense">
                      <InputLabel>Role</InputLabel>
                      <Select
                        name="role"
                        value={newUserData.role}
                        onChange={handleInputChange}
                        fullWidth
                      >
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="guest">Guest</MenuItem>
                      </Select>
                    </FormControl>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSave} color="primary">
                      {editingUser ? "Save Changes" : "Add User"}
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Box>
          </Container>
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
