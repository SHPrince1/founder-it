import React from 'react';
import TopNav from '../components/top-nav';
import BuildBusiness from '../components/landing-page/build-business';
import Challenge from '../components/landing-page/challenge';
import HompageBanner from '../components/landing-page/hompage-banner';
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div>
      <div>
      <TopNav />
      <HompageBanner />
      <BuildBusiness />
      <Challenge />
      <Footer />
    </div>
    </div>
  );
}

export default HomePage;
