import { useEffect, useRef, useState } from "react";
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
import "aos/dist/aos.css";
import {
  Paper,
  Typography,
  Box,
  Container,
  Grid,
  Card,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ArrowForwardIosSharp as ArrowForwardIosSharpIcon } from "@mui/icons-material";

const fixedHeight = 600; // Set your desired fixed height

function ResponsiveCarousel() {
  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    imgSrc: "",
    description: "",
  });

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "#ffffff", // White background color
    boxShadow: "none", // No box shadow
    borderRadius: 0, // No border radius
    border: "none", // No border

    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

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
                    color="#259c2f"
                  >
                    Solder Paste Inspection System
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    aSPIre 3
                  </Typography>
                </Box>
                <Box>
                  <Tooltip title="Showing contents from Kohyoung">
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
                            src="/images/about/kohyoung_logo01.png"
                            alt="Description of your image"
                            width={115}
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
                backgroundImage: `linear-gradient(to right, #4591cd 10%, #259c2f 10%)`,
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
                        src="/images/products/kohyoung/spi/SPI_aSPIre3_Product-Image-768x809.png"
                        alt="Description of your image"
                        width={285}
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
                        The Industry’s Highest Performing 3D Solder Paste
                        Inspection System
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        The aSPIre 3 delivers the highest standard in the
                        metrology-level True 3D SPI market, ensuring
                        incomparable performance for the most demanding
                        applications. The inspection system leverages Koh
                        Young’s AI platforms for print process optimization with
                        the award-winning Koh Young Process Optimizer (KPO).
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
          <div
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
                  color="#259c2f"
                >
                  Key Features
                </Typography>

                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #4591cd 10%, #259c2f 10%)`,
                  }}
                />
              </Box>
              <Box></Box>
              <Box paddingX={5}>
                <Box display="flex">
                  <Box>
                    <Accordion
                      sx={{
                        boxShadow: "none", // No box shadow
                        borderRadius: 0, // No border radius
                        border: "none", // No border
                        borderBottom: "none",
                      }}
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Typography fontWeight="bold">
                          The Highest Standard in Metrology-level 3D Inspection
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          The aSPIre 3 incorporates proprietary and
                          multi-direction projection technology delivering
                          outstanding accuracy and repeatability required to
                          measure the emerging 03015M components used in
                          high-volume production. Furthermore, the aSPIre 3 sets
                          a higher standard in metrology-level 3D inspection by
                          overcoming inspection challenges like shadow and
                          specular reflection, as well as board warp and
                          non-linear challenges.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      sx={{
                        boxShadow: "none", // No box shadow
                        borderRadius: 0, // No border radius
                        border: "none", // No border
                      }}
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <AccordionSummary
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                      >
                        <Typography fontWeight="bold">
                          Beyond Solder Paste Inspection
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Inspection is not limited to just solder deposits. Koh
                          Young’s SPI system provides whole-board foreign
                          material inspection (WFMI), conductive glue, sinter
                          paste inspection with full color image display
                          results.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      sx={{
                        boxShadow: "none", // No box shadow
                        borderRadius: 0, // No border radius
                        border: "none", // No border
                      }}
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                    >
                      <AccordionSummary
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                      >
                        <Typography fontWeight="bold">
                          Active Warp Compensation
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          The unique Koh Young warp compensation technology,
                          Z-tracking 3D Compensation, actively calculates and
                          detects any substrate warpage. Using its exclusive 3D
                          imaging and algorithms, Koh Young considers multiple
                          elements like slope, stretch, twist, bow, and
                          shrinkage to guarantee an accurate measurement and to
                          meet the ultimate inspection system criteria.
                          <br />
                          <br />
                          Furthermore, the real-time, automatic Pad-referencing
                          2D compensation option uses IR lighting to compensate
                          for non-linear inspection challenges by analyzing the
                          PCB pad locations against the ideal PCB stencil design
                          defined in the CAD file.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      sx={{
                        boxShadow: "none", // No box shadow
                        borderRadius: 0, // No border radius
                        border: "none", // No border
                      }}
                      expanded={expanded === "panel4"}
                      onChange={handleChange("panel4")}
                    >
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <Typography fontWeight="bold">
                          Self-Diagnosis for Optimal Performance
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Unscheduled downtime can cripple production.
                          Self-Diagnosis allows operators to take precautionary
                          measures through predictive maintenance in order to
                          reduce process interruptions, enhance uptime, and
                          ensure optimal machine performance. The Self-Diagnosis
                          feature comes with distinct modules which offers
                          periodical machine checkups on critical items such as
                          3D/2D light intensity, PZT feed, height accuracy, and
                          XY offset.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion
                      sx={{
                        boxShadow: "none", // No box shadow
                        borderRadius: 0, // No border radius
                        border: "none", // No border
                      }}
                      expanded={expanded === "panel5"}
                      onChange={handleChange("panel5")}
                    >
                      <AccordionSummary
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                      >
                        <Typography fontWeight="bold">
                          KSMART Solutions: True 3D Measurement-based Process
                          Control System
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Koh Young pioneered True 3D measurement technology 20
                          years ago to create a zero-defect future. This gave
                          rise to KSMART Solutions and its continuous efforts to
                          leverage data and connectivity.
                          <br />
                          <br />
                          KSMART Solutions uses Artificial Intelligence to help
                          automate process control while focusing on data
                          management, analysis, and optimization. It collects
                          data from across the factory line for defect
                          detection, real-time optimization, enhance decisions,
                          and traceability to improve metrics, increase quality,
                          and lower costs by eliminating variance, false calls,
                          and escapes.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      sx={{
                        boxShadow: "none", // No box shadow
                        borderRadius: 0, // No border radius
                        border: "none", // No border
                      }}
                      expanded={expanded === "panel6"}
                      onChange={handleChange("panel6")}
                    >
                      <AccordionSummary
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                      >
                        <Typography fontWeight="bold">
                          Zero-defect through AI-Powered Koh Young Process
                          Optimizer (KPO) Mounter
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Koh Young is driven to help customers achieve a
                          Zero-defect mounting process. Based on Koh Young’s
                          accurate True 3D measurement data and its proprietary
                          deep learning technology, Koh Young Process Optimizer
                          (KPO) Mounter solution enables real-time mounting
                          process optimization. It automatically analyze heads,
                          nozzles, feeders, reels, and components to identify
                          the issue, and then details the mounting parameters
                          necessary to correct the fundamental problems.
                          <br />
                          <br />
                          Using AI-based analysis, KPO Mounter provides users
                          with actionable insights. With KPO Printer solution,
                          KPO Mounter can enhance your production quality and
                          maximizes productivity to minimize cost of ownership,
                          increase product quality, and maximize productivity.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                  <Box
                    sx={{
                      paddingLeft: "25px",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    <Image
                      className="box"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      src="/images/products/kohyoung/spi/SPI_aSPIre3_Product-Image-768x809.png"
                      alt="Description of your image"
                      width={285}
                      height={300}
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default ResponsiveCarousel;
