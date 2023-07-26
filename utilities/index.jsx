import qs from "qs";
import {
  CLEANCOOKING,
  CLEAN_COOKING,
  ELECTRICITYACCESS,
  ELECTRICITY_ACCESS,
  ENERGYEFFICIENCY,
  ENERGY_EFFICIENCY,
  SUSTAINABLECOOLING,
  SUSTAINABLE_COOLING,
} from "../constant";
import { repeatUser, putJourney } from "../pages/api/reports";
import baseTheme from "../theme/base";
import greenTheme from "../theme/clean_cooking ";
import electricityTheme from "../theme/Electricity";
import yellowTheme from "../theme/EnergyEfficiency";
import darkTheme from "../theme/SustainableCooling";
import { applyTheme } from "../theme/utils";

export const getFormattedData = (unFormattedData) => {
  const formattedData = unFormattedData?.map((objectData) => {
    const newFormat = { ...objectData };
    const targetKey = Object.keys(objectData).find(
      (keyName) =>
        !(
          keyName.includes("createdAt") ||
          keyName.includes("updatedAt") ||
          keyName.includes("id")
        )
    );

    newFormat.label = newFormat[targetKey];
    return newFormat;
  });

  return formattedData?.sort((a, b) => a?.label?.localeCompare(b?.label));
};

// Get Reports Params
export const getReportQuery = (
  selectInputs,
  nonPublicationReports,
  publicationReports,
  page,
  debouncedSearch,
  showAllReports, 
  pageSize
) => {
  if (
    !nonPublicationReports?.length &&
    !publicationReports?.length &&
    !showAllReports
  )
    return null;
  const query = qs.stringify({
    pagination: {
      page: page,
      pageSize: 1000,
    },
    filters: {
      id: {
        $in: [...nonPublicationReports, ...publicationReports].map(
          (i) => i?.id
        ),
      },
      ReportName: {
        $containsi: debouncedSearch,
      },
      AddFilters: {
        countries: {
          id: {
            $in: selectInputs?.countries,
          },
        },
        regions: {
          id: {
            $in: selectInputs?.regions,
          },
        },
        segments: {
          id: {
            $in: selectInputs?.segments,
          },
        },
        document_types: {
          id: {
            $in: selectInputs?.document_types,
          },
        },
        years: {
          id: {
            $in: selectInputs?.years,
          },
        },
        generation_sources: {
          id: {
            $in: selectInputs?.generation_sources,
          },
        },
        sectors: {
          id: {
            $in: selectInputs?.sector,
          },
        },
        fuels: {
          id: {
            $in: selectInputs?.fuel,
          },
        },
      },
    },
  });
  return query;
};

export const getResourcesQuery = (id) => {
  if (!id) return null;
  const query = qs.stringify({
    filters: {
      resources: {
        id: {
          $in: id,
        },
      },
    },
  });
  return query;
};

export const isSelectedInput = (selectInputs) => {
  const optionSelected =
    selectInputs?.regions?.length ||
    selectInputs?.countries?.length ||
    selectInputs?.segments?.length ||
    selectInputs?.document_types?.length ||
    selectInputs?.years?.length ||
    selectInputs?.sector?.length ||
    selectInputs?.fuel?.length ||
    selectInputs?.generation_sources?.length;
  return optionSelected;
};

export const shortName = (str) => {
  const matches = str?.match(/\b(\w)/g);
  const acronym = matches?.join("");
  let string;
  if (str === "Yes" || str === "No" || str === "Oui" || str === "Non") {
    return str;
  } else if (str?.includes("-")) {
    const matches = str?.replace("-", " ")?.match(/\b(\w)/g);
    const acronym = matches?.join("");
    string = acronym?.toUpperCase();
  } else if (str?.indexOf(" ") >= 0) {
    string = acronym?.toUpperCase();
  } else {
    string = str?.substring(0, 2)?.toUpperCase();
  }
  return string || str;
};

export const validation = (event, name, val) => {
  let formError;
  switch (name) {
    case "FirstName":
      if (val?.length <= 3) {
        formError = {
          FirstName: "First Name atleast have  letters",
        };
      } else {
        formError = {};
      }
      break;
    case "LastName":
      if (val.length <= 3) {
        formError = {
          LastName: "Last Name atleast have 5 letters",
        };
      } else {
        formError = {};
      }
      break;
    case "Email":
      if (
        !new RegExp(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(val)
      ) {
        formError = {
          Email: "Enter a valid Email Address",
        };
      } else {
        formError = {};
      }
      break;
    case "PhoneNumber":
      if (val.length >= 10) {
        formError = {
          PhoneNumber: "Phone Number is required",
        };
      } else {
        formError = {};
      }
      break;
    case "JobTitle":
      if (val.length <= 3) {
        formError = {
          JobTitle: "Job Title is required",
        };
      } else {
        formError = {};
      }
      break;
    case "Organization":
      if (val.length <= 3) {
        formError = {
          Organization: "Organization is required",
        };
      } else {
        formError = {};
      }
      break;
    default:
      break;
  }

  return formError;
};

export const landingPage = async () => {
  let count = localStorage.getItem("count");
  let data = {
    data: {
      VisitCount: (count && ++count) || 1,
    },
  };
  const response = await repeatUser(data);
  localStorage.setItem("UserId", response?.data?.data?.id);
  localStorage.setItem("count", response?.data?.data?.attributes?.VisitCount);
  localStorage.setItem(
    "userInfo",
    JSON.stringify(response?.data?.data?.attributes)
  );
};

export const putJourneyStep = async (payload) => {
  let data = {
    data: {
      Journey: payload,
    },
  };
  const response = await putJourney(data);
  localStorage.setItem(
    "userInfo",
    JSON.stringify(response?.data?.data?.attributes)
  );
};

export const userRepeated = async (data) => {
  const response = await repeatUser(data);
  localStorage.setItem("UserId", response?.data?.data?.id);
  localStorage.setItem("count", response?.data?.data?.attributes?.VisitCount);
  localStorage.setItem(
    "userInfo",
    JSON.stringify(response?.data?.data?.attributes)
  );
};
export const isMobile = () => {
  return typeof window !== "undefined" && window.innerWidth < 767;
};

// Change theme function
export const changeTheme = (e) => {
  switch (e) {
    case ELECTRICITY_ACCESS:
      localStorage.setItem("ResourceType", e);
      applyTheme(electricityTheme);
      break;
    case CLEAN_COOKING:
      localStorage.setItem("ResourceType", e);
      applyTheme(greenTheme);
      break;
    case SUSTAINABLE_COOLING:
      localStorage.setItem("ResourceType", e);
      applyTheme(darkTheme);
      break;
    case ENERGY_EFFICIENCY:
      localStorage.setItem("ResourceType", e);
      applyTheme(yellowTheme); //blueTheme
      break;
    default:
      applyTheme(baseTheme);
      break;
  }
};

export const capitalizedString = (string) => {
  const lowerString = string?.toLocaleLowerCase()?.split(" ");
  const capitalized =
    lowerString?.[0].charAt(0).toUpperCase() +
    lowerString?.[0].slice(1) +
    " " +
    lowerString?.[1].charAt(0).toUpperCase() +
    lowerString?.[1].slice(1);
  return capitalized;
};

export const getResources = (id) => {
  if (!id) return null;
  const query = qs.stringify({
    filters: {
      Resource: {
        resources: {
          id: {
            $in: id,
          },
        },
      },
    },
  });
  return query;
};

export const getResourceRoute = (resource) => {
  switch (resource) {
    case ELECTRICITYACCESS:
      return "electricity";
      break;
    case CLEANCOOKING:
      return "cleancooking";
      break;
    case ENERGYEFFICIENCY:
      return "energyefficiency";
      break;
    case SUSTAINABLECOOLING:
      return "sustainablecooling";
      break;
    default:
      return "electricity";
      break;
  }
};

export const getRoute = () => {
  return window?.location?.pathname?.split('/')?.[2]
}

export const getResourceFirstQuestion = () => {
  switch (getRoute()) {
    case ELECTRICITY_ACCESS:
      return "9";
      break;
    case CLEAN_COOKING:
      return "32";
      break;
    case ENERGY_EFFICIENCY:
      return "80";
      break;
    case SUSTAINABLE_COOLING:
      return "52";
      break;
    default:
      return "9";
      break;
  }
}