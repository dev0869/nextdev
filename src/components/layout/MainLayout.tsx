import React from "react";
import Navbar from "../Header/Navbar";
import { ChildProps } from "@/types/Types";
export default function MainLayout({ children }: ChildProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
