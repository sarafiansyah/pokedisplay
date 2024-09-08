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
                    Inline Compact Automated Vertical Curing Oven (VCO)
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    Vertical Curing Oven (VCO)
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
                  "@media (max-width: 600px)": {
                    marginLeft: -7,
                    width: "400px",
                  },
                }}
              >
                <Box padding={5}>
                  <Box
                    display="flex"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      // Responsive breakpoints
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                        md: "row",
                        lg: "row",
                        xl: "row",
                      },
                    }}
                  >
                    <Box>
                      <Image
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src="/images/products/anda/anda-verticalOven.png"
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
                      sx={{
                        "@media (max-width: 600px)": {
                          marginLeft: -5,
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ marginLeft: 5, marginBottom: 1 }}
                        color="initial"
                      >
                        VCO-70
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        The Anda vertical curing oven (VCO) uses recirculating
                        hot air to accelerate printed circuit board assembly
                        (PCBA) cure times for underfill, epoxy resin
                        encapsulation, and adhesives. Our vertical curing oven
                        works inline with production processes for eliminating
                        manual loading/unloading of batch curing ovens. Unlike
                        horizontal conveyor style ovens, the VCO Series
                        accommodates larger quantities of boards utilizing a
                        compact footprint. This makes vertical curing an ideal
                        solution for processes where factory floor space is
                        limited or in clean room environments.
                        <br />
                        <br />
                        The uninterrupted curing process of the VCO Series
                        reduces manufacturing costs and improves both production
                        and quality of assemblies. Unlike a batch oven, the
                        doors on the VCO Series remain closed during production
                        ensuring constant heat tracking throughout the curing
                        process, this ensure coatings are precisely cured at
                        controlled temperatures in order to maximize coating
                        strength and provide better PCBA protection.
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
                    <li>Uniform temperature & thermal runaway protection</li>
                    <li>
                      8 independent recirculating hot air (RHA) heating control
                      zones
                    </li>
                    <li>PID closed loop control</li>
                    <li>Ergonomic control interface</li>
                    <li>
                      Modular design allows easy online maintenance & quick heat
                      module replacement
                    </li>
                    <li>Automatic conveyor width adjustment</li>
                    <li>Automatic door opening</li>
                    <li>
                      Entrance/Exit doors reduce heat loss & power consumption
                    </li>
                    <li>SMEMA communication protocol</li>
                    <li>CE certified</li>
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
              <Box
                margin={3}
                sx={{
                  "@media (max-width: 600px)": {
                    marginLeft: -0,
                    width: "370px",
                  },
                }}
              >
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow
                        sx={{
                          backgroundColor: "#234878",
                        }}
                      >
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Curing System
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Temperature</TableCell>
                        <TableCell>150℃</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Temperature Accuracy</TableCell>
                        <TableCell>±5℃</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Heating method</TableCell>
                        <TableCell> Recirculating Hot Air (RHA)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Number of Heat Zones</TableCell>
                        <TableCell>8 RHA zones</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Minimum Cycle Time</TableCell>
                        <TableCell>＞12s</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Minimum Cure Time</TableCell>
                        <TableCell>＞192s</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          backgroundColor: "#234878",
                        }}
                      >
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          Transmission System
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Product Spacing Pitch</TableCell>
                        <TableCell>25.4 mm (1″)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Product Storage</TableCell>
                        <TableCell>70 pieces</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Process Flow</TableCell>
                        <TableCell>
                          L to R (Standard), R to L (Optional)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Height</TableCell>
                        <TableCell>900 ± 20mm (35.43” ± 0.79”)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Product Dimensions</TableCell>
                        <TableCell>
                          L 100 x W 100 mm – L 500 x W 500 mm (L 3.94” x W 3.94”
                          – L 19.68” x W 19.68”)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>PCB Rim Space</TableCell>
                        <TableCell>10 mm (0.39”)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Top Conveyor Clearance</TableCell>
                        <TableCell>80 mm (3.14”)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Bottom Conveyor Clearance</TableCell>
                        <TableCell>50 mm (1.96”)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Width Adjust</TableCell>
                        <TableCell>Motorized</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Input / Output Door</TableCell>
                        <TableCell>Motorized</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Driving Method</TableCell>
                        <TableCell>
                          Metal chain conveyor with gear motor
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Width Adjustment</TableCell>
                        <TableCell>Automatic (motorized)</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          backgroundColor: "#234878",
                        }}
                      >
                        <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                          Facility
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Standard Footprint</TableCell>
                        <TableCell>
                          L 2450 x W 1800 x H 2500 mm (L 96.45″ x W 70.86″ x H
                          98.42″)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell>2500 kg (1136 lb)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Exhaust Port</TableCell>
                        <TableCell>150 mm (5.90″)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Power</TableCell>
                        <TableCell>
                          3 Phase 380 VAC (Standard), 208/480 VAC with
                          transformer (Optional)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Rated Power</TableCell>
                        <TableCell>35 kW</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          backgroundColor: "#234878",
                        }}
                      >
                        <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                          Interface
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Controller</TableCell>
                        <TableCell>PLC with touch screen</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>Communication Protocol</TableCell>
                        <TableCell>SMEMA & IPC-CFX</TableCell>
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
