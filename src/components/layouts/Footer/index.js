import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import Image from "next/image";

export default function App() {
  return (
    <Box bgcolor="#262626" color="white" textAlign="center" p={2}>
      <Box
        display="flex"
        justifyContent={{ xs: "center", lg: "space-between" }}
        p={4}
      >
        <Typography
          variant="body1"
          sx={{ me: { lg: 5 } }}
          textAlign={{ xs: "center", lg: "left" }}
        >
          Get connected with us on social networks:
        </Typography>
        <Box>
          <IconButton href="" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton href="" color="inherit">
            <Google />
          </IconButton>
          <IconButton href="" color="inherit">
            <Instagram />
          </IconButton>
          <IconButton href="" color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton href="" color="inherit">
            <GitHub />
          </IconButton>
        </Box>
      </Box>
      <Divider color="white" />
      <Container>
        <Grid container spacing={12}>
          <Grid item xs={12} md={3}>
            <Box
              marginTop="10px"
              marginLeft={5}
              display="flex"
              justifyContent="center"
              alignContent="center"
              justifyItems="center"
              sx={{
                "@media (max-width: 600px)": {
                  marginLeft: 0,
                },
              }}
            >
              <Image
                src="/logo/logo02.png"
                alt="Description of your image"
                width={250}
                height={70}
                objectFit="cover"
                objectPosition="center"
              />
            </Box>

            <Typography variant="body2" textAlign="left">
              We are confident to provide the best service to our customers by
              providing high quality products and dedicated services to
              customers.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              textDecoration: "none",
            }}
          >
            <Typography
              variant="body"
              fontWeight="bold"
              gutterBottom
              textAlign="left"
            >
              Pokemons
            </Typography>

            <Link
              sx={{ textDecoration: "none" }}
              href="/products/tamura/reflow"
              color="inherit"
              key="angular-link"
            >
              Pikachu
            </Link>

            <Link
              sx={{ textDecoration: "none" }}
              href="/products/kohyoung/aoi"
              color="inherit"
              key="react-link"
            >
              Mewtwo
            </Link>

            <Link
              sx={{ textDecoration: "none" }}
              href="/products/jinno"
              color="inherit"
              key="vue-link"
            >
              Bulbasaur
            </Link>

            <Link
              sx={{ textDecoration: "none" }}
              href="/products/jvc"
              color="inherit"
              key="laravel-link"
            >
              Voltorb
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "50px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="body"
              gutterBottom
              fontWeight="bold"
              textAlign="left"
            >
              Links
            </Typography>

            <Link
              sx={{ textDecoration: "none" }}
              href="/products"
              color="inherit"
            >
              Products
            </Link>

            <Link sx={{ textDecoration: "none" }} href="/about" color="inherit">
              About Us
            </Link>

            <Link
              sx={{ textDecoration: "none" }}
              href="/services"
              color="inherit"
            >
              Services
            </Link>

            <Link
              sx={{ textDecoration: "none" }}
              href="/contact"
              color="inherit"
            >
              Contact
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            style={{
              display: "flex",
              marginTop: "50px",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="body"
              fontWeight="bold"
              gutterBottom
              textAlign="left"
            >
              Contact
            </Typography>

            <Box display="flex" alignItems="center">
              <Typography component="span" variant="inherit" color="inherit">
                Jakarta, Indonesia
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <Typography component="span" variant="inherit" color="inherit">
                developer@pokedisplay.co.id
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <Typography component="span" variant="inherit" color="inherit">
                +6212312312344
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <Typography component="span" variant="inherit" color="inherit">
                +6212312312344
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box p={3} display="flex">
        <Typography variant="body1" color="grey">
          © 2024 PokeDisplay - Nextjs Web By Mahesa Rafian Syah.
        </Typography>
      </Box>
    </Box>
  );
}
