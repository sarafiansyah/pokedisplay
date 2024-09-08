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
                    Offline Dispensing Machine Series
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    TSV-300
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
                        src="/images/products/anda/anda-tsv300.png"
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
                        TSV-300
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        TSV Series desktop dispensing system is applicable for
                        underall, LENS dispensing, FPC package, SMT red glue
                        dispensing, solder past dispensing, LED package,
                        fingerprint identication module, etc. at SMT & PCB
                        assembly, semiconductor package, electromechanical
                        assembly and flat-panel-display assembly.
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
                    <li>Computer Control, Windows OS</li>
                    <li>CCD visual positioning system</li>
                    <li>Servo Motor</li>
                    <li>UPS and voltage stabilizer</li>
                    <li>ESD grounding point</li>
                    <li>CE certified</li>
                  </ul>
                  <ul>
                    <b>Optional Features</b>
                    <li>
                      Automatic constant temperature system to ensure consistent
                      liquidity
                    </li>
                    <li>
                      Laser Height Detection to calibrate Z axis automatically
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
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Dispensing Parameters
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Standard Work Area</TableCell>
                        <TableCell>
                          X 300 × Y 300 mm
                          <br />
                          (X 11.81“ × Y 11.81“)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Components Height</TableCell>
                        <TableCell>95 mm (3.74”)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Operation Height Level</TableCell>
                        <TableCell>950 ± 20 mm (37.40" ± 0.79")</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Number of Valve</TableCell>
                        <TableCell>1 set</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nozzle Cleaner</TableCell>
                        <TableCell>Vacuum nozzle cleaning</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Transmission System
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Number of Axes</TableCell>
                        <TableCell>X, Y, Z axis</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Driver</TableCell>
                        <TableCell>Servo motor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Maximum Moving Speed</TableCell>
                        <TableCell>1000 mm/s</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Acceleration</TableCell>
                        <TableCell>0.8 g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Position Accuracy</TableCell>
                        <TableCell>
                          XY: ± 0.02 mm (±0.00078”)
                          <br />
                          Z: ± 0.01 mm (±0.00039”)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Repeatable Accuracy</TableCell>
                        <TableCell>
                          XY: ≤ 0.015mm (≤ 0.00059”)
                          <br />
                          Z: ± 0.005mm (±0.00019”)
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Vision System
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Resolution</TableCell>
                        <TableCell>1296 x 966 px</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Pixel Size</TableCell>
                        <TableCell>3.75 x 3.75 μm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Light Source</TableCell>
                        <TableCell>
                          Combination of ring light and co-axial light
                        </TableCell>
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
                          L 810 x W 660 x H 760 mm
                          <br />
                          (L 31.88” x W 25.98” x H 29.92”)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Weight</TableCell>
                        <TableCell>80 kg (176 lb)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ventilation</TableCell>
                        <TableCell>12m3/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Air Requirement</TableCell>
                        <TableCell>95 psi (0.6MPa)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Input Power</TableCell>
                        <TableCell>AC 220 V 50/60 Hz 10 A</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          Interface
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Controller</TableCell>
                        <TableCell>IPC and motion control card</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Software</TableCell>
                        <TableCell>
                          Anda user interface with Windows OS
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Programming</TableCell>
                        <TableCell>On-line vision programming</TableCell>
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
