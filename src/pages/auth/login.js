import React, { useEffect, useState } from "react";
import Layout from "@/components/";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper, Typography, Box, Container, Alert } from "@mui/material";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Button, TextField } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Swal from "sweetalert2";

import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
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

import { users } from "@/data/user";
import { useRouter } from "next/router";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      Swal.fire({
        title: "Login Successful",
        text: `Welcome!`,
        icon: "success",
      });
      setTimeout(() => {
        // Redirect to the dashboard or any other page after the delay
        router.push(user.role === "admin" ? "/admin" : "/");
      }, 1000);
    } else {
      // Show error alert
      Swal.fire({
        title: "Login Failed",
        text: "Invalid username or password.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      setError("Invalid username or password");
    }
  };

  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350.6333374359611!2d106.71557711459613!3d-6.1356241209860345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02a9140bde33%3A0x9bc4e5a26ac0d714!2sTaman%20Surya%20II%2C%20Pegadungan%2C%20Kecamatan%20Cengkareng%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1712180667895!5m2!1sen!2sid";

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
              display="flex"
              justifyContent="center"
              justifyItems="center"
              alignItems="center"
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

              <Box
                position="relative"
                marginTop={-2}
                display="flex"
                padding={5}
                justifyContent="center"
                gap={3}
                flexDirection={{ xs: "column", sm: "row" }} // Adjusting direction based on screen size
              >
                <Card
                  sx={{
                    width: { xs: "300px", sm: "600px" }, // Adjusting width based on screen size
                    height: "400px",
                    display: "flex",

                    paddingX: 3,
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Box>
                      <Box
                        component="img"
                        marginTop={60}
                        sx={{
                          // Position image absolutely
                          top: 0,
                          right: 0,
                          width: {
                            xs: "0px",
                            sm: 300,
                            md: 300,
                            lg: 300,
                            xl: 300,
                          },
                          height: {
                            xs: "100%",
                            sm: "1000px",
                            md: "1000px",
                            lg: "1000px",
                            xl: "1000px",
                          },
                          objectFit: "cover",
                          objectPosition: "center",
                          // Set z-index lower than content
                          // Optional: make image semi-transparent
                        }}
                        src="/images/figures/fig02.png"
                        alt="fig01"
                      />
                    </Box>
                    <Box
                      flexDirection="column"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      justifyItems="center"
                      marginTop={-5}
                      gap={2}
                    >
                      <Box
                        component="img"
                        // marginTop={60}
                        sx={{
                          // Position image absolutely
                          top: 0,
                          right: 0,
                          width: {
                            xs: "200px",
                            sm: "200px",
                            md: "200px",
                            lg: "200px",
                            xl: "200px",
                          },
                          height: {
                            xs: "100%",
                            sm: "100px",
                            md: "100",
                            lg: "100px",
                            xl: "100px",
                          },
                          objectFit: "contain",
                          objectPosition: "center",
                          // Set z-index lower than content
                          // Optional: make image semi-transparent
                        }}
                        src="/logo/logo01.png"
                        alt="fig01"
                      />
                      <Box
                        display="flex"
                        flexDirection="column"
                        marginTop={-3}
                        justifyContent="center"
                        justifyItems="center"
                        alignItems="center"
                        gap={2}
                        onSubmit={handleLogin}
                      >
                        <Typography
                          size="small"
                          variant="body1"
                          fontWeight="bold"
                        >
                          Login
                        </Typography>
                        <TextField
                          id="username"
                          label="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="user"
                        />
                        <TextField
                          id="username"
                          label="Password"
                          placeholder="user123"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Box display="flex" flexDirection="row" gap={1}>
                          {error && <Alert severity="error">{error}</Alert>}
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                          >
                            LOGIN
                          </Button>
                          <Button variant="contained" color="primary">
                            SIGN UP
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Layout>
    </>
  );
}

export default ResponsiveCarousel;
