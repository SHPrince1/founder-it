import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BuildBusiness from './components/build-business';
// import Challenge from './components/challenge';
// import HompageBanner from './components/hompage-banner';
// import TopNav from './components/top-nav';
// import Footer from './components/footer'
import HomePage from './pages/home';
import IntroPage from "./pages/intro";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/intro" element={<IntroPage />} />
        {/* <Route path="/products/:id" element={<ProductPage />} />  */}
      </Routes>
    </Router>  );
}

export default App;




