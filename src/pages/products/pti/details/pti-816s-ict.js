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
                    Electrical Performance Test Equipment
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    PTI-816S ICT
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
                            src="/images/about/pti-logo.png"
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
                backgroundImage: `linear-gradient(to right, #454545 10%, #11225a 10%)`,
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
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} sm={7}>
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ marginLeft: { xs: 0, sm: 5 } }}
                        color="initial"
                      >
                        PTI-816S In-Circuit Tester
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ marginLeft: { xs: 0, sm: 5 } }}
                        color="initial"
                      >
                        High Speed and Accuracy Measurement and Testing.
                        Friendly UI with fast and easy program development.
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: { xs: 0, sm: 5 } }}
                        component="div"
                      >
                        <ul>
                          <li>Four-wire test method</li>
                          <li>High voltage detection</li>
                          <li>USB communication</li>
                          <li>MES</li>
                          <li>Patent board</li>
                          <li>Split-type structure</li>
                        </ul>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ textAlign: "right" }}>
                      <Image
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src="/images/products/pti/816S-NEW-2.png"
                        alt="Description of your image"
                        width={300}
                        height={400}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Grid>
                  </Grid>
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
                  color="#0c248c"
                >
                  Optional Components
                </Typography>

                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #454545 10%, #11225a 10%)`,
                  }}
                />
              </Box>
              <Box paddingX={5}>
                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} sm={6} md={3}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          justifyContent: "center",
                          alignItems: "center",
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
                          src="/images/products/pti/details/pti816s-det01.jpg"
                          alt="Description of your image"
                          width={200}
                          height={150}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="initial"
                        sx={{ marginTop: 2, textAlign: "center" }}
                      >
                        Report function
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ textAlign: "center" }}
                      >
                        Support factory management system to improve product
                        quality and traceability
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          justifyContent: "center",
                          alignItems: "center",
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
                          src="/images/products/pti/details/pti816s-det02.jpg"
                          alt="Description of your image"
                          width={200}
                          height={150}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="initial"
                        sx={{ marginTop: 2, textAlign: "center" }}
                      >
                        Flexible Multi-boards
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ textAlign: "center" }}
                      >
                        Flexible multi-board generation method
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          justifyContent: "center",
                          alignItems: "center",
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
                          src="/images/products/pti/details/pti816s-det03.jpg"
                          alt="Description of your image"
                          width={200}
                          height={150}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="initial"
                        sx={{ marginTop: 2, textAlign: "center" }}
                      >
                        Board display
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ textAlign: "center" }}
                      >
                        Easy to see the component bad, pin point position, easy
                        maintenance
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          display: { xs: "none", sm: "flex" },
                          justifyContent: "center",
                          alignItems: "center",
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
                          src="/images/products/pti/details/pti816s-det04.jpg"
                          alt="Description of your image"
                          width={200}
                          height={150}
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="initial"
                        sx={{ marginTop: 2, textAlign: "center" }}
                      >
                        Automatically generate/export
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ textAlign: "center" }}
                      >
                        The software automatically generates the product
                        measurable rate report, which can be directly exported
                        to EXCEL
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
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
