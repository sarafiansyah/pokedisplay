import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

const PokemonDetail = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  };

  useEffect(() => {
    if (name) {
      fetchPokemonDetails();
    }
  }, [name]);

  return (
    <Box padding={5} display="flex" flexDirection="column" alignItems="center">
      {pokemon ? (
        <>
          <Box
            component="img"
            sx={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <Typography variant="h4">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
          <Typography variant="h6">Height: {pokemon.height / 10} m</Typography>
          <Typography variant="h6">Weight: {pokemon.weight / 10} kg</Typography>
          <Typography variant="h6">
            Type: {pokemon.types.map((type) => type.type.name).join(", ")}
          </Typography>
        </>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default PokemonDetail;
