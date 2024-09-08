import React from "react";
import { Inter } from "next/font/google";
import Products from "@/components/Content/Products/pti/electrical-performance-test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Products />
    </>
  );
}
