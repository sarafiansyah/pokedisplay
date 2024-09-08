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
                    Precision Conformal Coating Machine Series
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    iCoat-5 Series
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
                        src="/images/products/anda/anda-icoat5.png"
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
                        iCoat-5 Series
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        iCoat-5 is Suitable for panelized or palletized PCBs ,
                        high mix requirements, process flexibility and large
                        area coating, Dual, Triple or Quad valves conguration, a
                        variety of valve arrangements, adapts to the production
                        needs of diverse panels,Automatic coating detection
                        mount over conveyor exit or X-axis for coating result
                        check
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
                    <li>
                      Automatic constant temperature system to ensure the
                      liquidity consistent
                    </li>
                    <li>
                      Laser Height Detection to calibrate Z axis automatically
                      for component deformation
                    </li>
                    <li>
                      2 valves can be accommodated in the standard machine
                    </li>
                    <li>
                      PC with LCD monitors, keyboard and mouse (height
                      adjustable)
                    </li>
                    <li>Auto dipping and purging waste collection system</li>
                    <li>LED UV lamps for inspection</li>
                    <li>PCB clamping system</li>
                    <li>UPS and voltage stabilizer</li>
                    <li>ESD grounding point</li>
                    <li>CE certified</li>
                  </ul>
                  <ul>
                    <b>Optional Features</b>
                    <li>Nozzles can be tilted 35º with 360º rotation</li>
                    <li>Heavy duty conveyor</li>
                    <li>2 stage conveyor</li>
                    <li>CCD vision camera</li>
                    <li>Material level detection</li>
                    <li>Pallet return conveyor (underneath)</li>
                    <li>Barcode or 2D code scanning system</li>
                    <li>Material tank: 1 gal / 3 gal / 5 gal / 10 gal</li>
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
                          Board Handling
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Standard Work Area</TableCell>
                        <TableCell>
                          X 450 × Y 450 × Z 100 mm
                          <br />
                          (X 17.71" × Y 17.71" × Z 3.93")
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Components Height</TableCell>
                        <TableCell>± 90 mm (± 3.54") from PCB</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>PCB Edge Clearance</TableCell>
                        <TableCell>≥ 5mm (≥ 0.19")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Single Spray Width</TableCell>
                        <TableCell>2 – 30 mm (0.078" – 1.18")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Conveyor Width</TableCell>
                        <TableCell>460 mm (18.11")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Minimum Conveyor Width</TableCell>
                        <TableCell>50 mm (1.95")</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Transmission System
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Process Flow</TableCell>
                        <TableCell>
                          L to R (Standard), R to L (Optional)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Height</TableCell>
                        <TableCell>900 ± 20 mm (35.43" ± 0.79")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Speed (XY)</TableCell>
                        <TableCell>0.5 - 5 m/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Width Adjustment</TableCell>
                        <TableCell>Automatic (motorized)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Rotation</TableCell>
                        <TableCell>Optional</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Operation Configuration
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="50%">No. of Valves</TableCell>
                        <TableCell>
                          Triple valves with U axis: Front two valves can tilt
                          35° and the third back valve non-tilt
                          <br />
                          Quad valves with U axis: Front two valves can tilt 35°
                          and back two valves fixed upright position
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Speed</TableCell>
                        <TableCell>800 mm/s</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Repeatability</TableCell>
                        <TableCell>± 0.02 mm (± 0.0007")</TableCell>
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
                          L 900 mm x W 1300 mm x H 1675 mm
                          <br />
                          (L 35.43" x W 51.18" x H 65.94")
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell>570 kg</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Motor Power</TableCell>
                        <TableCell>DC 24 V 69 W × 2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Air Sources</TableCell>
                        <TableCell>0.4 Mpa</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Exhaust Requirement</TableCell>
                        <TableCell>15 m³/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Input Power</TableCell>
                        <TableCell>AC 220 V 50/60 Hz</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Total Power</TableCell>
                        <TableCell>2.4 KW</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Interface
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Controller</TableCell>
                        <TableCell>
                          Integrated microprocessor controllers
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Software</TableCell>
                        <TableCell>
                          Anda user interface software with Windows
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Programming</TableCell>
                        <TableCell>Keyboard & mouse mode</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Communications Protocol</TableCell>
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
