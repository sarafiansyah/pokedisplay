import React from "react";
import { Inter } from "next/font/google";
import Pokemon from "@/components/Content/UserAdmin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Pokemon />
    </>
  );
}
