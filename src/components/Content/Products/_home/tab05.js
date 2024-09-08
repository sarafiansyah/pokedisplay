import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Typography, Box, Grid, Card, Divider } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

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
  const tab01Reset = () => {
    setTab01LaserMarking(true);
    setTab01LabelMarking(true);
    setTab0InkjetMarking(true);
  };
  const tab02Reset = () => {
    setTab02Section01(true);
    setTab02Section02(true);
    setTab02Section03(true);
  };
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
  };
  const tab04Reset = () => {
    setTab04Section01(true);
    setTab04Section02(true);
    setTab04Section03(true);
    setTab04Section04(true);
    setTab04Section05(true);
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
          Others
        </Typography>
        <Box>
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
            Thermal Profiler
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
                title="KIC Profiler K²"
                imageSrc="/images/products/kic/kic-k2.png"
                description="kic-profiler-k2"
                subTitle="KIC"
                imgHeight={120}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <CustomCard
                title="KICstart²"
                imageSrc="/images/products/kic/kic-start2.png"
                description="kic-start2"
                subTitle="KIC"
                imgHeight={120}
              />
            </Grid>

            {/* Other CustomCard components */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Tab01;
