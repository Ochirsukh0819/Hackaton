import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <HomePage />
    </main>
  );
}
