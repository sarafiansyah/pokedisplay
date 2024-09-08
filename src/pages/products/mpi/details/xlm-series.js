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
                    color="#FF0000"
                  >
                    XLM Series
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    PCB InLine Vision Laser Marking System
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
                            style={{ marginTop: "10px" }}
                            className="box"
                            whileHover={{ scale: 1.1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                            src="/images/about/mpi_logo.png"
                            alt="Description of your image"
                            width={80}
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
                backgroundImage: `linear-gradient(to right, #000000 10%, #FF0000 10%)`,
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
                      <Box
                        component="img"
                        sx={{
                          width: {
                            xs: "100%",
                            sm: 350,
                            md: 350,
                            lg: 350,
                            xl: 350,
                          },
                          height: {
                            xs: "auto",
                            sm: 250,
                            md: 250,
                            lg: 250,
                            xl: 250,
                          },
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        src="/images/products/mpi/details/mpi_xlm_det05.png"
                        alt="Description of your image"
                      />
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Box sx={{ marginLeft: 5 }}>
                        <Box
                          component="img"
                          sx={{
                            width: {
                              xs: 350,
                              sm: 500,
                              md: 500,
                              lg: 500,
                              xl: 500,
                            },
                            height: {
                              xs: "auto",
                              sm: 250,
                              md: 250,
                              lg: 250,
                              xl: 250,
                            },
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          src="/images/products/mpi/details/mpi_xlm_det03.png"
                          alt="Description of your image"
                        />
                      </Box>
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
              <Box></Box>

              <Box margin={3}>
                <Typography
                  display="flex"
                  justifyContent="flex-start"
                  variant="h4"
                  fontSize={30}
                  fontWeight="bold"
                  color="#FF0000"
                >
                  Features
                </Typography>

                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #000000 10%, #FF0000 10%)`,
                  }}
                />
              </Box>

              <Box>
                <Box paddingX={5}>
                  <Box>
                    <Box></Box>
                    <Box
                      gap={2}
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
                      <Typography variant="body1" color="initial">
                        Combine the advantages of YVO4 and Fiber into one,
                        Hybrid laser marker Both high quality and high power
                        output. New developed laser machine with both YVO4 aser
                        and fiber laser characteristics. <br />
                        <br />
                        <b>High power output 13W</b>
                        <br />
                        It has both the high-quality marking of YVO4 laser and
                        the high-speed marking of fiber laser. It can be
                        beautifully and quickly engraved on metal and non-metal.
                        <br />
                        <br />
                        <b>Autofocus 3-Axis control </b>
                        <br />
                        The laser is equipped with a laser control system for X,
                        Y, Z, and three axes simultaneously to control the focus
                        freely. Realize the marking of three-dimensional shapes
                        and large-scale high-precision marking.
                      </Typography>
                      <Box
                        component="img"
                        sx={{
                          width: {
                            xs: "100%",
                            sm: 800,
                            md: 800,
                            lg: 800,
                            xl: 800,
                          },
                          height: {
                            xs: "auto",
                            sm: 600,
                            md: 600,
                            lg: 600,
                            xl: 600,
                          },
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        src="/images/products/mpi/details/mpi_xlm_det02.png"
                        alt="Description of your image"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box margin={3}>
                <Typography
                  display="flex"
                  justifyContent="flex-start"
                  variant="h4"
                  fontSize={30}
                  fontWeight="bold"
                  color="#FF0000"
                >
                  Specifications
                </Typography>

                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #000000 10%, #FF0000 10%)`,
                  }}
                />
              </Box>

              <Box>
                <Box paddingX={5}>
                  <Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    ></Box>
                    <Box
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
                      <Box
                        component="img"
                        sx={{
                          width: {
                            xs: "100%",
                            sm: 1000,
                            md: 1000,
                            lg: 1000,
                            xl: 1000,
                          },
                          height: {
                            xs: "auto",
                            sm: 500,
                            md: 500,
                            lg: 500,
                            xl: 500,
                          },
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        src="/images/products/mpi/details/mpi_xlm_det01.png"
                        alt="Description of your image"
                      />
                    </Box>
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
