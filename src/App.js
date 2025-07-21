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
      </Routes>
    </Router>  );
}

export default App;




