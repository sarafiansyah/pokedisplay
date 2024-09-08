import React, { useEffect } from "react";
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
import "swiper/css/effect-cards";
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

  return (
    <>
      <Box>
        <Slider {...settings}>
          <CarouselItem
            image={images[0]}
            title="Useful Goods"
            subtitle="Subtitle 1"
          />
          <CarouselItem
            image={images[1]}
            title="Unleash The Machine"
            subtitle="Subtitle 2"
          />
          <CarouselItem
            image={images[2]}
            title="Awesomeness Overlimit"
            subtitle="Subtitle 3"
          />
        </Slider>
      </Box>

      <Container>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Box
            paddingLeft={5}
            paddingTop={5}
            paddingRight={5}
            paddingBottom={5}
          >
            <Typography variant="h4" fontWeight="bold" color="initial">
              About Us
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="body1" marginTop={5} color="initial">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                  style={{ paddingRight: "40px" }}
                >
                  <SwiperSlide
                    style={{ backgroundColor: "rgba(255, 0, 0, 0.0)" }}
                  >
                    <Image
                      src="/images/home/home01.jpg"
                      alt="Description of your image"
                      width={500}
                      height={300}
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ backgroundColor: "transparent" }}>
                    <Image
                      src="/images/home/home02.jpg"
                      alt="Description of your image"
                      width={500}
                      height={300}
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </SwiperSlide>
                  <SwiperSlide style={{ backgroundColor: "transparent" }}>
                    <Image
                      src="/images/home/home03.jpg"
                      alt="Description of your image"
                      width={500}
                      height={300}
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </SwiperSlide>
                </Swiper>
              </Grid>
            </Grid>
          </Box>
        </div>

        <Box padding="20px">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div
                data-aos="zoom-in"
                data-aos-duration="500"
                style={{ paddingBottom: "50px" }}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      width={285}
                      height={300}
                      image="/images/products/SPI_aSPIre3_Product-Image-285x300.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        aSPIre 3
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box paddingLeft={2} paddingBottom={3}>
                    <Button variant="contained" color="primary">
                      Find Out More
                    </Button>
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
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image="/images/products/SPI_KY8030-3_Product-Image-768x809.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        KY8030-3
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box paddingLeft={2} paddingBottom={3}>
                    <Button variant="contained" color="primary">
                      Find Out More
                    </Button>
                  </Box>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in" data-aos-duration="500">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image="/images/products/Jinno_Fluxer01.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Spray Fluxer
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box paddingLeft={2} paddingBottom={3}>
                    <Button variant="contained" color="primary">
                      Find Out More
                    </Button>
                  </Box>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in" data-aos-duration="500">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image="/images/products/Jinno_NeptuneC.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Neptune C+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box paddingLeft={2} paddingBottom={3}>
                    <Button variant="contained" color="primary">
                      Find Out More
                    </Button>
                  </Box>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div data-aos="zoom-in" data-aos-duration="500">
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/images/home/home03.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box paddingLeft={2} paddingBottom={3}>
                    <Button variant="contained" color="primary">
                      Find Out More
                    </Button>
                  </Box>
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
        </Box>
        <div data-aos="zoom-in-up" data-aos-duration="2000">
          <Box
            paddingLeft={5}
            paddingRight={5}
            paddingTop={5}
            paddingBottom={5}
          >
            <Typography variant="h4" fontWeight="bold" color="initial">
              Partnership
            </Typography>
            <Box display="flex">
              <Typography variant="body1" color="initial">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Typography>
              <motion.img
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                src="/images/home/home01.jpg"
                alt="Description of your image"
                width={400}
                height={200}
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Box>
        </div>
      </Container>
    </>
  );
}

export default ResponsiveCarousel;
