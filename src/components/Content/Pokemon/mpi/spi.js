import { useEffect } from "react";
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
import {
  Paper,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  Divider,
  Button,
} from "@mui/material";
import Image from "next/image";

const images = [
  "/images/home/home05.jpg",
  "/images/home/home02.jpg",
  "/images/home/home04.jpg",
];

const fixedHeight = 600; // Set your desired fixed height

const CarouselItem = ({ image, title, subtitle }) => (
  <Paper
    sx={{
      position: "relative",
      height: `${fixedHeight}px`,
      overflow: "hidden",
      textAlign: "left",
    }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Image
        src={image}
        alt="Description of your image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay color
        }}
      />
    </div>
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        zIndex: 1,
        marginLeft: "-40%",
        marginTop: "0%",
      }}
    >
      <Typography variant="h3" component="div">
        {title}
      </Typography>
      <Typography variant="subtitle1" component="div">
        {subtitle}
      </Typography>
    </div>
  </Paper>
);

function ResponsiveCarousel() {
  useEffect(() => {
    AOS.init();
  }, []);

  const CustomCard = ({ title, imageSrc, description }) => {
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
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              src={imageSrc}
              alt="Description of your image"
              width={200}
              height={250}
              objectFit="cover"
              objectPosition="center center"
            />
            <Typography
              variant="body1"
              color="initial"
              sx={{ textAlign: "left" }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Card>
    );
  };

  return (
    <>
      <AppBar />
      <Grid paddingX={3} sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        <Box padding={3} marginTop={7}>
          <Box marginX={3} marginTop={3}>
            <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
              SPI
            </Typography>
            <Divider />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="Jinno Fluxer"
                imageSrc="/images/products/SPI_KY8030-3_Product-Image-768x809.png"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="Neptune c"
                imageSrc="/images/products/SPI_KY8030-3_Product-Image-768x809.png"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="SPI aSPIre3"
                imageSrc="/images/products/SPI_aSPIre3_Product-Image-285x300.png"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="SPI KY8030"
                imageSrc="/images/products/SPI_KY8030-3_Product-Image-768x809.png"
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default ResponsiveCarousel;
