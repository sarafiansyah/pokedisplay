import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/themes/theme"; // Ensure this import is correct
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/600.css"; // Semi-bold (adjust as needed)

// Create a custom theme with Poppins font and typography customization
const customTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16, // Adjust as needed
    // Other typography options can be customized here
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
