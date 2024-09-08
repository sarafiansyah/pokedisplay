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
                    High Speed Dispensing Machine Series
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    iJet-7 Series
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
                        src="/images/products/anda/anda-ijet7.png"
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
                        iJet-7 Series
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        iJet7H & iJet7L fluid dispensing systems offer both
                        precision and flexibility with a combination of
                        electronic dispensing head and control software.
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
                    <li>Computer control with Windows OS</li>
                    <li>CCD visual positioning system</li>
                    <li>Servo motor with ball screw</li>
                    <li>Inline CCD visual programming or gerber upload</li>
                    <li>UPS and voltage stabilizer</li>
                    <li>ESD grounding point</li>
                    <li>CE certified</li>
                  </ul>
                  <ul>
                    <b>Optional Features</b>
                    <li>Computer control with Windows OS</li>
                    <li>CCD visual positioning system</li>
                    <li>Servo motor with ball screw</li>
                    <li>Inline CCD visual programming or gerber upload</li>
                    <li>UPS and voltage stabilizer</li>
                    <li>ESD grounding point</li>
                    <li>CE certified</li>
                    <li>Heated valves for viscosity control</li>
                    <li>35 degree tilt and 360 degree rotation</li>
                    <li>
                      PCB heater enhances material flow for underfill
                      applications
                    </li>
                    <li>
                      Precision weight measurement ensures accurate volumetric
                      dispensing
                    </li>
                    <li>
                      Multiple valves available: Pneumatic jet valve, Slide
                      valve and Screw valve
                    </li>
                    <li>
                      Laser height detection to calibrate Z axis automatically
                      for component deformation
                    </li>
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
                        <TableCell sx={{ fontWeight: "bold" }}></TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          iJet-7H
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          iJet-7L
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Board Handling
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Standard Work Area</TableCell>
                        <TableCell>
                          Single valve: X 380 × Y 450 x Z 30 mm
                          <br />
                          (X 14.96" × Y 17.71" x Z 1.18")
                        </TableCell>
                        <TableCell>
                          Single valve X 650 × Y 650 x Z 30 mm (X 15.75" × Y
                          19.68" x Z 1.18")
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell>
                          Dual valve: X 260 × Y 450 x Z 30 mm
                          <br />
                          (X 10.23" × Y 17.71" x Z 1.18")
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell>
                          Single valve: X 650 × Y 650 x Z 30 mm
                          <br />
                          (X 15.75" × Y 19.68" x Z 1.18")
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Components Height</TableCell>
                        <TableCell>± 30 mm (1.18") from PCB</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Acceleration</TableCell>
                        <TableCell>0.8 g</TableCell>
                        <TableCell>0.8 g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>PCB Edge Clearance</TableCell>
                        <TableCell>≥ 3 mm (≥ 0.12")</TableCell>
                        <TableCell>≥ 3 mm (≥ 0.12")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>PCB Clearance Topside</TableCell>
                        <TableCell>30 mm (1.18")</TableCell>
                        <TableCell>30 mm (1.18")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Conveyor Width</TableCell>
                        <TableCell>
                          450 mm (17.71") for single valve
                          <br />
                          650 mm (25.59") for dual valve
                        </TableCell>
                        <TableCell> 650 mm (25.59")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Minimum Conveyor Width</TableCell>
                        <TableCell>50 mm (1.97")</TableCell>
                        <TableCell>50 mm (1.97")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fluid Volume</TableCell>
                        <TableCell>30 cc</TableCell>
                        <TableCell>30 cc</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fluid Level Sensor</TableCell>
                        <TableCell>Automatic monitor</TableCell>
                        <TableCell>Automatic monitor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Intelligent Automatic Nozzle Cleaner
                        </TableCell>
                        <TableCell>
                          Non-contact vacuum nozzle cleaning
                        </TableCell>
                        <TableCell>
                          Non-contact vacuum nozzle cleaning
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Transmission System
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Quantity</TableCell>
                        <TableCell>1 pair</TableCell>
                        <TableCell>1 pair</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Type</TableCell>
                        <TableCell>Thermostable ESD belt</TableCell>
                        <TableCell>Thermostable ESD belt</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Process Flow</TableCell>
                        <TableCell>
                          L to R (Standard), R to L (Optional)
                        </TableCell>
                        <TableCell>
                          L to R (Standard), R to L (Optional)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Height</TableCell>
                        <TableCell>950 ± 20 mm (37.40" ± 0.79")</TableCell>
                        <TableCell>950 ± 20 mm (37.40" ± 0.79")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Speed</TableCell>
                        <TableCell>2 - 13 m/min</TableCell>
                        <TableCell>2 - 13 m/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Width Adjustment</TableCell>
                        <TableCell>Automatic (motorized)</TableCell>
                        <TableCell>Automatic (motorized)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Width Adjustment Speed</TableCell>
                        <TableCell>250 mm/min</TableCell>
                        <TableCell>250 mm/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Loading</TableCell>
                        <TableCell>4 kg/m (even distribution)</TableCell>
                        <TableCell>4 kg/m (even distribution)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          XYZ Axis Configuration
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Number of Valves</TableCell>
                        <TableCell>
                          Single valve (Optional: Dual valves)
                        </TableCell>
                        <TableCell>Single valve only</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Motor</TableCell>
                        <TableCell>
                          X-Y Linear module and Z Servo motor
                        </TableCell>
                        <TableCell>Servo motor with ball screw</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Speed</TableCell>
                        <TableCell>1000 mm/s</TableCell>
                        <TableCell>800 mm/s</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Repeatability</TableCell>
                        <TableCell>± 0.01 mm (± 0.0004")</TableCell>
                        <TableCell>± 0.015 mm (± 0.00059")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Facility
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Standard Footprint</TableCell>
                        <TableCell>
                          L 790 × W 1600 × H 1600 mm
                          <br />
                          (L 31.10" × W 62.99" × H 62.99")
                        </TableCell>
                        <TableCell>
                          L 1220 × W 1600 × H 1600 mm
                          <br />
                          (L 48.03" × W 62.99" × H 62.99")
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell>700 kg (1540 lb)</TableCell>
                        <TableCell> 1350 kg (2970 lb)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Air Source</TableCell>
                        <TableCell>≥ 0.65 Mpa</TableCell>
                        <TableCell>≥ 0.65 Mpa</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Extraction</TableCell>
                        <TableCell>≥ 6.5 kgf/m³</TableCell>
                        <TableCell>≥ 6.5 kgf/m³</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Input Power</TableCell>
                        <TableCell>AC 220 V 50/60 Hz 1 Phase</TableCell>
                        <TableCell>AC 220 V 50/60 Hz 1 Phase</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Total Power</TableCell>
                        <TableCell>2.5 Kw</TableCell>
                        <TableCell>2.5 Kw</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Interface
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Controller</TableCell>
                        <TableCell>IPC and motion control card</TableCell>
                        <TableCell>IPC and motion control card</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Software</TableCell>
                        <TableCell>
                          Anda user interface with Windows OS
                        </TableCell>
                        <TableCell>
                          Anda user interface with Windows OS
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Programming</TableCell>
                        <TableCell>On-line vision programming</TableCell>
                        <TableCell>On-line vision programming</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Communications Protocol</TableCell>
                        <TableCell>SMEMA</TableCell>
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
