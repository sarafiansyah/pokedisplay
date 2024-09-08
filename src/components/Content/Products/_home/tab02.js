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
  MenuItem,
  FormControl,
  Select,
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

  // TAB02
  const tab02Filter01 = () => {
    setTab02Section01(true);
    setTab02Section02(false);
    setTab02Section03(false);
    setSelectedFilter("AOI");
  };
  const tab02Filter02 = () => {
    setTab02Section01(false);
    setTab02Section02(true);
    setTab02Section03(false);
    setSelectedFilter("SPI");
  };
  const tab02Filter03 = () => {
    setTab02Section01(false);
    setTab02Section02(false);
    setTab02Section03(true);
    setSelectedFilter("Reflow");
  };

  // Handler to show the Laser Marking box

  const tab02Reset = () => {
    setTab02Section01(true);
    setTab02Section02(true);
    setTab02Section03(true);
    setSelectedFilter("Show All");
  };

  const handleSelectChange = (event) => {
    setSelectedFilter(event.target.value);
    // Depending on the value selected, call appropriate filter function or reset
    switch (event.target.value) {
      case "AOI":
        tab02Filter01();
        break;
      case "SPI":
        tab02Filter02();
        break;
      case "Reflow":
        tab02Filter03();
        break;
      case "Show All":
        tab02Reset();
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
        <Box padding={3}>
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
          <Button variant="outlined" onClick={tab02Filter01} color="primary">
            AOI
          </Button>
          <Button variant="outlined" onClick={tab02Filter02} color="primary">
            SPI
          </Button>
          <Button variant="outlined" onClick={tab02Filter03} color="primary">
            Reflow
          </Button>
          <Button variant="outlined" onClick={tab02Reset} color="primary">
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
          <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }}>
            <Select
              value={selectedFilter}
              onChange={handleSelectChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
            >
              <MenuItem value="AOI">AOI</MenuItem>
              <MenuItem value="SPI">SPI</MenuItem>
              <MenuItem value="Reflow">Reflow</MenuItem>
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
          Surface Mount Technology (SMT)
        </Typography>
        {tab02Section01 && (
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
              Automated optical inspection (AOI)
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
                  title="Zenith"
                  subTitle="Kohyoung"
                  imgHeight={200}
                  imageSrc="/images/products/kohyoung/aoi/AOI_Zenith_Product-Image-285x300.png"
                  description="aoi_zenith"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Zenith 2"
                  subTitle="Kohyoung"
                  imgHeight={200}
                  imageSrc="/images/products/kohyoung/aoi/AOI_Zenith-2_Product-Image_-285x300.png"
                  description="aoi_zenith_2"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Zenith F"
                  subTitle="Kohyoung"
                  imgHeight={200}
                  imageSrc="/images/products/kohyoung/aoi/AOI_Zenith-F_Product-Image-285x300.png"
                  description="aoi_zenith_f"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Zenith UHS"
                  subTitle="Kohyoung"
                  imgHeight={200}
                  imageSrc="/images/products/kohyoung/aoi/AOI_Zenith-UHS_Product-Image-285x300.png"
                  description="aoi_zenith_uhs"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Zenith Alpha"
                  subTitle="Kohyoung"
                  imgHeight={200}
                  imageSrc="/images/products/kohyoung/aoi/AOI_Zenith-Alpha_Product-Image-285x300.png"
                  description="aoi_zenith_alpha"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="AIS40X"
                  subTitle="Maker-Ray"
                  imgHeight={200}
                  imageSrc="/images/products/maker-ray/mr-ais40x.png"
                  description="ais40x"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="AIS43X"
                  subTitle="Maker-Ray"
                  imgHeight={200}
                  imageSrc="/images/products/maker-ray/mr-ais43x.png"
                  description="ais43x"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="SE-500"
                  subTitle="Sinhovo"
                  imgHeight={200}
                  imageSrc="/images/products/sinhovo/sinhovo-se500.png"
                  description="se500"
                />
              </Grid>
            </Grid>
          </Box>
        )}
        {tab02Section02 && (
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
              Solder paste inspection (SPI)
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
                  title="aSPIre3"
                  imageSrc="/images/products/kohyoung/spi/SPI_aSPIre3_Product-Image-768x809.png"
                  description="spi_aspire3"
                  subTitle="Kohyoung"
                  imgHeight={200}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="KY8030-3"
                  imageSrc="/images/products/kohyoung/spi/SPI_KY8030-3_Product-Image-768x809.png"
                  description="spi_ky8030_3"
                  subTitle="Kohyoung"
                  imgHeight={200}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="KY8030-2"
                  imageSrc="/images/products/kohyoung/spi/SPI_KY8030-2_Product-Image-768x809.png"
                  description="spi_ky8030_2"
                  subTitle="Kohyoung"
                  imgHeight={200}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="KY8080"
                  imageSrc="/images/products/kohyoung/spi/SPI_KY8080_M_Product-Image-768x809.png"
                  description="spi_ky8080"
                  subTitle="Kohyoung"
                  imgHeight={200}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="AIS63X"
                  imageSrc="/images/products/maker-ray/mr-ais63x.png"
                  description="ais63x"
                  subTitle="Maker-Ray"
                  imgHeight={200}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="SH8650M"
                  imageSrc="/images/products/sinhovo/sinhovo-sh8650m.png"
                  description="sh8650m"
                  subTitle="MPI"
                  imgHeight={200}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="SH8650II"
                  imageSrc="/images/products/sinhovo/sinhovo-sh8650ii.png"
                  description="sh8650ii"
                  subTitle="Sinhovo"
                  imgHeight={200}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="SH8650L"
                  imageSrc="/images/products/sinhovo/sinhovo-sh8650l.png"
                  description="sh8650l"
                  subTitle="Sinhovo"
                  imgHeight={200}
                />
              </Grid>
              {/* Other CustomCard components */}
            </Grid>
          </Box>
        )}
        {tab02Section03 && (
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
              Reflow Soldering
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
                  title="TNU-CR Series"
                  imageSrc="/images/products/r_solder_1_07.jpg"
                  description="reflow_tnu-cr"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TNV Ver. III"
                  imageSrc="/images/products/p_nav_mv01.jpg"
                  description="reflow_tnv_iii"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TNV-EM P/X "
                  imageSrc="/images/products/r_solder_1_03.jpg"
                  description="reflow_tnv-em_px"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TNV-EM E "
                  imageSrc="/images/products/r_solder_1_01.jpg"
                  description="reflow_tnv-em_e"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TNV-EM Mini "
                  imageSrc="/images/products/tamura/reflow/r_solder_1_04.jpg"
                  description="reflow_tnv_mini"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TNR15 "
                  imageSrc="/images/products/tamura/reflow/r_solder_1_05.jpg"
                  description="reflow_tnv-em_e"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TNV-EMD/EMT "
                  imageSrc="/images/products/tamura/reflow/r_solder_2_01.png"
                  description="reflow_tnv_emdemt"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TAP-EM/EME "
                  imageSrc="/images/products/tamura/reflow/r_solder_3_01.jpg"
                  description="reflow_tnv_em_e"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>

              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="Eco-Ni-Change"
                  imageSrc="/images/products/tamura/reflow/r_solder_5_01.jpg"
                  description="uncon"
                  subTitle="Tamura"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TRV Series"
                  imageSrc="/images/products/jt/jt-trv.webp"
                  description="trv-series"
                  subTitle="JT"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="JTR Series"
                  imageSrc="/images/products/jt/jt-jtr.webp"
                  description="jtr-series"
                  subTitle="JT"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="TEA Series"
                  imageSrc="/images/products/jt/jt-tea.webp"
                  description="tea-series"
                  subTitle="JT"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="RS Series"
                  imageSrc="/images/products/jt/jt-rs.webp"
                  description="rs-series"
                  subTitle="JT"
                  imgHeight={130}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <CustomCard
                  title="KT Series"
                  imageSrc="/images/products/jt/jt-kt.webp"
                  description="kt-series"
                  subTitle="JT"
                  imgHeight={130}
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
