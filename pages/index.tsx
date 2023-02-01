import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/navbar";

import React, { useState, useEffect } from "react";
import "animate.css";
import Footer from "../components/footer";

import HaircutFinder from "./main";
import Intro from "./home";

function Home() {
  return (
    <main className="bg-gray-900 font-sans">
      <Head>
        <title>Siddharth Srinivasan </title>
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>

      <>
        <Navbar />
        <Intro />
        <Footer />
      </>
    </main>
  );
}

export default Home;
