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
                    Automatic PCB Flipper Inverter
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    UL-460W
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
                        src="/images/products/anda/anda-ul460w.png"
                        alt="Description of your image"
                        width={400}
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
                        UL-460W
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        The Anda UL-460W automatic flipper is a compact
                        inverting module for printed circuit boards (PCB) and
                        pallet / carriers within an inline process. During
                        operation, the pneumatic flipper smoothly inverts boards
                        being processed for dual sided applications. Once
                        inverted, the board assembly can continue on to the next
                        work cell or return to the original work-station in a
                        bi-directional mode.
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
                    <li>Robust steel frame construction</li>
                    <li>Pin-chain edge conveyor</li>
                    <li>Pneumatic board handling inverter</li>
                    <li>Four-inch top and bottom side component clearance</li>
                    <li>LCD front panel display with touchscreen</li>
                    <li>Circuit board flip and return or pass-through mode</li>
                    <li>
                      Trouble alarm with sound, light tower indicator, and menu
                      display
                    </li>
                    <li>
                      Adjustable conveyor board width from 50 mm to 460 mm
                    </li>
                    <li>SMEMA communication port</li>
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
                          Transmission System
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Driving system</TableCell>
                        <TableCell>
                          Micro Precision Speed Control Motor
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Process Flow</TableCell>
                        <TableCell>
                          L to R (Standard), R to L (Optional)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Type</TableCell>
                        <TableCell>Chain</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Speed (XY)</TableCell>
                        <TableCell>8 – 10 m/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Conveyor Height</TableCell>
                        <TableCell>900 ± 20mm (35.43” ± 0.79”)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Width Adjustment</TableCell>
                        <TableCell>Manual</TableCell>
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
                          L 700 × W 1060 × H 1520 mm (L 27.56” x W 41.73” x H
                          59.84”)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Power</TableCell>
                        <TableCell>AC 220 V 50/60 Hz</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Rated Power</TableCell>
                        <TableCell>0.2 kW</TableCell>
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
