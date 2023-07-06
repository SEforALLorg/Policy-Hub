import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router.js";

import { ErrorNotify } from "components/notification";
import TopCard from "./topCard/index.jsx";
import Dashboard from "../dashboard";
import { isMobile, landingPage } from "../../utilities/index.jsx";
import { getResource } from "../../pages/api/resources.js";

const LandingPage = ({ setIsDashboardOpen, selectedRes, footerRes }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isBigCard, setIsBigCard] = useState(false);
  const [resources, setResources] = useState();

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

  const { data: resource, isFetching: isFetchingResources, refetch } = useQuery(
    ["resource"],
    getResource,
    {
      enabled: !isMobile(),
      onError: (error) => {
        ErrorNotify(error?.response?.data?.error?.message);
      },
    }
  );

  const handleOpen = useCallback(() => {
    if (isMobile()) {
      refetch();
    }
    setIsOpen(true);
  }, []);

  const allResource = resource?.data?.data;

  useEffect(() => {
    setResources(allResource);
  }, [allResource]);

  return (
    <>
      <div>
        {!isOpen && <TopCard HandleOpen={handleOpen} />}
        {isOpen && (
          <div
            className={`${
              !isBigCard ? "h-[80vh]" : ""
            }  flex relative items-center	justify-center bottom-view`}
            id="bottom-view"
          >
            <Dashboard
              questions={[]}
              isFetchingQuestions={isFetchingResources}
              setIsBigCard={setIsBigCard}
              resources={resources}
              selectedRes={selectedRes}
              footerRes={footerRes}
              setIsOpen={setIsOpen}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;