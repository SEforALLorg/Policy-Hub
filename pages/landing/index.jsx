import React, { useState, useEffect, useRef } from "react";
import createScrollSnap from "scroll-snap";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import LandingPage from "components/landingPage";

const Landing = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const ref = useRef();
  const bindScrollSnap = () => {
    const element = ref.current;
    createScrollSnap(
      element,
      {
        snapDestinationX: "0%",
        snapDestinationY: "100%",
        timeout: 100,
        duration: 800,
        threshold: 0.1,
      },
      () => console.log()
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window?.innerWidth < 1024) return null;
    bindScrollSnap();
  }, []);

  return (
    <main id="fullWrap" ref={ref}>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div
            className={`px-[1rem] py-2 ${
              !isDashboardOpen ? "header-title-wrap" : ""
            }`}
          >
            <Header />
          </div>
          <div>
            <LandingPage setIsDashboardOpen={setIsDashboardOpen} />
          </div>
          <div className="pt-[40px]">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Landing;
