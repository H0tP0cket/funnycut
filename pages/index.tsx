import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";

import React, { useState, useEffect } from "react";
import "animate.css";
import Footer from "../components/footer";

import HaircutFinder from "./main";

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="unstyled flex min-h-screen flex-col items-center justify-center overflow-y-hidden bg-gray-900 ">
      <Head>
        <title>Siddharth Srinivasan </title>
        <link rel="icon" href="/logos/favicon.ico" />
        <link
          rel="preload"
          href="/public/fonts/Helveticaimage.png.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Navbar />
          <HaircutFinder />
        </>
      )}
    </div>
  );
}

export default Home;
