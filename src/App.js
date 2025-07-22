import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BuildBusiness from './components/build-business';
// import Challenge from './components/challenge';
// import HompageBanner from './components/hompage-banner';
// import TopNav from './components/top-nav';
// import Footer from './components/footer'
import HomePage from './pages/home';
import IntroPage from "./pages/intro";
import SignupPage from "./pages/signup-page";
import Login from "./pages/login";
import ActivityIndexPage from "./pages/activityindex";
import Day1Part1 from "./pages/day1-part1";
import Day1Part2 from "./pages/day1-part2";
import Day2 from "./pages/day2";
import Day316 from "./pages/day3-16";
import Day1725 from "./pages/day17-25";
import Day26 from "./pages/day26";
import Day27 from "./pages/day27";
import Day28 from "./pages/day28";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/intro" element={<IntroPage />} />
        <Route path="/signup-page" element={<SignupPage />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/activityindex" element={<ActivityIndexPage />} /> 
        <Route path="/day1-part1" element={<Day1Part1 />} /> 
        <Route path="/day1-part2" element={<Day1Part2 />} /> 
        <Route path="/day2" element={<Day2 />} /> 
        <Route path="/day3-16" element={<Day316 />} /> 
        <Route path="/day17-25" element={<Day1725 />} /> 
        <Route path="/day26" element={<Day26 />} /> 
        <Route path="/day27" element={<Day27 />} /> 
        <Route path="/day28" element={<Day28 />} /> 
      </Routes>
    </Router>  );
}

export default App;




