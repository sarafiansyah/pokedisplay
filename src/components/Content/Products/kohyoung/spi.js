import { useEffect, useState } from "react";
import AppBar from "@/components/layouts/Navbar_Basic";
import Layout from "@/components/";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-cards";
import Footer from "@/components/layouts/Footer";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
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
    window.location.href = `/products/kohyoung/details/${description}`; // Redirect to the details page with the provided title
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
              height={250}
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
                  Solder Paste Inspection System
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="#64bc6c">
                  The industry’s highest performing 3D SPI systems
                </Typography>
              </Box>
              <Box>
                <Tooltip title="Showing contents from Kohyoung">
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
                        marginTop={-4}
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
                          src="/images/about/kohyoung_logo01.png"
                          alt="Description of your image"
                          width={115}
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
              backgroundImage: `linear-gradient(to right, #4591cd 10%, #64bc6c 10%)`,
            }}
          />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="aSPIre3"
                imageSrc="/images/products/kohyoung/spi/SPI_aSPIre3_Product-Image-768x809.png"
                description="spi_aspire3"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="KY8030-3"
                imageSrc="/images/products/kohyoung/spi/SPI_KY8030-3_Product-Image-768x809.png"
                description="spi_ky8030_3"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="KY8030-2"
                imageSrc="/images/products/kohyoung/spi/SPI_KY8030-2_Product-Image-768x809.png"
                description="spi_ky8030_2"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="KY8080"
                imageSrc="/images/products/kohyoung/spi/SPI_KY8080_M_Product-Image-768x809.png"
                description="spi_ky8080"
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
