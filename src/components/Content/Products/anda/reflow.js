import { useEffect, useState } from "react";
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
import Footer from "@/components/layouts/Footer";
import {
  Paper,
  Typography,
  Box,
  Container,
  Tooltip,
  Grid,
  Card,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
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

  const handleClickOpen = (description) => {
    window.location.href = `/products/tamura/details/${description}`; // Redirect to the details page with the provided title
    // setDialogContent({ title, imgSrc, description });
    // setOpen(true);
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
              onClick={() => handleClickOpen(description)}
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
            <Button
              variant="outlined"
              onClick={() => handleClickOpen(description)}
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
        paddingX={3}
        paddingBottom="100px"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <Box padding={3} marginTop={7}>
          <Box marginTop={3}>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
                  Reflow Soldering System
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="#0c248c">
                  N2 Reflow System
                </Typography>
              </Box>
              <Box>
                <Tooltip title="Showing contents from Tamura Corporation">
                  <Card
                    sx={{
                      width: "150px",
                      height: "80px",
                      marginTop: 0,
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNU-CR Series"
                imageSrc="/images/products/r_solder_1_07.jpg"
                description="reflow_tnu-cr"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV Ver. III"
                imageSrc="/images/products/p_nav_mv01.jpg"
                description="reflow_tnv_iii"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM P/X series"
                imageSrc="/images/products/r_solder_1_03.jpg"
                description="reflow_tnv-em_px"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            {/* Other CustomCard components */}
          </Grid>
          <Box marginTop={3}>
            <Typography variant="h6" fontWeight="bold" color="#0c248c">
              Dual Conveyor N2 Reflow System
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNU-CR Series"
                imageSrc="/images/products/r_solder_1_07.jpg"
                description="reflow_tnu-cr"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV Ver. III"
                imageSrc="/images/products/p_nav_mv01.jpg"
                description="reflow_tnv_iii"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM P/X series"
                imageSrc="/images/products/r_solder_1_03.jpg"
                description="reflow_tnv-em_px"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            {/* Other CustomCard components */}
          </Grid>
          <Box marginTop={3}>
            <Typography variant="h6" fontWeight="bold" color="#0c248c">
              Air Reflow System
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNU-CR Series"
                imageSrc="/images/products/r_solder_1_07.jpg"
                description="reflow_tnu-cr"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV Ver. III"
                imageSrc="/images/products/p_nav_mv01.jpg"
                description="reflow_tnv_iii"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM P/X series"
                imageSrc="/images/products/r_solder_1_03.jpg"
                description="reflow_tnv-em_px"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            {/* Other CustomCard components */}
          </Grid>
          <Box marginTop={3}>
            <Typography variant="h6" fontWeight="bold" color="#0c248c">
              Changine Energy Saving Structure for old Models
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNU-CR Series"
                imageSrc="/images/products/r_solder_1_07.jpg"
                description="reflow_tnu-cr"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV Ver. III"
                imageSrc="/images/products/p_nav_mv01.jpg"
                description="reflow_tnv_iii"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM P/X series"
                imageSrc="/images/products/r_solder_1_03.jpg"
                description="reflow_tnv-em_px"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            {/* Other CustomCard components */}
          </Grid>
          <Box marginTop={3}>
            <Typography variant="h6" fontWeight="bold" color="#0c248c">
              Select from Other Products
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNU-CR Series"
                imageSrc="/images/products/r_solder_1_07.jpg"
                description="reflow_tnu-cr"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV Ver. III"
                imageSrc="/images/products/p_nav_mv01.jpg"
                description="reflow_tnv_iii"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM P/X series"
                imageSrc="/images/products/r_solder_1_03.jpg"
                description="reflow_tnv-em_px"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="reflow_tnv-em_e"
              />
            </Grid>
            {/* Other CustomCard components */}
          </Grid>
        </Box>
      </Grid>
      <Footer />
    </>
  );
}

export default ResponsiveCarousel;
