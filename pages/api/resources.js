import { instance } from "./instance";

//GetResource
export const getResource = () => {
  return instance.get("resource");
};

// Resources
export const getAllResources = () => {
    return instance.get(`platforms?populate=*`)
};

// Get Filter Resources
export const filterResources = (query) => {
    return instance.get(`platforms?${query}&populate=*`)
};
