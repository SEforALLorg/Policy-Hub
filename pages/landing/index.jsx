import React, { useState, useEffect, useRef } from "react";
import createScrollSnap from "scroll-snap";
import Footer from "components/footer";
import Header from "components/header";
import LandingPage from "components/landingPage";
import { changingHeaderLogo } from "../../constant/changinglogo";

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
  const [res, setRes] = useState();
  const [dynamicClass, setDynamicClass] = useState();

  useEffect(() => {
    switch (res) {
      case "ELECTRICITY ACCESS":
        return setDynamicClass("electricity_access");
      case "CLEAN COOKING":
        return setDynamicClass("clean_cooking");
      case "SUSTAINABLE COOLING":
        return setDynamicClass("Sustainable_cooling");
      case "ENERGY EFFICIENCY":
        return setDynamicClass("energy_efficiency");
      default:setDynamicClass("")
        break;
    }
  }, [res])

  useEffect(() => {
    if (typeof window !== "undefined" && window?.innerWidth < 1024) return null;
    bindScrollSnap();
  }, []);

  return (
    <main id="fullWrap" ref={ref} className={dynamicClass} >
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div
            className={`px-[1rem] py-2 ${!isDashboardOpen ? "header-title-wrap" : ""
              }`}
          >
            <Header selectedRes={res} />
          </div>
          <div>
            <LandingPage setIsDashboardOpen={setIsDashboardOpen} selectedRes={(e) => setRes(e)} />
          </div>
          <div className="pt-[40px]">
            <Footer footerRes={res} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Landing;
