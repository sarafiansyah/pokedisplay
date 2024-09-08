import React from "react";
import { Inter } from "next/font/google";
import Products from "@/components/Content/Products/mpi/laser-marking";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Products />
    </>
  );
}
