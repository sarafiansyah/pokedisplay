import React from "react";
import { Inter } from "next/font/google";
import Services from "@/components/Content/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Services />
    </>
  );
}
