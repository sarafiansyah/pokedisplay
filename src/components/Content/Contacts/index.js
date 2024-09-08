import React, { useEffect } from "react";
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
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

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
              style={{ width: "100%", overflow: "hidden" }} // Set width to 100% and hide overflow
            >
              <Image
                src="/images/contacts/tamura_corporation.jpg"
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
                Contacts
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
                    xs: "24px",
                    sm: "24px",
                    md: "2.4285714285714284rem",
                    lg: "2.4285714285714284rem",
                    xl: "2.4285714285714284rem",
                  },
                }}
              >
                We Are Here For You
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>

        <Container>
          <Box
            display="flex"
            padding={5}
            justifyContent="center"
            textAlign="center"
            gap={3}
            flexDirection={{ xs: "column", sm: "row" }} // Adjusting direction based on screen size
          >
            <Card
              sx={{
                width: { xs: "100%", sm: "600px" }, // Adjusting width based on screen size
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingX: 3,
              }}
            >
              <Image
                src="/logo/tamura02.png"
                alt="Description of your image"
                width={200}
                height={90}
                objectFit="cover"
                objectPosition="center"
              />
              <CardContent>
                <Box>
                  <Typography variant="body1" fontWeight="bold" component="div">
                    PT TAMURA TRADE INDONESIA
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Taman Surya II Blok D2/3 Cengkareng, Jakarta Barat 11830,
                    Indonesia
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Telp. (+62-21) 70616828 Fax (+62-21) 70616898 Email :
                    tamura@dnet.net.id
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Card sx={{ width: { xs: "100%", sm: "600px" }, height: "400px" }}>
              <Box marginTop={3}>
                <Iframe
                  url={googleMapsUrl}
                  width="480px"
                  height="350px"
                  display="initial"
                  position="relative"
                />
              </Box>
            </Card>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export default ResponsiveCarousel;
