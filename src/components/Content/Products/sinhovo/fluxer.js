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
      <Grid paddingX={3} sx={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        <Box padding={3} marginTop={7}>
          <Box marginX={3} marginTop={3}>
            <Typography variant="h4" fontWeight="bold" color="#2e2e2e">
              Fluxer System
            </Typography>
            <Divider />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNU-CR Series"
                imageSrc="/images/products/r_solder_1_07.jpg"
                description="Equipped with high-speed model switching function
                Reduced maintenance frequency
                Prevent sudden line outages
                Reliable quality"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV Ver. III"
                imageSrc="/images/products/p_nav_mv01.jpg"
                description="Description for Jinno Fluxer"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM P/X series"
                imageSrc="/images/products/r_solder_1_03.jpg"
                description="Description for Jinno Fluxer"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CustomCard
                title="TNV-EM E Series"
                imageSrc="/images/products/r_solder_1_01.jpg"
                description="Description for Jinno Fluxer"
              />
            </Grid>
            {/* Other CustomCard components */}
          </Grid>
        </Box>
      </Grid>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {dialogContent.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Image
            src={dialogContent.imgSrc}
            alt="Image"
            width={300}
            height={200}
          />
          <Typography gutterBottom>{dialogContent.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ResponsiveCarousel;
