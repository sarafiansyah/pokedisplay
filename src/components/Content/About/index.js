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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    AOS.init();
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

        <Container>
          <Box padding={2}>
            <Box margin={3}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "30px",
                  },
                }}
                color="#2e2e2e"
              >
                About Us
              </Typography>
              <Divider
                sx={{
                  marginTop: 1,
                  height: 3,
                  backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                }}
              />
            </Box>

            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box padding={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    // Responsive breakpoints
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Box>
                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: 500,
                          lg: 500,
                          xl: 500,
                        },
                        height: {
                          xs: "100%",
                          sm: "100%",
                          md: 300,
                          lg: 300,
                          xl: 300,
                        },
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      src="/images/2022_tamura_creport17.jpg"
                      alt="Description of your image"
                      width={500}
                      height={300}
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{ marginLeft: 5 }}
                    >
                      PT. TAMURA TRADE INDONESIA have been a leading & trusted
                      industrial supplier and general trading to Manufacturing
                      Industries. We are confident to provide the best service
                      to our customers by providing high quality products and
                      dedicated services to customers. We have contributed a lot
                      of cost reduction and quality improvement to our
                      customers.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Box margin={3}>
              <Typography
                display="flex"
                justifyContent="flex-end"
                variant="h4"
                fontWeight="bold"
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "30px",
                  },
                }}
                color="#2e2e2e"
              >
                Partnership
              </Typography>
              <Divider
                sx={{
                  marginTop: 1,
                  height: 3,
                  backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                }}
              />
            </Box>

            <Box margin={1} sx={{ marginTop: 3 }}></Box>
            <Box
              display="flex"
              marginTop={-2}
              gap={3}
              sx={{
                flexDirection: {
                  xs: "column", // Flex direction becomes column for extra small screens
                  sm: "row", // Flex direction remains row for small and larger screens
                },
              }}
            >
              <Grid display="flex" container gap={2} justifyContent="center">
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-30px" }}
                        src="/logo/tamura02.png"
                        alt="Description of your image"
                        width={140}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-20px" }}
                        src="images/about/kohyoung_logo01.png"
                        alt="Description of your image"
                        width={130}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-10px" }}
                        src="images/about/anda-logo.png"
                        alt="Description of your image"
                        width={120}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "0px" }}
                        src="images/about/mk-logo.png"
                        alt="Description of your image"
                        width={140}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-20px" }}
                        src="images/about/mpi_logo.png"
                        alt="Description of your image"
                        width={100}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-10px" }}
                        src="images/about/jt-logo.png"
                        alt="Description of your image"
                        width={140}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-25px" }}
                        src="images/about/pa-logo.png"
                        alt="Description of your image"
                        width={100}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-10px" }}
                        src="images/about/pti-logo.png"
                        alt="Description of your image"
                        width={140}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-10px" }}
                        src="images/about/sinhovo-logo.png"
                        alt="Description of your image"
                        width={140}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "200px",
                    height: "100px",
                    marginTop: "20px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                  }}
                >
                  <Box padding={5}>
                    <Box
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
                        style={{ marginTop: "-30px" }}
                        src="images/about/KIC-logo.png"
                        alt="Description of your image"
                        width={80}
                        objectFit="cover"
                        objectPosition="center center"
                      />
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Box>
            <Box marginTop={3} paddingBottom={0}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box padding={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      // Responsive breakpoints
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{
                          "@media (max-width: 600px)": {},
                        }}
                      >
                        Now we have many &apos;blue chip&apos; companies like as
                        YAMAHA MUSIC, SANYO, JVC, LG, and many others as our
                        valuable customers. We&apos;ve got a good reputation
                        from those key customers and we are very proud of
                        supporting the best quality products with excellent
                        service and competitive price.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: {
                          xs: 300,
                          sm: "100%",
                          md: 500,
                          lg: 500,
                          xl: 500,
                        },
                        height: {
                          xs: 300,
                          sm: "100%",
                          md: 300,
                          lg: 300,
                          xl: 300,
                        },
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    >
                      <Box
                        sx={{
                          "@media (max-width: 600px)": {
                            marginLeft: 0,
                            width: "300px",
                          },
                          display: {
                            xs: "flex",
                            sm: "flex",
                            md: "none",
                            lg: "none",
                            xl: "none",
                          },
                        }}
                      >
                        <video
                          ref={videoRef}
                          width="100%"
                          height="100%"
                          controls
                          style={{
                            zIndex: 1,
                          }} // Loop the video
                        >
                          <source
                            src="./videos/tamura_showcase.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </Box>
                      <Box
                        sx={{
                          display: {
                            xs: "none",
                            sm: "none",
                            md: "flex",
                            lg: "flex",
                            xl: "flex",
                          },
                        }}
                      >
                        <video
                          ref={videoRef}
                          width={500}
                          height={300}
                          controls
                          style={{
                            zIndex: 1,
                          }} // Loop the video
                        >
                          <source
                            src="./videos/tamura_showcase.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box margin={3}>
              <Typography
                variant="h4"
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "30px",
                  },
                }}
                fontWeight="bold"
                color="#2e2e2e"
              >
                Vision & Mission
              </Typography>
              <Divider
                sx={{
                  marginTop: 1,
                  height: 3,
                  backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                }}
              />
            </Box>
            <Box marginTop={3} paddingBottom={0}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box padding={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      // Responsive breakpoints
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        // Responsive breakpoints
                        flexDirection: {
                          xs: "column",
                          sm: "column",
                          md: "row",
                          lg: "row",
                          xl: "row",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: 500,
                            lg: 500,
                            xl: 500,
                          },
                          height: {
                            xs: "100%",
                            sm: "100%",
                            md: 300,
                            lg: 300,
                            xl: 300,
                          },
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        src="/images/2022_tamura_creport17.jpg"
                        alt="Description of your image"
                        width={500}
                        height={300}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ marginLeft: 5, marginBottom: 1 }}
                        color="initial"
                      >
                        Vision
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        PT. TAMURA TRADE INDONESIA is working hard to earn the
                        recognition as &quot;The Brand You Can Trust&quot;. We
                        shall continue to provide a complete array of
                        high-quality products to meet our customers&apos; needs.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box marginTop={3} paddingBottom={0}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box padding={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      // Responsive breakpoints
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ marginRight: 5, marginBottom: 1 }}
                        color="initial"
                      >
                        Mission
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginRight: 5 }}
                      >
                        Mission With the objective manufacturing industries
                        community in Indonesia, PT. TAMURA TRADE INDONESIA will
                        continue to provide customers with a variety of
                        innovative and high quality products. Through its
                        one-stop supplier service.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        // Responsive breakpoints
                        flexDirection: {
                          xs: "column",
                          sm: "column",
                          md: "row",
                          lg: "row",
                          xl: "row",
                        },
                      }}
                    >
                      {" "}
                      <Box
                        component="img"
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: 500,
                            lg: 500,
                            xl: 500,
                          },
                          height: {
                            xs: "100%",
                            sm: "100%",
                            md: 300,
                            lg: 300,
                            xl: 300,
                          },
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        src="/images/2022_tamura_creport17.jpg"
                        alt="Description of your image"
                        width={500}
                        height={300}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box margin={3}>
              <Typography
                display="flex"
                justifyContent="flex-end"
                variant="h4"
                fontWeight="bold"
                sx={{
                  "@media (max-width: 600px)": {
                    fontSize: "30px",
                  },
                }}
                color="#2e2e2e"
              >
                Company Commitment
              </Typography>
              <Divider
                sx={{
                  marginTop: 1,
                  height: 3,
                  backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                }}
              />
            </Box>
            <Box marginTop={3} paddingBottom={0}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box padding={5}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      // Responsive breakpoints
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        // Responsive breakpoints
                        flexDirection: {
                          xs: "column",
                          sm: "column",
                          md: "row",
                          lg: "row",
                          xl: "row",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: 500,
                            lg: 500,
                            xl: 500,
                          },
                          height: {
                            xs: "100%",
                            sm: "100%",
                            md: 300,
                            lg: 300,
                            xl: 300,
                          },
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        src="/images/2022_tamura_creport17.jpg"
                        alt="Description of your image"
                        width={500}
                        height={300}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        We continue to strive for excellence in terms of product
                        quality, competitive pricing, and after sales service to
                        exceed customer expectations. Besides giving our
                        customers uncompromised priority, we emphasize on quick
                        delivery and always continue to improve our management
                        and marketing. We continue to believe that satisfied
                        customers are our greatest asset.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export default ResponsiveCarousel;
