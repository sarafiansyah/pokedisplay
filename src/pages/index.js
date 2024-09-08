import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import SearchAppBar from "@/components/layouts/Navbar";
import HomeContent from "@/components/Content/Home";
import Footer from "@/components/layouts/Footer";
import { Grid, Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SearchAppBar />
      <HomeContent />
      <Footer />
    </>
  );
}
