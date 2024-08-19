import React, { useEffect, useRef, useState } from "react";
import Navbar from "views/Navbar/Navbar";
import Home from "views/Home/Home";
import About from "views/About/About";
import Footer from "views/Footer/Footer";
import Service from "views/Service/Service";
import Contact from "views/Contact/Contact";
import Map from "views/Map/Map";
import ScrollTop from "components/ScrollTop/ScrollTop";

function App() {
  const [viewport, setViewport] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );
  window.addEventListener("resize", () => {
    setViewport(window.innerWidth || document.documentElement.clientWidth);
  });

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setShowGoTop] = useState("goTopHidden");

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (scrollPosition > 50) {
      return setShowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setShowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const refScrollUp = useRef<HTMLDivElement>();

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={refScrollUp}></div>
      <Navbar />
      {/* {console.log(`Current Viewport: ${viewport}`)} */}
      <Home />
      <About />
      <Service />
      <Contact viewport={viewport} />
      <Map />
      <Footer viewport={viewport} />
      <ScrollTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
    </>
  );
}

export default App;
