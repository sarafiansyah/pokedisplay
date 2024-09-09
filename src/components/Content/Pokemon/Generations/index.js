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

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  const [pokeGen, setPokeGen] = useState([]);
  const [pokeGenDetails, setPokeGenDetails] = useState([]);
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

  const filteredSpecies = pokeSpecies.filter((pokemon) => {
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

  const fetchPokemonGenerations = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/generation");
      setPokeGen(response.data.results);

      // Fetch details for each generation
      const detailsPromises = response.data.results.map(async (gen) => {
        const response2 = await axios.get(gen.url);
        return {
          name: gen.name,
          url: gen.url,
          species: response2.data.pokemon_species.map(
            (species) => species.name
          ), // Map to get species names
        };
      });

      // Wait for all promises to resolve
      const allDetails = await Promise.all(detailsPromises);
      setPokeGenDetails(allDetails);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  useEffect(() => {
    fetchPokemonGenerations();
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

  const formatGenerationName = (name) => {
    // Replace hyphens with spaces
    let formattedName = name.replace(/-/g, " ");

    // Convert to uppercase and capitalize Roman numerals
    const romanNumerals = {
      i: "I",
      ii: "II",
      iii: "III",
      iv: "IV",
      v: "V",
      vi: "VI",
      vii: "VII",
      viii: "VIII",
      ix: "IX",
      x: "X",
    };

    formattedName = formattedName.toLowerCase().replace(/\b\w+\b/g, (match) => {
      return (
        romanNumerals[match] || match.charAt(0).toUpperCase() + match.slice(1)
      );
    });

    return formattedName;
  };

  const generationGradients = {
    "generation-i": "linear-gradient(to right, #C0392B, #E74C3C)", // Deep Red to Strong Red
    "generation-ii": "linear-gradient(to right, #27AE60, #2ECC71)", // Deep Green to Bright Green
    "generation-iii": "linear-gradient(to right, #2980B9, #3498DB)", // Deep Blue to Strong Blue
    "generation-iv": "linear-gradient(to right, #F39C12, #F1C40F)", // Deep Yellow to Bright Yellow
    "generation-v": "linear-gradient(to right, #8E44AD, #9B59B6)", // Deep Purple to Lighter Purple
    "generation-vi": "linear-gradient(to right, #D35400, #E67E22)", // Deep Orange to Bright Orange
    "generation-vii": "linear-gradient(to right, #E74C3C, #C0392B)", // Strong Red to Deeper Red
    "generation-viii": "linear-gradient(to right, #3498DB, #2980B9)", // Strong Blue to Deeper Blue
  };

  // Utility function to get color based on generation name
  const getGenerationGradient = (name) => {
    return (
      generationGradients[name] || "linear-gradient(to right, #BDC3C7, #95A5A6)"
    ); // Default gradient
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
                src="/images/bg/wallBg05.jpg"
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
                Generations
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

                    <Box
                      container
                      marginTop={5}
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
                      {pokeGenDetails.map((gen, index) => (
                        <Accordion key={index}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel-${index}-content`}
                            id={`panel-${index}-header`}
                            style={{
                              background:
                                generationGradients[gen.name] ||
                                "linear-gradient(to right, #BDC3C7, #95A5A6)",
                              color: "white",
                            }}
                          >
                            <Typography variant="h6" fontWeight="bold">
                              {formatGenerationName(gen.name)}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <TextField
                              label="Search by name"
                              variant="outlined"
                              fullWidth
                              value={searchTerm}
                              onChange={handleSearchChange}
                              margin="normal"
                            />
                            <Typography>
                              <ul>
                                {gen.species
                                  .filter((species) =>
                                    species.toLowerCase().includes(searchTerm)
                                  )
                                  .slice(0, 10) // Limit to 10 items
                                  .map((species, speciesIndex) => (
                                    <li key={speciesIndex}>
                                      {capitalizeFirstLetter(species)}
                                    </li>
                                  ))}
                              </ul>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      ))}
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
