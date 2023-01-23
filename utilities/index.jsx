import qs from "qs";
import groupBy from "lodash/groupBy";
import { omit } from "lodash";
import { repeatUser, putJourney } from "../pages/api/reports";

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
  showAllReports
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
      pageSize: 20,
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
    selectInputs?.generation_sources?.length;
  return optionSelected;
};

export const getResourses = (allQuestions) => {
  const resourceGroup = allQuestions
    .filter((item) => {
      if (item.attributes.Resource?.id) {
        return item;
      }
    })
    .map((item) => {
      const ac = Object.values(item?.attributes?.Resource?.resources);
      return ac[0];
    });

  // const groupedResources = groupBy(resourceGroup, "id");
  // const allArray = Object.values(groupedResources);
  // const allResources = [].concat
  //   .apply([], allArray)
  //   ?.map((item) => item?.resource?.data);

  return resourceGroup;
};

export const shortName = (str) => {
  const matches = str?.match(/\b(\w)/g);
  const acronym = matches?.join("");
  let string;
  if (str === "Yes" || str === "No") {
    return str;
  } else if (str?.includes("-")) {
    const matches = str?.replace("-", " ")?.match(/\b(\w)/g);
    const acronym = matches?.join("");
    string = acronym;
  } else if (str?.indexOf(" ") >= 0) {
    string = acronym;
  } else {
    string = str?.substring(0, 2);
  }
  return string || str;
};

export const validation = (event, name, val) => {
  let formError;
  let arr = [];
  switch (name) {
    case "FirstName":
      if (val?.length <= 3) {
        formError = {
          FirstName: "First Name atleast have  letters",
        };
      } else {
        formError = {  };
      }
      break;
    case "LastName":
      if (val.length <= 3) {
        formError = {
          LastName: "Last Name atleast have 5 letters",
        };
      } else {
        formError = { };
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
        formError = {  };
      }
      break;
    case "PhoneNumber":
      if (val.length >= 10) {
        formError = {
          PhoneNumber: "Phone Number is required",
        };
      } else {
        formError = {  };
      }
      break;
    case "JobTitle":
      if (val.length <= 3) {
        formError = {
          JobTitle: "Job Title is required",
        };
      } else {
        formError = {  };
      }
      break;
    case "Organization":
      if (val.length <= 3) {
        formError = {
          Organization: "Organization is required",
        };
      } else {
        formError = { };
      }
      break;
    default:
      break;
  }

  return formError;
};

export const landingPage = async (payload) => {
  let count = localStorage.getItem("count");
  let addCount = ++count;
  let data = {
    data: {
      ...payload,
      UserInfoId: Number(localStorage.getItem("UserId")) ?? "",
      Journey: [],
      VisitCount: count && String(addCount),
    },
  };
  const response = await repeatUser(data);
  localStorage.setItem("UserId", response?.data?.data?.id);
  localStorage.setItem("count",Number(response?.data?.data?.VisitCount))
};

export const putJourneyStep = async (payload) => {
  let userId = localStorage.getItem("UserId");
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let data = {
    data: {
      ...userInfo,
      UserInfoId: userId ? userId : "",
      // UID: localStorage.getItem("uuid"),
      Journey: payload,
    },
  };
  await putJourney(data);
};
