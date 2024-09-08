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

  // TAB04
  const tab04Filter01 = () => {
    setTab04Section01(true);
    setTab04Section02(false);
    setTab04Section03(false);
    setTab04Section04(false);
    setTab04Section05(false);
    setSelectedFilter("Coating");
  };
  const tab04Filter02 = () => {
    setTab04Section01(false);
    setTab04Section02(true);
    setTab04Section03(false);
    setTab04Section04(false);
    setTab04Section05(false);
    setSelectedFilter("Plasma");
  };
  const tab04Filter03 = () => {
    setTab04Section01(false);
    setTab04Section02(false);
    setTab04Section03(true);
    setTab04Section04(false);
    setTab04Section05(false);
    setSelectedFilter("Curing");
  };
  const tab04Filter04 = () => {
    setTab04Section01(false);
    setTab04Section02(false);
    setTab04Section03(false);
    setTab04Section04(true);
    setTab04Section05(false);
    setSelectedFilter("Board Handling");
  };
  const tab04Filter05 = () => {
    setTab04Section01(false);
    setTab04Section02(false);
    setTab04Section03(false);
    setTab04Section04(false);
    setTab04Section05(true);
    setSelectedFilter("Coating Inspection");
  };

  // Handler to show the Laser Marking box

  const tab04Reset = () => {
    setTab04Section01(true);
    setTab04Section02(true);
    setTab04Section03(true);
    setTab04Section04(true);
    setTab04Section05(true);
    setSelectedFilter("Show All");
  };

  const handleSelectChange = (event) => {
    setSelectedFilter(event.target.value);
    // Depending on the value selected, call appropriate filter function or reset
    switch (event.target.value) {
      case "Coating":
        tab04Filter01();
        break;
      case "Plasma":
        tab04Filter02();
        break;
      case "Curing":
        tab04Filter03();
        break;
      case "Board Handling":
        tab04Filter04();
        break;
      case "Coating Inspection":
        tab04Filter05();
        break;
      case "Show All":
        tab04Reset();
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
          sx={{
            paddingBottom: 2,
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
          gap={2}
        >
          <Button variant="outlined" onClick={tab04Filter01} color="primary">
            Coating
          </Button>
          <Button variant="outlined" onClick={tab04Filter02} color="primary">
            Plasma
          </Button>
          <Button variant="outlined" onClick={tab04Filter03} color="primary">
            Curing
          </Button>
          <Button variant="outlined" onClick={tab04Filter04} color="primary">
            Board Handling
          </Button>
          <Button variant="outlined" onClick={tab04Filter05} color="primary">
            Coating Inspection
          </Button>
          <Button variant="outlined" onClick={tab04Reset} color="primary">
            Show All
          </Button>
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
              <MenuItem value="Coating">Coating</MenuItem>
              <MenuItem value="Plasma">Plasma</MenuItem>
              <MenuItem value="Curing">Curing</MenuItem>
              <MenuItem value="Board Handling">Board Handling</MenuItem>
              <MenuItem value="Coating Inspection">Coating Inspection</MenuItem>
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
          Conformal Coating
        </Typography>
        {tab04Section01 && (
          <Box marginBottom={5}>
            <Typography variant="h6" fontWeight="bold" color="#0c248c">
              Coating
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
                  title="iCoat-3 Series"
                  imageSrc="/images/products/anda/anda-icoat3.png"
                  description="icoat3-series"
                  subTitle="Anda"
                  imgHeight={180}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="iCoat-5 Series"
                  imageSrc="/images/products/anda/anda-icoat5.png"
                  description="icoat5-series"
                  subTitle="Anda"
                  imgHeight={180}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="iCoat-6 Series"
                  imageSrc="/images/products/anda/anda-icoat6.png"
                  description="icoat6-series"
                  subTitle="Anda"
                  imgHeight={180}
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab04Section02 && (
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
              Plasma Treatment
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
                  title="AP-3 Series"
                  imageSrc="/images/products/anda/anda-ap3.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="ap-3"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Inline VP"
                  imageSrc="/images/products/anda/anda-vpinline.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="vp-inline"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Offline VP"
                  imageSrc="/images/products/anda/anda-vpoffline.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="vp-offline"
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab04Section03 && (
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
              Curing
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
                  title="UV Curing"
                  imageSrc="/images/products/anda/anda-curingOven.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="uv-curing"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Vertical Curing"
                  imageSrc="/images/products/anda/anda-verticalOven.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="vco-curing"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Infrared Curing "
                  imageSrc="/images/products/anda/anda-heatOven.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="icure-infrared"
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab04Section04 && (
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
              Board Handling
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
                  title="ADJ-460"
                  imageSrc="/images/products/anda/anda-adj460.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="adj460"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="ADJ-460UV"
                  imageSrc="/images/products/anda/anda-adj460uv.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="adj460uv"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="SJ-460"
                  imageSrc="/images/products/anda/anda-sj460.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="sj460"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="UL-460W"
                  imageSrc="/images/products/anda/anda-ul460w.png"
                  subTitle="Anda"
                  imgHeight={100}
                  description="ul460w"
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab04Section05 && (
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
              Coating Inspection
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
                  title="AIS50X"
                  imageSrc="/images/products/maker-ray/mr-ais50x.png"
                  description="ais50x"
                  subTitle="Maker-Ray"
                  imgHeight={220}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="AIS40X-C"
                  imageSrc="/images/products/maker-ray/mr-ais40xc.png"
                  description="ais40x"
                  subTitle="Maker-Ray"
                  imgHeight={220}
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
