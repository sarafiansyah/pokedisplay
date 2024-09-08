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
                    Reflow Oven Thermal Profile
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    KIC Profiler K²
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
                          marginTop={-4}
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
                            src="/images/about/kic-logo.png"
                            alt="Description of your image"
                            width={60}
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
                        src="/images/products/kic/kic-k2.png"
                        alt="Description of your image"
                        width={300}
                        height={200}
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
                        KIC Profiler K²
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5, marginTop: -2 }}
                        component="div"
                      >
                        <ul>
                          <li>Ease of Use</li>
                          <li>24 Hour World Class Customer Support</li>
                          <li>Oven Setup Software</li>
                          <li>KIC Profiler K² datasheet</li>
                          <li>Viewing on Mobile Devices</li>
                          <li>KIC Profiler K² A4 size datasheet</li>
                        </ul>
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
                  <b>Mid-Range Profile Setter</b>
                  <ul>
                    <li>
                      The K² profile setter replaces the last of KIC’s older
                      technology profilers
                    </li>
                    <li>Competitively priced for the mid-range market</li>
                  </ul>

                  <b>Compact and Robust Hardware</b>
                  <ul>
                    <li>
                      The K² will fit through the tight heated chambers often
                      found in lead-free production
                    </li>
                    <li>
                      <strong>7 TC unit dimensions:</strong>
                      <ul>
                        <li>206 x 60 x 17 (mm)</li>
                        <li>Shield: 302 x 75 x 23 (mm)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>9 TC unit dimensions:</strong>
                      <ul>
                        <li>206 x 75 x 17 (mm)</li>
                        <li>Shield: 312 x 90 x 23 (mm)</li>
                      </ul>
                    </li>
                    <li>
                      Durable hardware designed to withstand rough production
                      environments
                    </li>
                  </ul>

                  <b>Fail-Safe Operation</b>
                  <ul>
                    <li>
                      Automatic start when temperatures are below a specified
                      ‘start’ trigger, protecting the K² and assuring consistent
                      starting points and repeatable profiles
                    </li>
                    <li>Hardware designed for accurate measurements</li>
                    <li>
                      Engineer sets quality and productivity related parameters:
                      <ul>
                        <li>PWI level</li>
                        <li>Minimum/maximum allowable conveyor speed</li>
                        <li>Maximum peak temperature, etc.</li>
                      </ul>
                    </li>
                    <li>
                      For use by reflow oven operators, technicians, and
                      engineers who need a reflow oven thermal profile
                    </li>
                  </ul>

                  <b>Reflow Oven Setup Software</b>
                  <ul>
                    <li>
                      KIC’s optimization software does a complete search for all
                      possible combinations of oven zone temperatures and
                      conveyor speeds. It selects the very best oven setup for
                      each new product within seconds
                    </li>
                    <li>
                      User selectable setup criteria focuses on positioning the
                      profile towards:
                      <ul>
                        <li>the center of the process window</li>
                        <li>maximum conveyor speed</li>
                        <li>minimum oven electricity usage</li>
                      </ul>
                    </li>
                  </ul>

                  <b>Instant and Objective Profile Analysis</b>
                  <ul>
                    <li>
                      KIC’s famous Process Window Index (PWI) explains how the
                      profile fits the established process window, with a single
                      number:
                      <ul>
                        <li>PWI above 100 = profile out of spec</li>
                        <li>PWI at 100 = profile right on the spec limit</li>
                        <li>PWI below 100 = profile in spec</li>
                        <li>
                          PWI at 0 = the exact center of the process window
                        </li>
                      </ul>
                    </li>
                    <li>Immediate profile analysis</li>
                    <li>
                      Objective and personnel-independent profile analysis
                    </li>
                    <li>Outlying profile data made visible</li>
                  </ul>

                  <b>
                    Accessing the K² Profile Data on the PC or Mobile Device
                  </b>
                  <ul>
                    <li>
                      The profile data can be displayed in two ways:
                      <ul>
                        <li>On the oven PC or profiling PC</li>
                        <li>On an Authorized Android mobile device</li>
                      </ul>
                    </li>
                    <li>
                      Convenient sharing function for selected profile data
                    </li>
                  </ul>
                </Typography>
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
