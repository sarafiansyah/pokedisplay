import { useEffect, useState } from "react";
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
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const fixedHeight = 600; // Set your desired fixed height

function ResponsiveCarousel() {
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
                    AOI
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    43X-HW
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
                          marginTop={-1}
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
                            src="/images/about/mk-logo.png"
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
                backgroundImage: `linear-gradient(to right, #333333 10%, #172a88                10%)`,
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
                        src="/images/products/maker-ray/mr-ais43x.png"
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
                      sx={{
                        "@media (max-width: 600px)": {
                          marginLeft: -5,
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ marginLeft: 5, marginBottom: -1 }}
                        color="initial"
                      >
                        Features
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                        component="div"
                      >
                        <ul>
                          <li>
                            Height Section Positioning ,high level of
                            information visualization
                          </li>
                          <li>
                            Multi-directional sensor,multi-view corresponding
                            point phase consistency
                          </li>
                          <li>
                            Dynamic adaptive datum ensures measurement accuracy
                          </li>
                          <li>
                            AI intelligent programming simplifies complexity and
                            is more efficient
                          </li>
                        </ul>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
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
                      Description
                    </Typography>
                    <Divider
                      sx={{
                        marginTop: 1,
                        height: 3,
                        backgroundImage: `linear-gradient(to right, #333333 10%, #172a88 10%)`,
                      }}
                    />
                  </Box>
                  <Box paddingX={5}>
                    <Typography variant="body1" color="initial" component="div">
                      <ul>
                        <li>
                          Intelligently remove noise with depth map. Solve
                          distortion problem in 3Dimaging.
                        </li>
                        <li>
                          Measurement height can be configured, meeting a
                          variety of inspectionrequirements
                        </li>
                        <li>
                          Dynamic self-adoption reference plane algorithm to
                          calibrate substrate height
                        </li>
                        <li>
                          Multi-frequency four-step phase algorithm to
                          strengthen robustness, avoidinginfluence
                          ofillumination changing imaging
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
                        backgroundImage: `linear-gradient(to right, #333333 10%, #172a88                10%)`,
                      }}
                    />
                    <Box>
                      <Card
                        sx={{
                          width: "250px",
                          height: "280px",
                          marginTop: 2,
                          borderRadius: "10px",
                          boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",

                          flexDirection: "column",
                          alignItems: "center", // Center content horizontally
                        }}
                      >
                        <Box paddingTop={5}>
                          <Box
                            marginTop={2}
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
                              src="/images/about/mk-logo.png"
                              alt="Description of your image"
                              width={150}
                              objectFit="cover"
                              objectPosition="center center"
                            />

                            <Typography
                              variant="body1"
                              marginTop={5}
                              textAlign="center"
                              color="initial"
                            >
                              <b>AIS-43X HW</b> <br /> Specification Details
                            </Typography>
                            <Box marginTop={3}>
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={() =>
                                  window.open(
                                    "https://maker-rayaoi.com/product/ais43x-hw/#tab-a527b7ac5ce6f76cec8",
                                    "_blank"
                                  )
                                }
                              >
                                Find Out More
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Card>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Container>
      </Grid>

      <Footer />
    </>
  );
}

export default ResponsiveCarousel;
