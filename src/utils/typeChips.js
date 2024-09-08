export const getTypeColor = (type) => {
  const typeColors = {
    fire: {
      background: "#ff6f61",
      text: "#fff",
    },
    water: {
      background: "#4a90e2",
      text: "#fff",
    },
    grass: {
      background: "#7ed957",
      text: "#fff",
    },
    electric: {
      background: "#f8e71c",
      text: "#000",
    },
    psychic: {
      background: "#d66ab0",
      text: "#fff",
    },
    ice: {
      background: "#7ed8f2",
      text: "#000",
    },
    dragon: {
      background: "#9b7cdb",
      text: "#fff",
    },
    dark: {
      background: "#6b6b6b",
      text: "#fff",
    },
    fairy: {
      background: "#f6a5c0",
      text: "#fff",
    },
    fighting: {
      background: "#eb4d4b",
      text: "#fff",
    },
    flying: {
      background: "#aab8c2",
      text: "#000",
    },
    poison: {
      background: "#9b59b6",
      text: "#fff",
    },
    ground: {
      background: "#d6a20e",
      text: "#fff",
    },
    rock: {
      background: "#8e8e8e",
      text: "#fff",
    },
    bug: {
      background: "#a2b912",
      text: "#fff",
    },
    normal: {
      background: "#bfbfbf",
      text: "#000",
    },
    steel: {
      background: "#a2a2a2",
      text: "#000",
    },
    ghost: {
      background: "#7359a0",
      text: "#fff",
    },
    unknown: {
      background: "#f5f5f5",
      text: "#000",
    },
  };

  return typeColors[type] || typeColors["unknown"];
};
