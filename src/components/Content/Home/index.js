import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Chip,
  Divider,
  Paper,
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
import { Pagination, Autoplay, EffectFade, FreeMode } from "swiper/modules";

import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { EffectCards } from "swiper/modules";
import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import BoltIcon from "@mui/icons-material/Bolt";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

// Import Swiper styles
import "swiper/css";

const images = [
  "/images/home/home05.jpg",
  "/images/home/home02.jpg",
  "/images/home/home04.jpg",
];

const fixedHeight = 600; // Set your desired fixed height

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

  const router = useRouter();

  // Handle button click to navigate to "/services"
  const handleButtonClick = () => {
    router.push("/products");
  };

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function once to set initial slidesPerView value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const [spaceBetween, setSpaceBetween] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSpaceBetween(-80);
      } else {
        setSpaceBetween(20);
      }
    };

    // Call the handler immediately to set the initial value
    handleResize();

    // Add an event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className=""
      >
        <SwiperSlide>
          <Box
            height="600px"
            position="relative"
            style={{ width: "100%", overflow: "hidden" }} // Set width to 100% and hide overflow
          >
            <Image
              src="/images/bg/wallBg02.jpg"
              alt="Description of your image"
              layout="fill" // Fill the entire box
              objectFit="cover" // Use 'cover' to ensure the image covers the entire box
              objectPosition="center"
              style={{ borderRadius: "8px" }} // Optional: Add border-radius for rounded corners
            />
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                // Optional: Add border-radius for rounded corners
              }}
            ></div>
            <Typography
              variant="h3"
              color="white"
              position="relative"
              textAlign="center"
              sx={{
                textAlign: "center",
                justifyContent: "center",
                fontSize: {
                  xs: "50px",
                  sm: "50px",
                  md: "3.4285714285714284rem;",
                  lg: "3.4285714285714284rem;",
                  xl: "3.4285714285714284rem;",
                },
                marginTop: {
                  xs: 25,
                  sm: 30,
                  md: 30,
                  lg: 30,
                  xl: 30,
                },
                justifyContent: "center",
              }}
            >
              Pokemon Universe
            </Typography>
            <Typography
              variant="h6"
              color="white"
              marginTop={0}
              position="relative"
              textAlign="left"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "20px",
                  sm: "20px",
                  md: "2.4285714285714284rem",
                  lg: "2.4285714285714284rem",
                  xl: "2.4285714285714284rem",
                },
                justifyContent: "center",
              }}
            >
              Dive in through the generations
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            height="600px"
            position="relative"
            style={{ width: "100%", overflow: "hidden" }} // Set width to 100% and hide overflow
          >
            <Image
              src="/images/bg/wallBg06.jpg"
              alt="Description of your image"
              layout="fill" // Fill the entire box
              objectFit="cover" // Use 'cover' to ensure the image covers the entire box
              objectPosition="center"
              style={{ borderRadius: "8px" }} // Optional: Add border-radius for rounded corners
            />
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                // Optional: Add border-radius for rounded corners
              }}
            ></div>
            <Typography
              variant="h3"
              color="white"
              position="relative"
              textAlign="center"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "50px",
                  sm: "50px",
                  md: "3.4285714285714284rem;",
                  lg: "3.4285714285714284rem;",
                  xl: "3.4285714285714284rem;",
                },
                marginTop: {
                  xs: 25,
                  sm: 30,
                  md: 30,
                  lg: 30,
                  xl: 30,
                },
                justifyContent: "center",
              }}
            >
              Trading Card Game
            </Typography>
            <Typography
              variant="h6"
              color="white"
              marginTop={0}
              position="relative"
              textAlign="left"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "20px",
                  sm: "20px",
                  md: "2.4285714285714284rem",
                  lg: "2.4285714285714284rem",
                  xl: "2.4285714285714284rem",
                },
                justifyContent: "center",
              }}
            >
              Best Trading Card Game Ever!
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            height="600px"
            position="relative"
            style={{ width: "100%", overflow: "hidden" }} // Set width to 100% and hide overflow
          >
            <Image
              src="/images/bg/wallBg09.jpg"
              alt="Description of your image"
              layout="fill" // Fill the entire box
              objectFit="cover" // Use 'cover' to ensure the image covers the entire box
              objectPosition="center"
              style={{ borderRadius: "8px" }} // Optional: Add border-radius for rounded corners
            />
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                // Optional: Add border-radius for rounded corners
              }}
            ></div>
            <Typography
              variant="h3"
              color="white"
              marginTop={30}
              position="relative"
              textAlign="center"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "50px",
                  sm: "50px",
                  md: "3.4285714285714284rem;",
                  lg: "3.4285714285714284rem;",
                  xl: "3.4285714285714284rem;",
                },
                marginTop: {
                  xs: 25,
                  sm: 30,
                  md: 30,
                  lg: 30,
                  xl: 30,
                },
                justifyContent: "center",
              }}
            >
              Ninth Generation
            </Typography>
            <Typography
              variant="h6"
              color="white"
              marginTop={0}
              position="relative"
              textAlign="left"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "20px",
                  sm: "20px",
                  md: "2.4285714285714284rem",
                  lg: "2.4285714285714284rem",
                  xl: "2.4285714285714284rem",
                },
                justifyContent: "center",
              }}
            >
              One machine and million types
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Container>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Box
            paddingLeft={5}
            paddingTop={5}
            paddingRight={5}
            paddingBottom={5}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  sx={{
                    ml: {
                      xs: 4,
                      sm: 4,
                      md: 0,
                      lg: 0,
                      xl: 0,
                    },
                    mt: {
                      xs: -15,
                      sm: -15,
                      md: 2,
                      lg: 2,
                      xl: 2,
                    },
                    width: {
                      xs: 300,
                      sm: 300,
                      md: 600,
                      lg: 600,
                      xl: 600,
                    },
                    height: {
                      xs: 600,
                      sm: 600,
                      md: 600,
                      lg: 600,
                      xl: 600,
                    },
                    objectFit: "contain",
                    objectPosition: "center",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                  src="/images/figures/fig06.png"
                  alt="Description of your image"
                  width={275}
                  height={300}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    // width: "600px",
                    // height: "400px",
                    marginTop: "50px",
                    borderRadius: "10px",
                    boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center content horizontally
                    ml: {
                      xs: -4,
                      sm: -4,
                      md: -10,
                      lg: -10,
                      xl: -10,
                    },
                    mt: {
                      xs: -35,
                      sm: -35,
                      md: 6,
                      lg: 6,
                      xl: 6,
                    },
                    width: {
                      xs: 400,
                      sm: 300,
                      md: "600px",
                      lg: "600px",
                      xl: "600px",
                    },
                    height: {
                      xs: 400,
                      sm: 400,
                      md: "400px",
                      lg: "400px",
                      xl: "400px",
                    },
                  }}
                >
                  <Box padding={5}>
                    <Box>
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: {
                            xs: "32px",
                            sm: "32px",
                            md: "2.4285714285714284rem;",
                            lg: "2.4285714285714284rem;",
                            xl: "2.4285714285714284rem;",
                          },
                          marginLeft: {
                            xs: 0,
                            sm: 0,
                            md: 0,
                            lg: 0,
                            xl: 0,
                          },
                        }}
                        variant="h4"
                        fontWeight="bold"
                      >
                        About Us
                      </Typography>
                      <Divider
                        sx={{
                          marginTop: 1,
                          height: 3,
                          backgroundImage: `linear-gradient(to right, #ffde00 10%, #3b4cca 10%)`,
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#303030",
                          marginLeft: {
                            xs: 0,
                            sm: 0,
                            md: 0,
                            lg: 0,
                            xl: 0,
                          },
                        }}
                        variant="body1"
                        marginTop={3}
                        color="initial"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>

      <Box backgroundColor="#000000" pt={5} pb={3}>
        <Container>
          <Box pb={2}>
            <Typography
              sx={{
                color: "white",
                fontSize: {
                  xs: "32px",
                  sm: "32px",
                  md: "2.4285714285714284rem;",
                  lg: "2.4285714285714284rem;",
                  xl: "2.4285714285714284rem;",
                },
                marginLeft: {
                  xs: 0,
                  sm: 0,
                  md: 0,
                  lg: 0,
                  xl: 0,
                },
              }}
              variant="h4"
              fontWeight="bold"
            >
              Various Pokemons
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #ffde00 10%, #3b4cca 10%)`,
              }}
            />
          </Box>
          <Box padding="0px">
            <Swiper
              spaceBetween={20}
              slidesPerView={slidesPerView}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="cardSwiper"
            >
              <SwiperSlide>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  style={{ paddingBottom: "50px" }}
                >
                  <Card
                    sx={{
                      maxWidth: {
                        xs: 280,
                        sm: 280,
                        md: 280,
                        lg: 280,
                        xl: 280,
                      },
                      height: {
                        xs: 360,
                        sm: 360,
                        md: 360,
                        lg: 360,
                        xl: 360,
                      },
                      position: "relative",
                      background:
                        "linear-gradient(45deg, #A85EA2 30%, #6B2492 90%)",
                    }}
                  >
                    <Box
                      paddingY={2}
                      paddingX={0}
                      sx={{ position: "relative", height: "100%" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          ml: -40,
                          mt: -3,
                          width: {
                            xs: 800,
                            sm: 800,
                            md: 800,
                            lg: 800,
                            xl: 800,
                          },
                          height: {
                            xs: 600,
                            sm: 600,
                            md: 600,
                            lg: 600,
                            xl: 600,
                          },
                          objectFit: "contain",
                          objectPosition: "center",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                        src="/images/figures/fig04.png"
                        alt="Description of your image"
                        width={275}
                        height={300}
                      />

                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 2,
                          mt: 30,
                          paddingX: 0,
                          textAlign: "left",
                          backdropFilter: "blur(0px)", // Optional: adds a blur effect to the background
                          backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black background
                          boxShadow: "0px -16px 16px rgba(0, 0, 0, 0.3)",
                          width: "500px",
                          justifyContent: "center",
                          justifyItems: "center",
                        }}
                      >
                        <Box px={1} pt={0.5} pb={2}>
                          <Typography
                            variant="body2"
                            fontSize="14px"
                            color="white"
                          >
                            Legendary
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            gutterBottom
                            color="white"
                            sx={{
                              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)", // Apply shadow here
                            }}
                            marginTop={0}
                            fontSize="26px"
                            variant="h5"
                            component="div"
                          >
                            Mewtwo
                          </Typography>
                          <Chip
                            size="small"
                            sx={{
                              color: "white",
                              backgroundColor: "#d66ab0",
                              opacity: "80%",
                              mt: -2,
                            }}
                            icon={
                              <SensorOccupiedIcon
                                style={{
                                  color: "white",
                                }}
                              />
                            }
                            label="Psychic"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  style={{ paddingBottom: "50px" }}
                >
                  <Card
                    sx={{
                      maxWidth: {
                        xs: 250,
                        sm: 280,
                        md: 280,
                        lg: 280,
                        xl: 280,
                      },
                      height: {
                        xs: 360,
                        sm: 360,
                        md: 360,
                        lg: 360,
                        xl: 360,
                      },
                      position: "relative",
                      background:
                        "linear-gradient(45deg, #4A90E2 30%, #005AA7 90%)",
                    }}
                  >
                    <Box
                      paddingY={2}
                      paddingX={0}
                      sx={{ position: "relative", height: "100%" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          ml: -17,
                          mt: -5,
                          width: {
                            xs: 800,
                            sm: 800,
                            md: 750,
                            lg: 800,
                            xl: 800,
                          },
                          height: {
                            xs: 600,
                            sm: 600,
                            md: 600,
                            lg: 600,
                            xl: 600,
                          },
                          objectFit: "contain",
                          objectPosition: "center",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                        src="/images/figures/fig05.png"
                        alt="Description of your image"
                        width={275}
                        height={300}
                      />

                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 2,
                          mt: 30,
                          paddingX: 0,
                          textAlign: "left",
                          backdropFilter: "blur(0px)", // Optional: adds a blur effect to the background
                          backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black background
                          boxShadow: "0px -16px 16px rgba(0, 0, 0, 0.3)",
                          width: "500px",
                          justifyContent: "center",
                          justifyItems: "center",
                        }}
                      >
                        <Box px={1} pt={0.5} pb={2}>
                          <Typography
                            variant="body2"
                            fontSize="14px"
                            color="white"
                          >
                            Legendary
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            gutterBottom
                            color="white"
                            sx={{
                              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)", // Apply shadow here
                            }}
                            marginTop={0}
                            fontSize="26px"
                            variant="h5"
                            component="div"
                          >
                            Articuno
                          </Typography>
                          <Chip
                            size="small"
                            sx={{
                              color: "black",
                              backgroundColor: "#7ed8f2",
                              opacity: "80%",
                              mt: -2,
                            }}
                            icon={
                              <AcUnitIcon
                                style={{
                                  color: "black",
                                }}
                              />
                            }
                            label="Ice"
                          />
                          <Chip
                            size="small"
                            sx={{
                              color: "black",
                              backgroundColor: "#aab8c2",
                              opacity: "80%",
                              mt: -2,
                            }}
                            icon={
                              <FlightTakeoffIcon
                                style={{
                                  color: "black",
                                }}
                              />
                            }
                            label="Flying"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="zoom-in" data-aos-duration="500">
                  <Card
                    sx={{
                      maxWidth: {
                        xs: 250,
                        sm: 280,
                        md: 280,
                        lg: 280,
                        xl: 280,
                      },
                      height: {
                        xs: 360,
                        sm: 360,
                        md: 360,
                        lg: 360,
                        xl: 360,
                      },
                      position: "relative",
                      background:
                        "linear-gradient(45deg, #B4B4BD 30%, #5A6273 90%)",
                    }}
                  >
                    <Box
                      paddingY={2}
                      paddingX={0}
                      sx={{ position: "relative", height: "100%" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          ml: -48,
                          mt: 0,
                          width: {
                            xs: 750,
                            sm: 750,
                            md: 750,
                            lg: 750,
                            xl: 750,
                          },
                          height: {
                            xs: 600,
                            sm: 600,
                            md: 600,
                            lg: 600,
                            xl: 600,
                          },
                          objectFit: "contain",
                          objectPosition: "center",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                        src="/images/figures/fig07.png"
                        alt="Description of your image"
                        width={275}
                        height={300}
                      />

                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 2,
                          mt: 30,
                          paddingX: 0,
                          textAlign: "left",
                          backdropFilter: "blur(0px)", // Optional: adds a blur effect to the background
                          backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black background
                          boxShadow: "0px -16px 16px rgba(0, 0, 0, 0.3)",
                          width: "500px",
                          justifyContent: "center",
                          justifyItems: "center",
                        }}
                      >
                        <Box px={1} pt={0.5} pb={2}>
                          <Typography
                            variant="body2"
                            fontSize="14px"
                            color="white"
                          >
                            Legendary
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            gutterBottom
                            color="white"
                            sx={{
                              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)", // Apply shadow here
                            }}
                            marginTop={0}
                            fontSize="26px"
                            variant="h5"
                            component="div"
                          >
                            Arceus
                          </Typography>
                          <Chip
                            size="small"
                            sx={{
                              color: "black",
                              backgroundColor: "#bfbfbf",
                              opacity: "80%",
                              mt: -2,
                            }}
                            icon={
                              <TripOriginIcon
                                style={{
                                  color: "black",
                                }}
                              />
                            }
                            label="Normal"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="zoom-in" data-aos-duration="500">
                  <Card
                    sx={{
                      maxWidth: {
                        xs: 250,
                        sm: 280,
                        md: 280,
                        lg: 280,
                        xl: 280,
                      },
                      height: {
                        xs: 360,
                        sm: 360,
                        md: 360,
                        lg: 360,
                        xl: 360,
                      },
                      position: "relative",
                      background:
                        "linear-gradient(45deg, #F6E652 30%, #F6BD20 90%)",
                    }}
                  >
                    <Box
                      paddingY={2}
                      paddingX={0}
                      sx={{ position: "relative", height: "100%" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          ml: -30,
                          mt: -10,
                          width: {
                            xs: 600,
                            sm: 600,
                            md: 600,
                            lg: 600,
                            xl: 600,
                          },
                          height: {
                            xs: 500,
                            sm: 500,
                            md: 500,
                            lg: 500,
                            xl: 500,
                          },
                          objectFit: "contain",
                          objectPosition: "center",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                        src="/images/figures/fig01.png"
                        alt="Description of your image"
                        width={275}
                        height={300}
                      />

                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 2,
                          mt: 30,
                          paddingX: 0,
                          textAlign: "left",
                          backdropFilter: "blur(0px)", // Optional: adds a blur effect to the background
                          backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black background
                          boxShadow: "0px -16px 16px rgba(0, 0, 0, 0.3)",
                          width: "500px",
                          justifyContent: "center",
                          justifyItems: "center",
                        }}
                      >
                        <Box px={1} pt={0.5} pb={2}>
                          <Typography
                            variant="body2"
                            fontSize="14px"
                            color="white"
                          >
                            Common
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            gutterBottom
                            color="white"
                            sx={{
                              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)", // Apply shadow here
                            }}
                            marginTop={0}
                            fontSize="26px"
                            variant="h5"
                            component="div"
                          >
                            Pikachu
                          </Typography>
                          <Chip
                            size="small"
                            sx={{
                              color: "black",
                              backgroundColor: "#f8e71c",
                              opacity: "80%",
                              mt: -2,
                            }}
                            icon={
                              <BoltIcon
                                style={{
                                  color: "black",
                                }}
                              />
                            }
                            label="Electric"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div data-aos="zoom-in" data-aos-duration="500">
                  <Card
                    sx={{
                      maxWidth: {
                        xs: 250,
                        sm: 280,
                        md: 280,
                        lg: 280,
                        xl: 280,
                      },
                      height: {
                        xs: 360,
                        sm: 360,
                        md: 360,
                        lg: 360,
                        xl: 360,
                      },
                      position: "relative",
                      background:
                        "linear-gradient(45deg, #FFEEBD 30%, #E6A452 90%)",
                    }}
                  >
                    <Box
                      paddingY={2}
                      paddingX={0}
                      sx={{ position: "relative", height: "100%" }}
                    >
                      <Box
                        component="img"
                        sx={{
                          ml: -6,
                          mt: -4,
                          width: {
                            xs: 800,
                            sm: 800,
                            md: 450,
                            lg: 800,
                            xl: 800,
                          },
                          height: {
                            xs: 600,
                            sm: 600,
                            md: 450,
                            lg: 600,
                            xl: 600,
                          },
                          objectFit: "contain",
                          objectPosition: "center",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                        src="/images/figures/fig03.png"
                        alt="Description of your image"
                        width={275}
                        height={300}
                      />

                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 2,
                          mt: 30,
                          paddingX: 0,
                          textAlign: "left",
                          backdropFilter: "blur(0px)", // Optional: adds a blur effect to the background
                          backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black background
                          boxShadow: "0px -16px 16px rgba(0, 0, 0, 0.3)",
                          width: "500px",
                          justifyContent: "center",
                          justifyItems: "center",
                        }}
                      >
                        <Box px={1} pt={0.5} pb={2}>
                          <Typography
                            variant="body2"
                            fontSize="14px"
                            color="white"
                          >
                            Common
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            gutterBottom
                            color="white"
                            sx={{
                              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)", // Apply shadow here
                            }}
                            marginTop={0}
                            fontSize="26px"
                            variant="h5"
                            component="div"
                          >
                            Psyduck
                          </Typography>
                          <Chip
                            size="small"
                            sx={{
                              color: "black",
                              backgroundColor: "#4a90e2",
                              opacity: "80%",
                              mt: -2,
                            }}
                            icon={
                              <WaterDropIcon
                                style={{
                                  color: "black",
                                }}
                              />
                            }
                            label="Water"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </div>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Container>
      </Box>

      <div data-aos="zoom-in-up" data-aos-duration="2000">
        {" "}
        <Box paddingLeft={5} paddingTop={5} paddingRight={5} paddingBottom={5}>
          <Grid item xs={12} md={6}></Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  // width: "600px",
                  // height: "400px",
                  marginTop: "50px",
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center content horizontally
                  ml: {
                    xs: -2,
                    sm: -2,
                    md: 0,
                    lg: 0,
                    xl: 0,
                  },
                  mt: {
                    xs: 0,
                    sm: 0,
                    md: 6,
                    lg: 6,
                    xl: 6,
                  },
                  width: {
                    xs: 400,
                    sm: 300,
                    md: "600px",
                    lg: "600px",
                    xl: "600px",
                  },
                  height: {
                    xs: 400,
                    sm: 400,
                    md: "400px",
                    lg: "400px",
                    xl: "400px",
                  },
                }}
              >
                <Box padding={5}>
                  <Box>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: {
                          xs: "32px",
                          sm: "32px",
                          md: "2.4285714285714284rem;",
                          lg: "2.4285714285714284rem;",
                          xl: "2.4285714285714284rem;",
                        },
                        marginLeft: {
                          xs: 0,
                          sm: 0,
                          md: 0,
                          lg: 0,
                          xl: 0,
                        },
                      }}
                      variant="h4"
                      fontWeight="bold"
                    >
                      Feedbacks
                    </Typography>
                    <Divider
                      sx={{
                        marginTop: 1,
                        height: 3,
                        backgroundImage: `linear-gradient(to right, #ffde00 10%, #3b4cca 10%)`,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#303030",
                        marginLeft: {
                          xs: 0,
                          sm: 0,
                          md: 0,
                          lg: 0,
                          xl: 0,
                        },
                      }}
                      variant="body1"
                      marginTop={3}
                      color="initial"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  marginTop: "50px",
                  marginLeft: {
                    xs: "0",
                    sm: "0",
                    md: "130px",
                    lg: "130px",
                    xl: "130px",
                  },
                }}
              >
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  style={{ width: 320 }}
                  className="swiperSize"
                >
                  <SwiperSlide
                    className="swiperSlide"
                    style={{
                      boxShadow: "none",
                      backgroundColor: "rgba(0, 0, 0, 0.0)",
                    }}
                  >
                    <Image
                      className=""
                      src="/images/cards/rs_tcg01.png"
                      alt="Description of your image"
                      width={300}
                      height={400}
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      boxShadow: "none",
                      backgroundColor: "rgba(0, 0, 0, 0.0)",
                    }}
                  >
                    <Image
                      className=""
                      src="/images/cards/rs_tcg02.png"
                      alt="Description of your image"
                      width={300}
                      height={400}
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ backgroundColor: "transparent" }}>
                    <Image
                      className=""
                      src="/images/cards/rs_tcg00.png"
                      alt="Description of your image"
                      width={300}
                      height={400}
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ backgroundColor: "transparent" }}>
                    <Image
                      src="/images/cards/rs_tcg00.png"
                      alt="Description of your image"
                      width={300}
                      height={400}
                      objectFit="contain"
                      objectPosition="center"
                    />{" "}
                    <Image
                      className=""
                      src="/images/cards/tcg01.png"
                      alt="Description of your image"
                      width={300}
                      height={400}
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </SwiperSlide>
                </Swiper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div data-aos="zoom-in-up" data-aos-duration="2000">
        <Box paddingLeft={5} paddingRight={5} paddingTop={5} paddingBottom={5}>
          <Typography
            sx={{
              color: "#303030",
              textAlign: "center",
            }}
            variant="h4"
            fontWeight="bold"
            color="initial"
          >
            Partnership
          </Typography>

          <Grid display="flex" container gap={2} justifyContent="center">
            <Box
              display="flex"
              gap={2}
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="center"
              justifyItems="center"
            >
              <Card
                sx={{
                  width: "160px",
                  height: "100px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center content horizontally
                  width: {
                    xs: "150px",
                    sm: "150px",
                    md: "160px",
                    lg: "160px",
                    xl: "160px",
                  },
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
                      src="/logo/poke01.png"
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
                  width: "160px",
                  height: "100px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignItems: "center", // Center content horizontally
                  width: {
                    xs: "150px",
                    sm: "150px",
                    md: "160px",
                    lg: "160px",
                    xl: "160px",
                  },
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
                      style={{
                        marginTop: "-30px",
                        marginLeft: "-25px",
                      }}
                      src="/logo/poke02.png"
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
                  width: "160px",
                  height: "100px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center content horizontally
                  width: {
                    xs: "150px",
                    sm: "150px",
                    md: "160px",
                    lg: "160px",
                    xl: "160px",
                  },
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
                      src="/logo/poke03.png"
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
                  width: "160px",
                  height: "100px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center content horizontally
                  width: {
                    xs: "150px",
                    sm: "150px",
                    md: "160px",
                    lg: "160px",
                    xl: "160px",
                  },
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
                      src="/logo/poke04.png"
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
                  width: "160px",
                  height: "100px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center content horizontally
                  width: {
                    xs: "150px",
                    sm: "150px",
                    md: "160px",
                    lg: "160px",
                    xl: "160px",
                  },
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
                      src="/logo/poke05.png"
                      alt="Description of your image"
                      width={150}
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Box>
                </Box>
              </Card>
              <Card
                sx={{
                  width: "160px",
                  height: "100px",
                  marginTop: "20px",
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center content horizontally
                  width: {
                    xs: "150px",
                    sm: "150px",
                    md: "160px",
                    lg: "160px",
                    xl: "160px",
                  },
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
                      src="/logo/poke06.png"
                      alt="Description of your image"
                      width={140}
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Box>
      </div>
    </Grid>
  );
}

export default ResponsiveCarousel;
