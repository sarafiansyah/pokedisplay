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
                    N2 Wave Soldering System
                  </Typography>
                  <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                    TNW Series
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
                            src="/logo/tamura02.png"
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
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
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
                        src="/images/products/tamura/wave/w_solder_1_02.jpg"
                        alt="Description of your image"
                        width={400}
                        height={270}
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
                        Features
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                        component="div"
                      >
                        <ul>
                          <li>Hot N2 blow heating full chamber WAVE system</li>
                          <li>
                            Top Model of Tamura Wave Soldering System. Super
                            strong Heating Power technology based on Reflow
                            Machine
                          </li>
                        </ul>
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
                  Equipped with Tamura’s original “in-fire convection control”
                  technology
                </Typography>
                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                  }}
                />
              </Box>
              <Box paddingX={5}>
                <Box>
                  <Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginRight: 5 }}
                      >
                        Controlling the convection in the furnace reduces the
                        maintenance frequency. Equalizing the oxygen
                        concentration in the furnace reduces nitrogen
                        consumption.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        display: { xs: "none", sm: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%", // You might need to adjust this depending on your layout
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
                        src="/images/products/tamura/reflow/tnu_cr/tnu_cr_series_02.jpg"
                        alt="Description of your image"
                        width={850}
                        height={290}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box margin={3}>
                <Typography
                  variant="h4"
                  fontSize={20}
                  fontWeight="bold"
                  color="#0c248c"
                >
                  Equipped with high-speed model switching function
                </Typography>
                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                  }}
                />
              </Box>
              <Box>
                <Box paddingX={5}>
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
                        src="/images/products/tamura/reflow/tnu_cr/tnu_cr_series_03.jpg"
                        alt="Description of your image"
                        width={400}
                        height={300}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>

                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        Tamura&apos;s original temperature setup system can
                        significantly reduce the reflow waiting time when
                        changing setups.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box margin={3}>
                <Typography
                  variant="h4"
                  fontSize={20}
                  fontWeight="bold"
                  color="#0c248c"
                >
                  Prevent line stoppage
                </Typography>
                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                  }}
                />
              </Box>

              <Box>
                <Box paddingX={5}>
                  <Box display="flex">
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginRight: 5 }}
                      >
                        Tamura&apos;s unique sensing of flux residue announces
                        required maintenance and prevent s unexpected line
                        stoppage.
                      </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                      <Image
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                        src="/images/products/tamura/reflow/tnu_cr/tnu_cr_series_04.jpg"
                        alt="Description of your image"
                        width={400}
                        height={300}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box margin={3}>
                <Typography
                  variant="h4"
                  fontSize={20}
                  fontWeight="bold"
                  color="#0c248c"
                >
                  Reliable quality:Improved maintainability of the transport
                  mechanism
                </Typography>
                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                  }}
                />
              </Box>
              <Box>
                <Box paddingX={5}>
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
                        src="/images/products/tamura/reflow/tnu_cr/tnu_cr_series_05.jpg"
                        alt="Description of your image"
                        width={500}
                        height={300}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>

                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginLeft: 5 }}
                      >
                        Informs the user of lubrication requirements by
                        accumulating the mileage of transport system. A special
                        syringe applies lubricant automatically. This reduces
                        maintenance and minimizes the risk of metallic foreign
                        matter from improper maintenance of the transport
                        system.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box margin={3}>
                <Typography
                  variant="h4"
                  fontSize={20}
                  fontWeight="bold"
                  color="#0c248c"
                >
                  Connect with mounter manufacturers
                </Typography>
                <Divider
                  sx={{
                    marginTop: 1,
                    height: 3,
                    backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
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
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={{ marginRight: 5 }}
                      >
                        In addition to Tamura&apos;s original setup change
                        system, traceability with mounter companies and
                        automatic setup change system are available. We always
                        deliver the latest system to meet the needs of
                        automation and labour saving.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        display: { xs: "none", sm: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%", // You might need to adjust this depending on your layout
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
                        src="/images/products/tamura/reflow/tnu_cr/tnu_cr_series_06.jpg"
                        alt="Description of your image"
                        width={400}
                        height={320}
                        objectFit="cover"
                        objectPosition="center"
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
