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
                    Plasma Surface Treatment
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    AP-3 Series
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
                        src="/images/products/anda/anda-ap3.png"
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
                        AP-3 Series Plasma Surface Treatment Machine
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        The AP-3 Series are advanced atmospheric pressure plasma
                        surface treatment machines that are equipped with servo
                        motors and high speed ball screw linear actuators for
                        accuracy.
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
                    <li>
                      Inline Plasma Treatment: completely automated high
                      production atmospheric plasma treatment processing
                    </li>
                    <li>
                      Atmospheric Pressure Plasma: generate plasma solely using
                      compressed air without the need for carrier gases
                    </li>
                    <li>
                      Multi-functional: system can be used as standalone or
                      placed inline with upstream or downstream operation
                      processes
                    </li>
                    <li>
                      Environmentally Friendly: zero chemicals are used and no
                      harmful substances are produced
                    </li>
                    <li>
                      Cleaning: remove fine dust, oil, grease, organic,
                      inorganic and microbial contaminants
                    </li>
                    <li>
                      Activation: Increase surface energy to promote wetting and
                      adhesion
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
                  <Table aria-label="plasma processing specifications">
                    <TableHead>
                      <TableRow>
                        <TableCell>Specification</TableCell>
                        <TableCell align="right">Details</TableCell>
                        <TableCell align="right">Options</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Effective Work Area */}
                      <TableRow>
                        <TableCell>Effective Work Area</TableCell>
                        <TableCell align="right">L 450 x W 450 mm</TableCell>
                        <TableCell align="right">L 17.72" x W 17.72"</TableCell>
                      </TableRow>
                      {/* Clearance Height */}
                      <TableRow>
                        <TableCell>Clearance Height</TableCell>
                        <TableCell align="right">3 - 15 mm</TableCell>
                        <TableCell align="right">0.12" - 0.59"</TableCell>
                      </TableRow>
                      {/* RF Power */}
                      <TableRow>
                        <TableCell>RF Power</TableCell>
                        <TableCell align="right">500 W/1000 W</TableCell>
                        <TableCell align="right">300 - 620 W</TableCell>
                      </TableRow>
                      {/* RF Frequency */}
                      <TableRow>
                        <TableCell>RF Frequency</TableCell>
                        <TableCell align="right">20 - 25 kHz</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Nitrogen Generator */}
                      <TableRow>
                        <TableCell>Nitrogen Generator</TableCell>
                        <TableCell align="right">Optional</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Process Flow */}
                      <TableRow>
                        <TableCell>Process Flow</TableCell>
                        <TableCell align="right">L to R</TableCell>
                        <TableCell align="right">R to L</TableCell>
                      </TableRow>
                      {/* Conveyor Type */}
                      <TableRow>
                        <TableCell>Conveyor Type</TableCell>
                        <TableCell align="right">Chain</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Conveyor Height */}
                      <TableRow>
                        <TableCell>Conveyor Height</TableCell>
                        <TableCell align="right">900 ± 20 mm</TableCell>
                        <TableCell align="right">35.43” ± 0.79”</TableCell>
                      </TableRow>
                      {/* Conveyor Speed */}
                      <TableRow>
                        <TableCell>Conveyor Speed</TableCell>
                        <TableCell align="right">2 - 13 m/min</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Conveyor Width Adjustment */}
                      <TableRow>
                        <TableCell>Conveyor Width Adjustment</TableCell>
                        <TableCell align="right">Manual</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Motor */}
                      <TableRow>
                        <TableCell>Motor</TableCell>
                        <TableCell align="right">
                          Servo + Ball Screw Linear Actuator
                        </TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Spray Nozzle */}
                      <TableRow>
                        <TableCell>Spray Nozzle</TableCell>
                        <TableCell align="right">
                          AP-3P (Single above)
                        </TableCell>
                        <TableCell align="right">
                          AP-3DP (Dual - above and below)
                        </TableCell>
                      </TableRow>
                      {/* Max. Movement Speed */}
                      <TableRow>
                        <TableCell>Max. Movement Speed</TableCell>
                        <TableCell align="right">800 mm/s</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Working Speed */}
                      <TableRow>
                        <TableCell>Working Speed</TableCell>
                        <TableCell align="right">50 - 100 mm/s</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Effective Operating Height */}
                      <TableRow>
                        <TableCell>Effective Operating Height</TableCell>
                        <TableCell align="right">3 - 15 mm</TableCell>
                        <TableCell align="right">0.12" - 0.59"</TableCell>
                      </TableRow>
                      {/* Repeated Accuracy */}
                      <TableRow>
                        <TableCell>Repeated Accuracy</TableCell>
                        <TableCell align="right">± 0.2 mm</TableCell>
                        <TableCell align="right">± 0.007"</TableCell>
                      </TableRow>
                      {/* Standard Footprint */}
                      <TableRow>
                        <TableCell>Standard Footprint</TableCell>
                        <TableCell align="right">
                          L 900 x W 1300 x H 1627 mm
                        </TableCell>
                        <TableCell align="right">
                          L 35.43” x W 51.18” x H 64.06”
                        </TableCell>
                      </TableRow>
                      {/* Weight */}
                      <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell align="right">AP-3P: 530 kg</TableCell>
                        <TableCell align="right">1168 lb</TableCell>
                      </TableRow>
                      {/* Air Source */}
                      <TableRow>
                        <TableCell>Air Source</TableCell>
                        <TableCell align="right">0.4 Mpa</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Extraction */}
                      <TableRow>
                        <TableCell>Extraction</TableCell>
                        <TableCell align="right">5 m³/min</TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Input Power */}
                      <TableRow>
                        <TableCell>Input Power</TableCell>
                        <TableCell align="right">
                          AC 220 V 50/60 Hz 1P
                        </TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Controller */}
                      <TableRow>
                        <TableCell>Controller</TableCell>
                        <TableCell align="right">
                          PLC with touch screen control
                        </TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Software */}
                      <TableRow>
                        <TableCell>Software</TableCell>
                        <TableCell align="right">
                          Anda UI & Windows OS
                        </TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Programming */}
                      <TableRow>
                        <TableCell>Programming</TableCell>
                        <TableCell align="right">
                          File transfer, On-line vision programming with
                          keyboard/mouse
                        </TableCell>
                        <TableCell align="right">-</TableCell>
                      </TableRow>
                      {/* Communication Protocols */}
                      <TableRow>
                        <TableCell>Communication Protocols</TableCell>
                        <TableCell align="right">SMEMA & IPC-CFX</TableCell>
                        <TableCell align="right">-</TableCell>
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
