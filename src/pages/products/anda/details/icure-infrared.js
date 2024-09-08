import React, { useEffect, useState } from "react";
import Footer from "@/components/layouts/Footer";
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
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "aos/dist/aos.css";
import {
  Paper,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import Image from "next/image";

import CloseIcon from "@mui/icons-material/Close";

const fixedHeight = 600; // Set your desired fixed height

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ResponsiveCarousel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    imgSrc: "",
    description: "",
  });

  const handleClickOpen = (title, imgSrc, description) => {
    setDialogContent({ title, imgSrc, description });
    setOpen(true);
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
              height={140}
              objectFit="cover"
              objectPosition="center center"
            />
          </Box>
          <Box marginTop={2}>
            {" "}
            <Button
              variant="outlined"
              onClick={() => handleClickOpen(title, imageSrc, description)}
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
        paddingX={0}
        paddingBottom={5}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <Container>
          <Box padding={3} marginTop={8}>
            <Box marginTop={3}>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography
                    variant="h6"
                    marginTop={2}
                    fontWeight="bold"
                    color="#0c248c"
                  >
                    Curing Oven Series
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    iCure Infrared Curing Oven Series
                  </Typography>
                </Box>
                <Box>
                  <Tooltip title="Showing contents from Tamura Corporation">
                    <Card
                      sx={{
                        width: "150px",
                        height: "80px",
                        marginTop: 2,
                        borderRadius: "10px",
                        boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                        display: { xs: "none", sm: "flex" },
                        flexDirection: "column",
                        alignItems: "center", // Center content horizontally
                      }}
                    >
                      <Box padding={5}>
                        <Box
                          marginTop={-2}
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
                            src="/images/about/anda-logo.png"
                            alt="Description of your image"
                            width={100}
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
                backgroundImage: `linear-gradient(to right, #363636 10%, #234878 10%)`,
              }}
            />
            <Box marginTop={3} paddingBottom={0} paddingX={5}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box padding={5}>
                  <Box display="flex">
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                      <Image
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src="/images/products/anda/anda-icure.png"
                        alt="Description of your image"
                        width={300}
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
                        iCure Series Infrared (IR) Curing Oven
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        iCure series is a compact, inline Infrared (IR) curing
                        module suitable for high volume, rapid curing of heat
                        curable coatings, adhesives and inks.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Grid>
      <Box padding={3}>
        <Container>
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            style={{ paddingBottom: "50px" }}
          >
            <Box sx={{ paddingBottom: 5, paddingX: 0 }}>
              <Box margin={3}>
                <Typography
                  display="flex"
                  justifyContent="flex-start"
                  variant="h4"
                  fontSize={30}
                  fontWeight="bold"
                  color="#0c248c"
                >
                  Product Details
                </Typography>
                <Typography
                  variant="h4"
                  fontSize={20}
                  fontWeight="bold"
                  color="#0c248c"
                >
                  Features & Benefits
                </Typography>
                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #363636 10%, #234878 10%)`,
                  }}
                />
              </Box>
              <Box paddingX={5}>
                <Typography variant="body1" color="initial" component="div">
                  <ul>
                    <b>Standard Features</b>
                    <li>PLC and touch screen control</li>
                    <li>Edge carrying, variable speed pin chain conveyor</li>
                    <li>
                      Multiple, independently controlled infrared (IR) heat
                      zones operation
                    </li>
                    <li>Rail expansion compensation</li>
                    <li>SMEMA communication protocol</li>
                    <li>100 mm top and bottom side component clearances</li>
                    <li>Thermal couple process control</li>
                    <li>Independent heating zones</li>
                    <li>CE certified</li>
                  </ul>
                  <ul>
                    <b>Optional Features</b>
                    <li>Return conveyor </li>
                    <li>Return conveyor heating</li>
                    <li>Under conveyor heating</li>
                  </ul>
                </Typography>
              </Box>
              <Box margin={3}>
                <Typography
                  variant="h4"
                  fontSize={20}
                  fontWeight="bold"
                  color="#0c248c"
                >
                  Specifications
                </Typography>
                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #363636 10%, #234878 10%)`,
                  }}
                />
              </Box>
              <Box margin={3}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Transmission System
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Component Height</TableCell>
                        <TableCell>± 100 mm (± 3.93")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Board / Pallet Width</TableCell>
                        <TableCell>50 - 460 mm (1.96" - 18.11")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Process Flow</TableCell>
                        <TableCell>
                          L to R (Standard), R to L (Optional)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Height</TableCell>
                        <TableCell>900 ± 20 mm (35.53" ± 0.79")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Speed (XY)</TableCell>
                        <TableCell>0.5 - 5 m/min.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Width Adjustment</TableCell>
                        <TableCell>Manual</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Temperature Configuration
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Number of Heat Zone</TableCell>
                        <TableCell>2 / 3 / 4</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Temperature Control Range</TableCell>
                        <TableCell>
                          Room temperature - 100 °C (adjustable)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Heating Zone Power</TableCell>
                        <TableCell>600W x 7 heat tubes at each zone</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Temperature Stabilization Time</TableCell>
                        <TableCell>10 minutes</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Temperature Control Accuracy</TableCell>
                        <TableCell>± 5°C</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Facility
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Standard Footprint</TableCell>
                        <TableCell>
                          L 2000 / 3000 / 4000 x D 1070 x H 1300 mm
                          <br />
                          (L 78.74" / 118.11" / 157.48" x D 42.12" x H 51.18")
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell>
                          400 kg / 700 kg / 1000 kg
                          <br />
                          (iCure-2 / iCure-3 / iCure-4)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Input Power</TableCell>
                        <TableCell>3 Phase 380 VAC (Standard)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Exhaust Requirement</TableCell>
                        <TableCell>5 m³/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Total Power</TableCell>
                        <TableCell>9 KW / 13 KW / 18 KW</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Interface
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Controller</TableCell>
                        <TableCell>PLC and touch screen</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Communication Protocol</TableCell>
                        <TableCell>SMEMA</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default ResponsiveCarousel;
