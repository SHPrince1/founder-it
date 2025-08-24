import React from 'react';
// import TopNav from '../components/top-nav';
// import BuildBusiness from '../components/landing-page/build-business';
// import Challenge from '../components/landing-page/challenge';
// import HompageBanner from '../components/landing-page/hompage-banner';
// import Footer from '../components/footer'
// import WelcomePage from '../components/welcome';
import WelcomePageCom from '../components/welcome';

const WelcomePage = () => {
    return (
        <div>
            <div>
                 <div style={{ textAlign: "center", marginTop: "2rem" }}>

                       <h2>Welcome to the 28-Day Challenge</h2>
                 </div>
                {/* <TopNav /> */}
                <WelcomePageCom />
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default WelcomePage;
