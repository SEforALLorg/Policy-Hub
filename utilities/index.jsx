export const getFormattedData = (unFormattedData) => {
    const formattedData = unFormattedData?.map((objectData) => {
        const newFormat = { ...objectData };
        const targetKey = Object.keys(objectData.attributes).find(
            keyName => !(keyName.includes('createdAt') || keyName.includes('updatedAt'))
        );
        newFormat.attributes.label = newFormat.attributes[targetKey];
        return newFormat;
    });
    return formattedData?.sort((a,b) => a?.attributes?.label.localeCompare(b?.attributes?.label));
}
