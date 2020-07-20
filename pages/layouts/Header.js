import React from "react";
import Head from 'next/head';
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <Head>
        <title>News API</title>
        <link rel="icon" href="../../public/favicon.ico"/>
      </Head>
      <Navigation/>
    </div>
  )
}

export default Header;