// Layout.js
import AppBar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Paper, Typography, Box, Container, Grid } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Grid sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>{children}</Grid>

      <Footer />
    </>
  );
};

export default Layout;
