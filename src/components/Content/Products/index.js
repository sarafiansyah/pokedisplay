import React, { useEffect, useState } from "react";
import Layout from "@/components/";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Paper,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

import Tab01 from "@/components/Content/Products/_home/tab01.js";
import Tab02 from "@/components/Content/Products/_home/tab02.js";
import Tab03 from "@/components/Content/Products/_home/tab03.js";
import Tab04 from "@/components/Content/Products/_home/tab04.js";
import Tab05 from "@/components/Content/Products/_home/tab05.js";

// Custom Card component

// Custom Tab Panel component
const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Accessibility props for tabs
const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

// Main Component
const ResponsiveCarousel = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = (description, subTitle) => {
    // Convert description and subTitle to lowercase
    const lowerCaseDescription = description.toLowerCase();
    const lowerCaseSubTitle = subTitle.toLowerCase();

    // Redirect to the details page with the lowercase title
    window.location.href = `/products/${lowerCaseSubTitle}/details/${lowerCaseDescription}`;
  };

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
              style={{ width: "100%", overflow: "hidden" }}
            >
              <Image
                src="/images/products/products_home.jpg"
                alt="Description of your image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                style={{ borderRadius: "8px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                Products
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
                    xs: "22px",
                    sm: "24px",
                    md: "2.4285714285714284rem",
                    lg: "2.4285714285714284rem",
                    xl: "2.4285714285714284rem",
                  },
                }}
              >
                Browse Your Modern Technologies
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>

        <Container>
          <Box
            sx={{
              padding: {
                xs: 0,
                sm: 0,
                md: 3,
                lg: 3,
                xl: 3,
              },
            }}
          >
            <Box marginX={0} marginTop={3}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="responsive tabs example"
                    variant="scrollable" // Allows horizontal scrolling
                    scrollButtons="auto" // Shows scroll buttons when needed
                    allowScrollButtonsMobile // Enables scroll buttons on mobile
                  >
                    <Tab
                      label="Marking"
                      {...a11yProps(0)}
                      sx={{ flexGrow: 1 }} // Flex-grow allows it to expand
                    />
                    <Tab
                      label="Surface Mount Technology (SMT)"
                      {...a11yProps(1)}
                      sx={{ flexGrow: 1 }}
                    />
                    <Tab
                      label="Through-Hole Technology (THT)"
                      {...a11yProps(2)}
                      sx={{ flexGrow: 1 }}
                    />
                    <Tab
                      label="Conformal Coating"
                      {...a11yProps(3)}
                      sx={{ flexGrow: 1 }}
                    />
                    <Tab
                      label="Others"
                      {...a11yProps(4)}
                      sx={{ flexGrow: 1 }}
                    />
                  </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                  <Tab01 />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <Tab02 />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <Tab03 />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <Tab04 />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                  <Tab05 />
                </CustomTabPanel>
              </Box>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default ResponsiveCarousel;
