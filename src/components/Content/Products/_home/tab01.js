import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Button,
  Typography,
  Box,
  Grid,
  MenuItem,
  FormControl,
  Card,
  Select,
  Divider,
  InputLabel,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

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
    setSelectedFilter("Laser Marking");
  };

  const tab01Filter02 = () => {
    setTab01LaserMarking(false);
    setTab01LabelMarking(true);
    setTab0InkjetMarking(false);
    setSelectedFilter("Label Marking");
  };
  const tab01Filter03 = () => {
    setTab01LaserMarking(false);
    setTab01LabelMarking(false);
    setTab0InkjetMarking(true);
    setSelectedFilter("Inkjet Marking");
  };

  // Handler to show the Laser Marking box
  const tab01Reset = () => {
    setTab01LaserMarking(true);
    setTab01LabelMarking(true);
    setTab0InkjetMarking(true);
    setSelectedFilter("Show All");
  };

  const handleSelectChange = (event) => {
    setSelectedFilter(event.target.value);
    // Depending on the value selected, call appropriate filter function or reset
    switch (event.target.value) {
      case "Laser Marking":
        tab01Filter01();
        break;
      case "Label Marking":
        tab01Filter02();
        break;
      case "Inkjet Marking":
        tab01Filter03();
        break;
      case "Show All":
        tab01Reset();
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
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{
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
          <Button variant="outlined" onClick={tab01Filter01} color="primary">
            Laser Marking
          </Button>
          <Button variant="outlined" onClick={tab01Filter02} color="primary">
            Label Marking
          </Button>
          <Button variant="outlined" onClick={tab01Filter03} color="primary">
            Ink-Jet Marking
          </Button>
          <Button variant="outlined" onClick={tab01Reset} color="primary">
            SHOW ALL
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
          <FormControl
            sx={{
              "@media (max-width: 600px)": {
                fontSize: "28px",
              },
              m: 1,
              minWidth: 10,
              width: "100%",
            }}
          >
            <Select
              value={selectedFilter}
              onChange={handleSelectChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
            >
              <MenuItem value="Laser Marking">Laser Marking</MenuItem>
              <MenuItem value="Label Marking">Label Marking</MenuItem>
              <MenuItem value="Inkjet Marking">Ink-Jet Marking</MenuItem>
              <MenuItem value="Show All">SHOW ALL</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
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
            Marking
          </Typography>
        </Box>
        {tab01LaserMarking && (
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
              Laser Marking
            </Typography>
            <Divider
              sx={{
                marginTop: 1,
                height: 3,
                backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
              }}
            />
            <Grid
              container
              spacing={3}
              sx={{
                "@media (max-width: 600px)": {
                  marginLeft: -3,
                },
              }}
            >
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="PLM Series"
                  imageSrc="/images/products/mpi/1-210623164121942.jpg"
                  description="plm-series"
                  subTitle="MPI"
                  imgHeight={120}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="XLM Series"
                  imageSrc="/images/products/mpi/1-21062513404X45.png"
                  description="xlm-series"
                  subTitle="MPI"
                  imgHeight={120}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="ULM Series"
                  imageSrc="/images/products/mpi/1-210625150U2247.jpg"
                  description="ulm-series"
                  subTitle="MPI"
                  imgHeight={120}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="ZLM Series"
                  imageSrc="/images/products/mpi/ZLM.jpg"
                  description="zlm-series"
                  subTitle="MPI"
                  imgHeight={120}
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab01LabelMarking && (
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
              Label Marking
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
                  title="AIM Series"
                  imageSrc="/images/products/mpi/1-210625135151193.jpg"
                  subTitle="MPI"
                  imgHeight={120}
                  description="aim-series"
                />
              </Grid>

              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab01InkjetMarking && (
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
              Ink-Jet Marking
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
                  title="ALM Series"
                  imageSrc="/images/products/mpi/1-210623113H0Y6.png"
                  subTitle="MPI"
                  imgHeight={120}
                  description="alm-series"
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
