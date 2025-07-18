import React from "react";
import TopNav from "../components/top-nav";
import Footer from "../components/footer";
import Banner from "../components/introduction-page/banner";
import LedCard from "../components/introduction-page/led-card";
import WhatToExpect from "../components/introduction-page/expect";

const IntroPage = () => {
  return (
    <div>
      <TopNav />
      <Banner />
      <LedCard />
      <WhatToExpect />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default IntroPage;
