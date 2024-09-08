import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Button,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Box,
  Grid,
  Card,
  Divider,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const fixedHeight = 600;

// Custom Card component

// Custom Tab Panel component
const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Accessibility props for tabs
const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

// Main Component
const Tab01 = () => {
  const [value, setValue] = useState(0);
  const [tab01LaserMarking, setTab01LaserMarking] = useState(true);
  const [tab01LabelMarking, setTab01LabelMarking] = useState(true);
  const [tab01InkjetMarking, setTab0InkjetMarking] = useState(true);

  const [tab02Section01, setTab02Section01] = useState(true);
  const [tab02Section02, setTab02Section02] = useState(true);
  const [tab02Section03, setTab02Section03] = useState(true);

  const [tab03Section01, setTab03Section01] = useState(true);
  const [tab03Section02, setTab03Section02] = useState(true);
  const [tab03Section03, setTab03Section03] = useState(true);
  const [tab03Section04, setTab03Section04] = useState(true);
  const [tab03Section05, setTab03Section05] = useState(true);
  const [tab03Section06, setTab03Section06] = useState(true);
  const [tab03Section07, setTab03Section07] = useState(true);
  const [tab03Section08, setTab03Section08] = useState(true);
  const [tab03Section09, setTab03Section09] = useState(true);

  // State to control visibility of sections in Tab 4
  const [tab04Section01, setTab04Section01] = useState(true);
  const [tab04Section02, setTab04Section02] = useState(true);
  const [tab04Section03, setTab04Section03] = useState(true);
  const [tab04Section04, setTab04Section04] = useState(true);
  const [tab04Section05, setTab04Section05] = useState(true);

  const [selectedFilter, setSelectedFilter] = useState("Show All");

  // Handler to hide the Laser Marking box
  const tab01Filter01 = () => {
    setTab01LaserMarking(true);
    setTab01LabelMarking(false);
    setTab0InkjetMarking(false);
  };

  const tab01Filter02 = () => {
    setTab01LaserMarking(false);
    setTab01LabelMarking(true);
    setTab0InkjetMarking(false);
  };
  const tab01Filter03 = () => {
    setTab01LaserMarking(false);
    setTab01LabelMarking(false);
    setTab0InkjetMarking(true);
  };

  // TAB02
  const tab02Filter01 = () => {
    setTab02Section01(true);
    setTab02Section02(false);
    setTab02Section03(false);
  };
  const tab02Filter02 = () => {
    setTab02Section01(false);
    setTab02Section02(true);
    setTab02Section03(false);
  };
  const tab02Filter03 = () => {
    setTab02Section01(false);
    setTab02Section02(false);
    setTab02Section03(true);
  };

  // TAB03
  const tab03Filter01 = () => {
    setTab03Section01(true);
    setTab03Section02(false);
    setTab03Section03(false);
    setTab03Section04(false);
    setTab03Section05(false);
    setTab03Section06(false);
    setTab03Section07(false);
    setTab03Section08(false);
    setTab03Section09(false);
    setSelectedFilter("Wave");
  };
  const tab03Filter02 = () => {
    setTab03Section01(false);
    setTab03Section02(true);
    setTab03Section03(false);
    setTab03Section04(false);
    setTab03Section05(false);
    setTab03Section06(false);
    setTab03Section07(false);
    setTab03Section08(false);
    setTab03Section09(false);
    setSelectedFilter("Fluxer");
  };
  const tab03Filter03 = () => {
    setTab03Section01(false);
    setTab03Section02(false);
    setTab03Section03(true);
    setTab03Section04(false);
    setTab03Section05(false);
    setTab03Section06(false);
    setTab03Section07(false);
    setTab03Section08(false);
    setTab03Section09(false);
    setSelectedFilter("Selective");
  };
  const tab03Filter04 = () => {
    setTab03Section01(false);
    setTab03Section02(false);
    setTab03Section03(false);
    setTab03Section04(true);
    setTab03Section05(false);
    setTab03Section06(false);
    setTab03Section07(false);
    setTab03Section08(false);
    setTab03Section09(false);
    setSelectedFilter("Auto Insert");
  };
  const tab03Filter05 = () => {
    setTab03Section01(false);
    setTab03Section02(false);
    setTab03Section03(false);
    setTab03Section04(false);
    setTab03Section05(true);
    setTab03Section06(false);
    setTab03Section07(false);
    setTab03Section08(false);
    setTab03Section09(false);
    setSelectedFilter("AOI");
  };
  const tab03Filter06 = () => {
    setTab03Section01(false);
    setTab03Section02(false);
    setTab03Section03(false);
    setTab03Section04(false);
    setTab03Section05(false);
    setTab03Section06(true);
    setTab03Section07(false);
    setTab03Section08(false);
    setTab03Section09(false);
    setSelectedFilter("ICT & FCT");
  };
  const tab03Filter07 = () => {
    setTab03Section01(false);
    setTab03Section02(false);
    setTab03Section03(false);
    setTab03Section04(false);
    setTab03Section05(false);
    setTab03Section06(false);
    setTab03Section07(true);
    setTab03Section08(false);
    setTab03Section09(false);
    setSelectedFilter("MDA ICT");
  };
  const tab03Filter08 = () => {
    setTab03Section01(false);
    setTab03Section02(false);
    setTab03Section03(false);
    setTab03Section04(false);
    setTab03Section05(false);
    setTab03Section06(false);
    setTab03Section07(false);
    setTab03Section08(true);
    setTab03Section09(false);
    setSelectedFilter("FAI");
  };
  const tab03Filter09 = () => {
    setTab03Section01(false);
    setTab03Section02(false);
    setTab03Section03(false);
    setTab03Section04(false);
    setTab03Section05(false);
    setTab03Section06(false);
    setTab03Section07(false);
    setTab03Section08(false);
    setTab03Section09(true);
    setSelectedFilter("Inline ICT & FCT");
  };

  // TAB04
  const tab04Filter01 = () => {
    setTab04Section01(true);
    setTab04Section02(false);
    setTab04Section03(false);
    setTab04Section04(false);
    setTab04Section05(false);
  };
  const tab04Filter02 = () => {
    setTab04Section01(false);
    setTab04Section02(true);
    setTab04Section03(false);
    setTab04Section04(false);
    setTab04Section05(false);
  };
  const tab04Filter03 = () => {
    setTab04Section01(false);
    setTab04Section02(false);
    setTab04Section03(true);
    setTab04Section04(false);
    setTab04Section05(false);
  };
  const tab04Filter04 = () => {
    setTab04Section01(false);
    setTab04Section02(false);
    setTab04Section03(false);
    setTab04Section04(true);
    setTab04Section05(false);
  };
  const tab04Filter05 = () => {
    setTab04Section01(false);
    setTab04Section02(false);
    setTab04Section03(false);
    setTab04Section04(false);
    setTab04Section05(true);
  };

  // Handler to show the Laser Marking box

  const tab03Reset = () => {
    setTab03Section01(true);
    setTab03Section02(true);
    setTab03Section03(true);
    setTab03Section04(true);
    setTab03Section05(true);
    setTab03Section06(true);
    setTab03Section07(true);
    setTab03Section08(true);
    setTab03Section09(true);
    setSelectedFilter("Show All");
  };

  const handleSelectChange = (event) => {
    setSelectedFilter(event.target.value);
    // Depending on the value selected, call appropriate filter function or reset
    switch (event.target.value) {
      case "Wave":
        tab03Filter01();
        break;
      case "Fluxer":
        tab03Filter02();
        break;
      case "Selective":
        tab03Filter03();
        break;
      case "Auto Insert":
        tab03Filter04();
        break;
      case "AOI":
        tab03Filter05();
        break;
      case "ICT & FCT":
        tab03Filter06();
        break;
      case "MDA ICT":
        tab03Filter07();
        break;
      case "FAI":
        tab03Filter08();
        break;
      case "Inline ICT & FCT":
        tab03Filter09();
        break;
      case "Show All":
        tab03Reset();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomCard = ({
    title,
    imgHeight,
    subTitle,
    imageSrc,
    description,
  }) => {
    const lowerCaseDescription = description.toLowerCase();
    const lowerCaseSubTitle = subTitle.toLowerCase();
    const capitalizedDescription = description
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("\n");
    return (
      <Card
        sx={{
          width: {
            xs: "180px",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          },
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
          <Box
            display="flex"
            paddingLeft={2}
            paddingRight={2}
            flexDirection="column"
          >
            <Box
              onClick={() => handleClickOpen(description, subTitle)}
              component="img"
              sx={{
                width: {
                  xs: "150px",
                  sm: 200,
                  md: 200,
                  lg: 200,
                  xl: 200,
                },
                height: {
                  xs: "100%",
                  sm: imgHeight,
                  md: imgHeight,
                  lg: imgHeight,
                  xl: imgHeight,
                },
                "@media (max-width: 600px)": {
                  // marginLeft: 3,
                },
                objectFit: "cover",
                objectPosition: "center",
                justifyContent: "center",
                textAlign: "center",
                justifyItems: "center",
              }}
              src={imageSrc}
              alt="Description of your image"
              objectFit="cover"
              objectPosition="center"
            />
            <Typography
              variant="body2"
              marginTop={2}
              fontWeight=""
              color="initial"
              sx={{
                "@media (max-width: 600px)": {
                  marginLeft: 0,
                  fontSize: "12px",
                },
              }}
            >
              {subTitle}
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              color="initial"
              sx={{
                "@media (max-width: 600px)": {
                  marginLeft: 0,
                  fontSize: "14px",
                },
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box marginTop={2} justifyContent="center" textAlign="center">
            <Button
              variant="outlined"
              href={`/products/${lowerCaseSubTitle}/details/${lowerCaseDescription}`}
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "12px",
                  paddingX: 2,
                },
              }}
            >
              More Details
            </Button>
          </Box>
        </Box>
      </Card>
    );
  };

  const handleClickOpen = (description, subTitle) => {
    // Convert description and subTitle to lowercase
    const lowerCaseDescription = description.toLowerCase();
    const lowerCaseSubTitle = subTitle.toLowerCase();

    // Redirect to the details page with the lowercase title
    window.location.href = `/products/${lowerCaseSubTitle}/details/${lowerCaseDescription}`;
  };

  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{ maxWidth: 1000, paddingBottom: 2 }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter01}
                color="primary"
              >
                Wave
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter02}
                color="primary"
              >
                Fluxer
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter03}
                color="primary"
              >
                Selective
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter04}
                color="primary"
              >
                Auto Insert
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter05}
                color="primary"
              >
                AOI
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter06}
                color="primary"
              >
                ICT & FCT
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter07}
                color="primary"
              >
                MDA ICT
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter08}
                color="primary"
              >
                FAI
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={tab03Filter09}
                color="primary"
              >
                Inline ICT & FCT
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={tab03Reset} color="primary">
                Show All
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
            <Select
              value={selectedFilter}
              onChange={handleSelectChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
            >
              <MenuItem value="Wave">Wave</MenuItem>
              <MenuItem value="Fluxer">Fluxer</MenuItem>
              <MenuItem value="Selective">Selective</MenuItem>
              <MenuItem value="Auto Insert">Auto Insert</MenuItem>
              <MenuItem value="AOI">AOI</MenuItem>
              <MenuItem value="ICT & FCT">ICT & FCT</MenuItem>
              <MenuItem value="MDA ICT">MDA ICT</MenuItem>
              <MenuItem value="FAI">FAI</MenuItem>
              <MenuItem value="Inline ICT & FCT">Inline ICT & FCT</MenuItem>
              <MenuItem value="Show All">SHOW ALL</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography
          variant="h4"
          fontWeight="bold"
          color="#2e2e2e"
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "28px",
            },
          }}
        >
          Through-Hole Technology (THT)
        </Typography>
        {tab03Section01 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              Wave Soldering
            </Typography>

            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TEW Series"
                  imageSrc="/images/products/tamura/wave/w_solder_1_01.jpg"
                  description="wave_tew"
                  subTitle="Tamura"
                  imgHeight={120}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TNW Series"
                  imageSrc="/images/products/tamura/wave/w_solder_1_02.jpg"
                  description="wave_tnw"
                  subTitle="Tamura"
                  imgHeight={120}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="HC-SS Series"
                  imageSrc="/images/products/tamura/wave/w_solder_2_01.png"
                  description="wave_hcss"
                  subTitle="Tamura"
                  imgHeight={120}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="HC-L Series"
                  imageSrc="/images/products/tamura/wave/w_solder_2_02.jpg"
                  description="wave_hcl"
                  subTitle="Tamura"
                  imgHeight={120}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Smart Wave"
                  imageSrc="/images/products/jt/jt-smartwave.webp"
                  description="smart-wave"
                  subTitle="JT"
                  imgHeight={120}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Nitrogen Solder"
                  imageSrc="/images/products/jt/jt-nitrowave.webp"
                  subTitle="JT"
                  imgHeight={120}
                  description="nitrogen-soldering"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="SE Series"
                  imageSrc="/images/products/jt/jt-se.webp"
                  description="se-series"
                  subTitle="JT"
                  imgHeight={120}
                />
              </Grid>
              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab03Section02 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              Fluxer
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TAF Series"
                  imageSrc="/images/products/tamura/fluxer/spray_fluxer_1_01.jpg"
                  description="fluxer_taf"
                  subTitle="Tamura"
                  imgHeight={120}
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab03Section03 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              Selective Solder
            </Typography>

            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TP Series"
                  imageSrc="/images/products/mpi/1-210623113H0Y6.png"
                  subTitle="Tamura"
                  imgHeight={120}
                  description="uncon"
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab03Section04 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              Auto Insert
            </Typography>

            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="i-12.0"
                  imageSrc="/images/products/pa/pa-i12.png"
                  description="pa-i12"
                  subTitle="Power-Automation"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="i-6.0A"
                  imageSrc="/images/products/pa/pa-i6a.png"
                  description="pa-i6a"
                  subTitle="Power-Automation"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="i-6.0"
                  imageSrc="/images/products/pa/pa-i6.png"
                  description="pa-i6"
                  subTitle="Power-Automation"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="i-4.0"
                  imageSrc="/images/products/pa/pa-i4.png"
                  description="pa-i4"
                  subTitle="Power-Automation"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Aviator Series"
                  imageSrc="/images/products/jte/jte-aviator.jpg"
                  description="aviator"
                  subTitle="JTE"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Navigator Series"
                  imageSrc="/images/products/jte/jte-navigator.jpg"
                  description="navigator"
                  subTitle="JTE"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Auto Radial Lead"
                  imageSrc="/images/products/jte/jte-autoRadial.png"
                  description="auto-radial"
                  subTitle="JTE"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Auto Axial Lead"
                  imageSrc="/images/products/jte/jte-autoAxial.jpg"
                  description="auto-axial"
                  subTitle="JTE"
                  imgHeight={220}
                />
              </Grid>
              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab03Section05 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              AOI
            </Typography>

            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="AIS20X"
                  imageSrc="/images/products/maker-ray/mr-ais20x.png"
                  description="ais20x"
                  subTitle="Maker-Ray"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="AIS30X"
                  imageSrc="/images/products/maker-ray/mr-ais30x.png"
                  description="ais30x"
                  subTitle="Maker-Ray"
                  imgHeight={220}
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab03Section06 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              ICT & FCT
            </Typography>

            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PTI-816SII ICT"
                  imageSrc="/images/products/pti/PTI-816SII.png"
                  description="pti-816sii"
                  subTitle="PTI"
                  imgHeight={220}
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab03Section07 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              MDA ICT
            </Typography>

            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PTI-818SII ICT"
                  imageSrc="/images/products/pti/816S-NEW-2.png"
                  description="pti-818sii"
                  subTitle="PTI"
                  imgHeight={220}
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab03Section08 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              First Article Inspection (FAI)
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PTI-500SMT"
                  imageSrc="/images/products/pti/PTI-500-FAI.jpg"
                  subTitle="PTI"
                  imgHeight={220}
                  description="pti-500"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PTI-500X SMT"
                  imageSrc="/images/products/pti/PTI-500X_First-Article-Inspection.png"
                  subTitle="PTI"
                  imgHeight={220}
                  description="pti-500x"
                />
              </Grid>
              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab03Section09 && (
          <Box marginBottom={5}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#0c248c"
              sx={{
                "@media (max-width: 600px)": {
                  fontSize: "20px",
                },
              }}
            >
              Inline ICT & FCT
            </Typography>

            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PTI-2000"
                  imageSrc="/images/products/pti/PTI-2000.png"
                  subTitle="PTI"
                  imgHeight={250}
                  description="pti-2000"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PTI-2000L"
                  imageSrc="/images/products/pti/PTI-2000L.png"
                  subTitle="PTI"
                  imgHeight={250}
                  description="pti-2000l"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PTI-2000B"
                  imageSrc="/images/products/pti/PTI-2000B.png"
                  subTitle="PTI"
                  imgHeight={250}
                  description="pti-2000b"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PTI-8090"
                  imageSrc="/images/products/pti/PTI-8090.png"
                  subTitle="PTI"
                  imgHeight={250}
                  description="pti-8090"
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Tab01;
