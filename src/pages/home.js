import React from 'react';
import TopNav from '../components/top-nav';
import BuildBusiness from '../components/build-business';
import Challenge from '../components/challenge';
import HompageBanner from '../components/hompage-banner';
import Footer from '../components/footer'

const Home = () => {
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

export default Home;
