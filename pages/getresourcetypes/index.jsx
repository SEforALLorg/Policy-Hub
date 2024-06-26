import React, { useEffect, useRef, useState } from 'react'
import { landingPage } from '../../utilities';
import { getResource } from '../api/resources';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Dashboard from '../../components/dashboard';
import { CLEANCOOKING, ELECTRICITYACCESS, ENERGYEFFICIENCY, POWERINGHEALTHCARE, SUSTAINABLECOOLING } from '../../constant';

const GetResourceType = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    const ref = useRef();
    const [res, setRes] = useState();
    const [dynamicClass, setDynamicClass] = useState();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isBigCard, setIsBigCard] = useState(false);
    const [resources, setResources] = useState();
  
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
          return setDynamicClass("energy_efficiency");;
          case POWERINGHEALTHCARE:
            return setDynamicClass("powering_healthcare");
        default:
          setDynamicClass("");
          break;
      }
    }, [res]);
  
    useEffect(() => {
      if (localStorage.getItem("UserId")) {
        landingPage();
      }
    }, []);
  
    useEffect(() => {
      if (router?.query?.restart === "true") {
        setIsOpen(true);
      }
    }, [router]);
  
    useEffect(() => {
      if (isOpen) {
        setIsDashboardOpen(true);
      }
    }, [isOpen]);
  
    const {
      data: resource,
      isFetching: isFetchingResources,
      refetch,
    } = useQuery(["resource"], getResource, {
    //   enabled: false,
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    });

    const allResource = resource?.data?.data;
  
    useEffect(() => {
      setResources(allResource);
    }, [allResource]);

  return (
    <main id="fullWrap" ref={ref} className={dynamicClass}>
    <div className="mobile:p-2.5 xsm:p-[5px]">
      <div className="custom-container mx-auto">
        <div
          className="px-[1rem] py-2 main-header"
        >
          <Header selectedRes={res} />
        </div>
        <div
            className="mobile:min-h-[70vh] flex relative items-center	justify-center bottom-view"
            id="bottom-view"
          >
            <Dashboard
              questions={[]}
              isFetchingQuestions={isFetchingResources}
              setIsBigCard={setIsBigCard}
              resources={resources}
              selectedRes={(e) => setRes(e)}
              footerRes={(e) => setRes(e)}
              setIsOpen={setIsOpen}
            />
          </div>
        <div className="pt-[40px]">
          <Footer footerRes={res} />
        </div>
      </div>
    </div>
  </main>
  )
}

export default GetResourceType