import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Home from "./components/home";
import { Information } from "./components/information";
import { Footer } from "./components/footer";
import { Realese } from "./components/list/realese";
import { Article } from "./components/list/article";
import { ReadMagazine } from "./components/read_magazine";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter, Routes, } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Information />} />
          <Route path="/realese_list" element={<Realese />} />
          <Route path="/article_list" element={<Article />} />
          <Route path="/read_magazine" element={<ReadMagazine />} />
          {/* <Redirect to="/" /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Header data={landingPageData.Header} />
      <Gallery data={landingPageData.Gallery} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
