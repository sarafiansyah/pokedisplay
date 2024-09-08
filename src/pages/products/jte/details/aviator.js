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
                    color="#a83135"
                  >
                    Product Details
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    Aviator Series
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
                            src="/images/about/jete-logo.png"
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
                backgroundImage: `linear-gradient(to right, #222623 10%, #FF0000 10%)`,
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
                      <Box>
                        <Image
                          className="box"
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          src="/images/products/jte/jte-aviator.jpg"
                          alt="Description of your image"
                          width={300}
                          height={300}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
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
                        Aviator Series
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      ></Typography>
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
                  variant="h4"
                  fontSize={20}
                  fontWeight="bold"
                  color="#a83135"
                >
                  Specifications
                </Typography>
                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #222623 10%, #FF0000 10%)`,
                  }}
                />
              </Box>
              <Box margin={3}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#a83135" }}>
                      <TableRow>
                        <TableCell
                          colSpan={2}
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          Series
                        </TableCell>
                        <TableCell
                          colSpan={2}
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          AVIATOR
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      <TableRow sx={{ backgroundColor: "#a83135" }}>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          Model
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          Model No.
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          JTV-A400
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          JTV-A800
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Maximum size of substrate (including carrier)
                        </TableCell>

                        <TableCell width="25%">
                          Max.PCB Size (including fixture）
                        </TableCell>
                        <TableCell width="25%">
                          Dual C/V:L320xW300mm Single C/V:L320xW480mm
                        </TableCell>
                        <TableCell width="25%">
                          Dual C/V:L350xW300mm Single C/V:L350xW480mm
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          Pluggable component size
                        </TableCell>
                        <TableCell width="25%">Component Size</TableCell>
                        <TableCell width="25%">Max.L40x W40 x H50mm</TableCell>
                        <TableCell width="25%">Max.L40x W40 x H50mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          The board conveying height can be passed up and down
                        </TableCell>
                        <TableCell width="25%">PCB Clearance</TableCell>
                        <TableCell width="25%">Upper 70/Lower 22mm</TableCell>
                        <TableCell width="25%">Upper 70/Lower 22mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          Plug-in speed (theoretical)/Component
                        </TableCell>
                        <TableCell width="25%">Tact Time</TableCell>
                        <TableCell width="25%">0.8sec </TableCell>
                        <TableCell width="25%">0.75sec</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">Insertion accuracy</TableCell>
                        <TableCell width="25%">Insertion Accuracy</TableCell>
                        <TableCell width="25%">±0.05mm</TableCell>
                        <TableCell width="25%">O±0.03mm</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          Placement head mechanism
                        </TableCell>
                        <TableCell width="25%">Gantry Tpye </TableCell>
                        <TableCell width="25%">Dual Gantry</TableCell>
                        <TableCell width="25%">Dual Gantry</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          Number of plug-in heads
                        </TableCell>
                        <TableCell width="25%">No.of Insertion Head</TableCell>
                        <TableCell width="25%">4</TableCell>
                        <TableCell width="25%">8</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">Gripper/nozzle type</TableCell>
                        <TableCell width="25%">Gripper/Nozzle Type</TableCell>
                        <TableCell width="25%">
                          Independent Servo Motor
                        </TableCell>
                        <TableCell width="25%">
                          Independent Servo Motor
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          Automatic claw changing workstation
                        </TableCell>
                        <TableCell width="25%">
                          Auto Gripper Change Station
                        </TableCell>
                        <TableCell width="25%"></TableCell>
                        <TableCell width="25%"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          Number of feeding stations
                        </TableCell>
                        <TableCell width="25%">
                          No. of Feeder Stations
                        </TableCell>
                        <TableCell width="25%">
                          Up to 4 Front 4 Back4{" "}
                        </TableCell>
                        <TableCell width="25%">Up to 8 Front 8 Back8</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          Number of feeders that can be installed: Multi-tube
                          feeder, Tape feeder vibrating plate feeder, Dual-tray
                          feederMulti-tray feeder
                        </TableCell>
                        <TableCell width="25%"></TableCell>
                        <TableCell width="25%">
                          <Typography
                            fontSize="15px"
                            variant="body1"
                            sx={{ whiteSpace: "pre-line" }}
                            component="div"
                          >
                            {
                              "Front 4 Back 4 \nFront 4 Back 4 \nFront 4 Back 4 \nFront 1 Back 1 \nFront 1 Back 1"
                            }
                          </Typography>
                        </TableCell>
                        <TableCell width="25%">
                          <Typography
                            fontSize="15px"
                            variant="body1"
                            sx={{ whiteSpace: "pre-line" }}
                            component="div"
                          >
                            {
                              "Front 8 Back 8 \nFront 8 Back 8 \nFront 8 Back 8 \nFront 2 Back 2 \nFront 1 Back 2"
                            }
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">MES system support</TableCell>
                        <TableCell width="25%">MES Support</TableCell>
                        <TableCell width="25%">
                          O (Specific Negotiation)
                        </TableCell>
                        <TableCell width="25%">
                          O (Specific Negotiation)
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell width="25%">
                          Barcode/QR code recognition function
                        </TableCell>
                        <TableCell width="25%">
                          Barcode/OR Code Reader
                        </TableCell>
                        <TableCell width="25%"></TableCell>
                        <TableCell width="25%"></TableCell>
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
