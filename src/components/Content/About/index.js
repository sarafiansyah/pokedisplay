import React, { useEffect, useRef, useState } from "react";
import Layout from "@/components/";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Paper,
  Divider,
  Typography,
  Box,
  Container,
  Grid,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Button } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { EffectCards } from "swiper/modules";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    // Simulate a delay or loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const CustomCard = ({
    title,
    imageSrc,
    imgWidth,
    imgHeight,
    description,
  }) => {
    return (
      <Card
        sx={{
          width: "400px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
        }}
      >
        <Box padding={5}>
          <Box display="flex" flexDirection="column" alignItems="center">
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
              width={imgWidth}
              height={imgHeight}
              objectFit="cover"
              objectPosition="center center"
            />
          </Box>
        </Box>
      </Card>
    );
  };

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            position: "fixed",
            // opacity: "50%",
            top: 0,
            left: 0,
            backgroundColor: "#000000", // Dark overlay for the loader
            zIndex: 9999,
          }}
        >
          <CircularProgress size={100} color="primary" />
        </Box>
      ) : (
        <Layout>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            effect="fade"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box
                height="600px"
                position="relative"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  backgroundColor: "black",
                }}
              >
                <video
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  controls
                  autoPlay
                  muted
                  loop
                  style={{ zIndex: 1 }} // Loop the video
                >
                  <source src="./videos/pokemon_trailer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 2, // Set higher zIndex for the overlay
                  }}
                ></div>
                <Typography
                  variant="h2"
                  color="white"
                  marginTop={30}
                  position="absolute" // Set position to absolute
                  textAlign="center"
                  zIndex={3}
                  sx={{ textAlign: "center" }} // Set higher zIndex for the text
                >
                  Services
                </Typography>
                <Typography
                  variant="h4"
                  color="white"
                  marginTop={0}
                  position="relative"
                  textAlign="left"
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Short Description
                </Typography>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Layout>
      )}
    </>
  );
}

export default ResponsiveCarousel;
