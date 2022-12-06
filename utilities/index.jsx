import qs from "qs";

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
  if (!nonPublicationReports?.length && !publicationReports?.length && !showAllReports)
    return null;
  const query = qs.stringify({
    pagination: {
      page: page,
      pageSize: pageSize || 20,
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
  return optionSelected
}