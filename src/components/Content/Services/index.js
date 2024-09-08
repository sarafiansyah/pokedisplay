import React, { useRef, useEffect } from "react";
import Layout from "@/components/";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper, Typography, Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Button } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import Iframe from "react-iframe";

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

  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.3415642135487!2d101.495388!3d3.0606721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c7163891813%3A0xea5795d317c12a32!2s2%2C%20Jalan%20Halba%2016%2F16%2C%20Seksyen%2016%2C%2040200%20Shah%20Alam%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2s!4v1646052484563!5m2!1sen!2s";

  return (
    <>
      <Layout>
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
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              height="600px"
              position="relative"
              style={{ width: "100%", overflow: "hidden" }} // Set width to 100% and hide overflow
            >
              <Image
                src="/images/services/services_home.jpg"
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
                variant="h2"
                color="white"
                marginTop={30}
                position="relative"
                textAlign="center"
                sx={{
                  textAlign: "center",

                  justifyContent: "center",
                }}
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
                  fontSize: {
                    xs: "18px",
                    sm: "18px",
                    md: "2.4285714285714284rem",
                    lg: "2.4285714285714284rem",
                    xl: "2.4285714285714284rem",
                  },
                }}
              >
                Our commiment is to deliver best services
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>

        <Container>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            style={{ paddingBottom: "50px" }}
          >
            <Box sx={{ paddingTop: 10, paddingBottom: 5, paddingX: 5 }}>
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
                          src="/images/services/services03.jpg"
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
                          Technical Support
                        </Typography>
                        <Typography
                          variant="body1"
                          color="initial"
                          sx={{ marginLeft: 5 }}
                        >
                          We offer user-friendly support to help clients
                          troubleshoot technical issues related to our products.
                          While we're highly confident in our products, we
                          understand the value of a strong technical support
                          team for unforeseen circumstances. Our commitment
                          extends to both product quality and service
                          excellence. With a strategic geographical presence,
                          particularly in S.E.A., we're adept at delivering
                          solutions quickly, outpacing our competitors.
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
                          Sparepart Support
                        </Typography>
                        <Typography
                          variant="body1"
                          color="initial"
                          sx={{ marginRight: 5 }}
                        >
                          We understand the critical importance of spare parts
                          in ensuring uninterrupted operations. In instances of
                          unexpected malfunctions, our technical support team
                          stands ready to assist. We proudly offer warranties on
                          the majority of our machine spare parts, collaborating
                          closely with customers to optimize operational
                          efficiency and maintain peak performance. With a
                          comprehensive range of spare parts readily available,
                          we swiftly address issues, minimizing losses and
                          inefficiencies.
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
                          src="/images/services/services01.jpg"
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
                          alt="Description of your image"
                          src="/images/services/services04.jpg"
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
                          Used Machines
                        </Typography>
                        <Typography
                          variant="body1"
                          color="initial"
                          sx={{ marginLeft: 5 }}
                        >
                          With our established reputation for quality products
                          and services, we're confident we can find the right
                          fit for your budget and requirements, whether you're
                          launching a new venture or updating existing
                          equipment. We offer competitive rates on both new and
                          used machines, ensuring performance matches
                          affordability. Additionally, we facilitate trade-ins
                          for customers looking to upgrade their technology.
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
                          Sourcing
                        </Typography>
                        <Typography
                          variant="body1"
                          color="initial"
                          sx={{ marginRight: 5 }}
                        >
                          We provide comprehensive services to our customers,
                          acting as a one-stop solution. If our customers or
                          partners require replacement parts or alternative
                          suppliers, we're here to help as part of our
                          value-added services. Don't hesitate to reach out to
                          us, and we'll leverage our extensive business network
                          to find you the best available offer.
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
                          src="/images/services/services02.jpg"
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
                          src="/images/services/services05.jpg"
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
                          Business Networking
                        </Typography>
                        <Typography
                          variant="body1"
                          color="initial"
                          sx={{ marginLeft: 5 }}
                        >
                          In today's fast-evolving global landscape, business
                          networking has emerged as a crucial avenue for
                          uncovering sales prospects and forging valuable
                          connections through recommendations and introductions.
                          This cost-effective marketing strategy yields
                          substantial returns, fostering communication and
                          alliances that unite top resources and talent.
                          Cultivating trust among participants, it elevates a
                          company's reputation and fosters collaboration.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default ResponsiveCarousel;
