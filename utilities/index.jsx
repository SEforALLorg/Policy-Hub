import qs from "qs";
import groupBy from "lodash/groupBy";

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
