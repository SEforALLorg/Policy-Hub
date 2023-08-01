import React, { useState, useEffect, useRef } from "react";
import {
  CLEANCOOKING,
  ELECTRICITYACCESS,
  ENERGYEFFICIENCY,
  SUSTAINABLECOOLING,
} from "../../constant";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import('components/footer'));
const Header = dynamic(() => import('components/header'));
const LandingPage = dynamic(() => import('components/landingPage'));

const Landing = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const ref = useRef();
  const [res, setRes] = useState();
  const [dynamicClass, setDynamicClass] = useState();

  useEffect(() => {
    localStorage.removeItem("userOldJourney");
    switch (res) {
      case ELECTRICITYACCESS:
        return setDynamicClass("electricity_access");
      case CLEANCOOKING:
        return setDynamicClass("clean_cooking");
      case SUSTAINABLECOOLING:
        return setDynamicClass("Sustainable_cooling");
      case ENERGYEFFICIENCY:
        return setDynamicClass("energy_efficiency");
      default:
        setDynamicClass("");
        break;
    }
  }, [res]);

  return (
    <main id="fullWrap" ref={ref} className={dynamicClass}>
      <div className="mobile:p-2.5 xsm:p-[5px]">
        <div className="custom-container mx-auto">
          <div
            className={`px-[1rem] py-2 ${
              !isDashboardOpen ? "header-title-wrap" : ""
            }`}
          >
            <Header selectedRes={res} />
          </div>
          <div>
            <LandingPage
              setIsDashboardOpen={setIsDashboardOpen}
              selectedRes={(e) => setRes(e)}
            />
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
