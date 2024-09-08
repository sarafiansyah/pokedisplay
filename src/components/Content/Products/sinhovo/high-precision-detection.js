import { useEffect, useState } from "react";
import AppBar from "@/components/layouts/Navbar_Basic";
import Layout from "@/components/";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/layouts/Footer";
import {
  Paper,
  Typography,
  Box,
  Container,
  Tooltip,
  Grid,
  Card,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const fixedHeight = 600; // Set your desired fixed height

function ResponsiveCarousel() {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    imgSrc: "",
    description: "",
  });

  const handleClickOpen = (description) => {
    window.location.href = `/products/sinhovo/details/${description}`; // Redirect to the details page with the provided title
    // setDialogContent({ title, imgSrc, description });
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const CustomCard = ({ title, imageSrc, description }) => {
    const capitalizedDescription = description
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("\n");
    return (
      <Card
        sx={{
          width: "100%", // Set width to 100% initially
          maxWidth: "400px", // Set maximum width to 400px
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
        }}
      >
        <Box padding={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" fontWeight="bold" color="initial">
              {title}
            </Typography>

            <motion.img
              onClick={() => handleClickOpen(description)}
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              src={imageSrc}
              alt="Description of your image"
              width={220}
              height={220}
              objectFit="cover"
              objectPosition="center center"
            />
          </Box>
          <Box marginTop={2}>
            <Button
              variant="outlined"
              onClick={() => handleClickOpen(description)}
            >
              More Details
            </Button>
          </Box>
        </Box>
      </Card>
    );
  };

  return (
    <>
      <AppBar />
      <Grid
        paddingX={3}
        paddingBottom="100px"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <Box padding={3} marginTop={7}>
          <Box marginTop={3}>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                  High Precision Detection
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="#01a6de">
                  Image Recognition and Automation Control
                </Typography>
              </Box>
              <Box>
                <Tooltip title="Showing contents from Tamura Corporation">
                  <Card
                    sx={{
                      width: "150px",
                      height: "80px",
                      marginTop: 0,
                      borderRadius: "10px",
                      boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                      display: { xs: "none", sm: "flex" },
                      flexDirection: "column",
                      alignItems: "center", // Center content horizontally
                    }}
                  >
                    <Box padding={5}>
                      <Box
                        marginTop="-15px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <motion.img
                          className="box"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          src="/images/about/sinhovo-logo.png"
                          alt="Description of your image"
                          width={100}
                          objectFit="cover"
                          objectPosition="center center"
                        />
                      </Box>
                    </Box>
                  </Card>
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{
              marginTop: 1,
              height: 3,
              backgroundImage: `linear-gradient(to right, #222623 10%, #01a6de 10%)`,
            }}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="SH8650M"
                imageSrc="/images/products/sinhovo/sinhovo-sh8650m.png"
                description="sh8650m"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="SH8650II"
                imageSrc="/images/products/sinhovo/sinhovo-sh8650ii.png"
                description="sh8650ii"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="SH8650L"
                imageSrc="/images/products/sinhovo/sinhovo-sh8650l.png"
                description="sh8650l"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="SE-500"
                imageSrc="/images/products/sinhovo/sinhovo-se500.png"
                description="se500"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="SH-1250L"
                imageSrc="/images/products/sinhovo/sinhovo-sh1250l.png"
                description="sh1250l"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="SH-1580L"
                imageSrc="/images/products/sinhovo/sinhovo-sh1580l.png"
                description="sh1580l"
              />
            </Grid>
            {/* Other CustomCard components */}
          </Grid>
        </Box>
      </Grid>
      <Footer />
    </>
  );
}

export default ResponsiveCarousel;
