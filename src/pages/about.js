import React from "react";
import { Inter } from "next/font/google";
import About from "@/components/Content/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <About />
    </>
  );
}
