import React, { useEffect, useState } from "react";
import Layout from "@/components/";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTypeColor } from "@/utils/typeChips"; // Adjust the path as necessary
import "swiper/css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import {
  Paper,
  Select,
  Button,
  CircularProgress,
  Typography,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  Box,
  Container,
  Grid,
  Card,
  Divider,
  Dialog,
  DialogTitle,
  Chip,
  DialogContent,
  DialogActions,
  Pagination as MUIPagination,
  Tabs,
  Tab,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";

import Tab01 from "@/components/Content/Products/_home/tab01.js";
import Tab02 from "@/components/Content/Products/_home/tab02.js";
import Tab03 from "@/components/Content/Products/_home/tab03.js";
import Tab04 from "@/components/Content/Products/_home/tab04.js";
import Tab05 from "@/components/Content/Products/_home/tab05.js";
const ITEMS_PER_PAGE = 20;

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
const ResponsiveCarousel = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = (description, subTitle) => {
    // Convert description and subTitle to lowercase
    const lowerCaseDescription = description.toLowerCase();
    const lowerCaseSubTitle = subTitle.toLowerCase();

    // Redirect to the details page with the lowercase title
    window.location.href = `/products/${lowerCaseSubTitle}/details/${lowerCaseDescription}`;
  };

  const formatPokemonName = (name) => {
    return name.replace(/-/g, " ");
  };
  const capitalizeFirstLetter = (text) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [pokeSpecies, setPokeSpecies] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedAbility, setSelectedAbility] = useState("all");
  const [typeLoad, setTypeLoad] = useState(true);
  const [pokeLoad, setPokeLoad] = useState(true);
  const [nameSort, setNameSort] = useState("asc"); // Default to ascending

  const sortPokemons = (pokemons) => {
    return pokemons.sort((a, b) => {
      if (nameSort === "asc") {
        return a.name.localeCompare(b.name);
      } else if (nameSort === "desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  };

  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setTypeLoad(false); // Update to false once data is fetched
    }, 2000); // Example delay
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setCurrentPage(1); // Reset to the first page on type filter
  };
  const handleAbilityChange = (event) => {
    setSelectedAbility(event.target.value);
    setCurrentPage(1); // Reset to the first page on type filter
  };
  const handleSearchInput = (event, newValue) => {
    setValue(newValue);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Filter and paginate Pokémon list
  const filteredPokemons = pokeSpecies.filter((pokemon) => {
    const details = pokeDetails[pokemon.name];
    const matchesSearch = pokemon.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" ||
      (details &&
        details.types.some((type) => type.type.name === selectedType));

    const matchesAbility =
      selectedAbility === "all" ||
      (details &&
        details.types.some((type) => type.type.name === selectedAbility));

    return matchesSearch && matchesType && matchesAbility;
  });

  const sortedPokemons = sortPokemons(filteredPokemons);
  const paginatedPokemons = sortedPokemons.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredPokemons.length / ITEMS_PER_PAGE);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/item?limit=100&offset=0"
      );
      setPokeSpecies(response.data.results);

      setPokeDetails(details);
      setPokeLoad(false);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    console.log("generated", pokeSpecies); // Logs `pokeSpecies` when it changes
  }, [pokeSpecies]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokeDetails(response.data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const handleOpenDialog = async (itemUrl) => {
    try {
      const response = await axios.get(itemUrl);
      setSelectedPokemon(response.data);
      setOpenDialog(true);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedPokemon(null);
  };

  return (
    <>
      <Layout>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box
              height="600px"
              position="relative"
              style={{ width: "100%", overflow: "hidden" }}
            >
              <Image
                src="/images/bg/wallBg04.jpg"
                alt="Description of your image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                style={{ borderRadius: "8px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              ></div>
              <Typography
                variant="h2"
                color="white"
                marginTop={30}
                position="relative"
                textAlign="center"
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Items
              </Typography>
              <Typography
                variant="h4"
                color="white"
                marginTop={0}
                position="relative"
                textAlign="left"
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  fontSize: {
                    xs: "22px",
                    sm: "24px",
                    md: "2.4285714285714284rem",
                    lg: "2.4285714285714284rem",
                    xl: "2.4285714285714284rem",
                  },
                }}
              >
                Find species you know!
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>

        <Container>
          <Box
            sx={{
              padding: {
                xs: 0,
                sm: 0,
                md: 3,
                lg: 3,
                xl: 3,
              },
            }}
          >
            <Box marginX={0} marginTop={3}>
              <Box sx={{ width: "100%" }}>
                <Box>
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
                      Pokemon Species
                    </Typography>
                  </Box>

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
                      Around the universe
                    </Typography>
                    <Divider
                      sx={{
                        marginTop: 1,
                        height: 3,
                        backgroundImage: `linear-gradient(to right, #e82c35 10%, #0c248c 10%)`,
                      }}
                    />
                    <Box display="flex" flexDirection="row" gap={2} padding={2}>
                      <TextField
                        label="Search by name"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />

                      <FormControl fullWidth>
                        <InputLabel>Filter by Type</InputLabel>
                        <Select
                          value={selectedType}
                          onChange={handleTypeChange}
                          label="Filter by Type"
                        >
                          <MenuItem value="all">All Types</MenuItem>
                          <MenuItem value="fire">Fire</MenuItem>
                          <MenuItem value="water">Water</MenuItem>
                          <MenuItem value="grass">Grass</MenuItem>
                          {/* Add other types here */}
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel>Filter by Ability</InputLabel>
                        <Select
                          value={selectedAbility}
                          onChange={handleAbilityChange}
                          label="Filter by Ability"
                        >
                          <MenuItem value="all">All Abilities</MenuItem>
                          <MenuItem value="flying">flying</MenuItem>

                          {/* Add other types here */}
                        </Select>
                      </FormControl>
                      <FormControl fullWidth>
                        <InputLabel>Sort by</InputLabel>
                        <Select
                          value={nameSort}
                          onChange={(event) => setNameSort(event.target.value)}
                          label="Sort by"
                        >
                          <MenuItem value="asc">Ascending</MenuItem>
                          <MenuItem value="desc">Descending</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box
                      container
                      display="flex"
                      flexDirection="row"
                      flexWrap="wrap" // Allow items to wrap onto the next line
                      justifyContent="center"
                      justifyItems="center"
                      spacing={3}
                      gap={2}
                      sx={{
                        "@media (max-width: 600px)": {
                          marginLeft: -3,
                        },
                      }}
                    >
                      {paginatedPokemons.length === 0 ? (
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="100%"
                          height="100%"
                        >
                          <Typography variant="h6">
                            No Pokémon available
                          </Typography>
                        </Box>
                      ) : (
                        paginatedPokemons.map((pokemon) => (
                          <Grid
                            item
                            xs={6}
                            sm={4}
                            md={3}
                            key={pokemon.name}
                            sx={{
                              "@media (max-width: 600px)": {
                                marginLeft: "0px",
                              },
                            }}
                          >
                            <Card
                              sx={{
                                position: "relative", // Allow z-index to take effect
                                width: "200px",
                                height: "300px",
                                maxWidth: "400px",
                                marginTop: "20px",
                                borderRadius: "10px",
                                boxShadow: "8px 8px 8px rgba(0, 0, 0, 0.1)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "left",
                                textDecoration: "none", // Ensure no underline on text

                                "@media (max-width: 600px)": {
                                  marginLeft: 2,
                                  width: "150px",
                                  height: "250px",
                                },
                              }}
                            >
                              <Box display="flex" flexDirection="column">
                                <Box
                                  gap={2}
                                  display="flex"
                                  flexDirection="column"
                                  paddingLeft={0}
                                  paddingRight={0}
                                  justifyContent="center"
                                  justifyItems="center"
                                  alignItems="center"
                                >
                                  <Box
                                    component="img"
                                    marginTop={5}
                                    sx={{
                                      // Position image absolutely
                                      top: 0,
                                      right: 0,
                                      width: {
                                        xs: "80px",
                                        sm: 100,
                                        md: 100,
                                        lg: 100,
                                        xl: 100,
                                      },
                                      height: {
                                        xs: "100%",
                                        sm: "100px",
                                        md: "100px",
                                        lg: "100px",
                                        xl: "100px",
                                      },
                                      objectFit: "cover",
                                      objectPosition: "center",
                                      // Set z-index lower than content
                                      // Optional: make image semi-transparent
                                    }}
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${pokemon.name}.png`}
                                    alt={pokemon.name}
                                  />
                                  <Typography
                                    variant="h5"
                                    marginTop={2}
                                    color="initial"
                                    fontSize="22px"
                                    sx={{
                                      "@media (max-width: 600px)": {
                                        fontSize: "16px",
                                      },
                                    }}
                                  >
                                    {capitalizeFirstLetter(
                                      formatPokemonName(pokemon.name)
                                    )}
                                  </Typography>
                                  <Box marginTop={-1}>
                                    <Button
                                      variant="contained"
                                      onClick={() =>
                                        handleOpenDialog(`${pokemon.url}`)
                                      }
                                      color="primary"
                                    >
                                      Details
                                    </Button>
                                  </Box>
                                </Box>
                              </Box>
                            </Card>
                          </Grid>
                        ))
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 4,
                      }}
                    >
                      <MUIPagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        {/* Dialog for Pokémon Details */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>
            {selectedPokemon?.name
              ? capitalizeFirstLetter(formatPokemonName(selectedPokemon.name))
              : ""}
          </DialogTitle>

          <DialogContent>
            {selectedPokemon && (
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box
                  component="img"
                  sx={{
                    width: "200px",
                    height: "200px",

                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={selectedPokemon.sprites.default}
                  alt={selectedPokemon.name}
                />
                <Box alignItems="left">
                  <Typography variant="body1" fontWeight="bold" color="initial">
                    Category
                  </Typography>
                  <Typography variant="body1" color="initial">
                    {capitalizeFirstLetter(
                      formatPokemonName(selectedPokemon.category.name)
                    )}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" olor="initial">
                    Effects
                  </Typography>
                  <Typography variant="body1" color="initial">
                    {selectedPokemon.effect_entries[0].effect}
                  </Typography>
                </Box>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Close</Button>
          </DialogActions>
        </Dialog>
      </Layout>
    </>
  );
};

export default ResponsiveCarousel;
