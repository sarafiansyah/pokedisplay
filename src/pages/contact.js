import React from "react";
import { Inter } from "next/font/google";
import Contacts from "@/components/Content/Contacts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Contacts />
    </>
  );
}
