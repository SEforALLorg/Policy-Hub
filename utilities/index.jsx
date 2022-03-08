export const getFormattedData = (unFormattedData) => {
    const formattedData = unFormattedData?.map((objectData) => {
        const newFormat = { ...objectData };
        const targetKey = Object.keys(objectData).find(
            keyName => !(keyName.includes('createdAt') || keyName.includes('updatedAt') || keyName.includes('id')) 
        );
        
        newFormat.label = newFormat[targetKey];
        return newFormat;
    });
    
    return formattedData?.sort((a,b) => a?.label?.localeCompare(b?.label));
}
