import { instance } from './instance';

// countries
export const getCountries = () => {
    return instance.get(`/countries`)
};

// Generation Sources
export const getGenerationSources = () => {
    return instance.get(`/generation-sources`)
};

// Years
export const getYears = () => {
    return instance.get(`/years`)
};

// Regions
export const getRegions = () => {
    return instance.get(`/regions`)
};

// Segments
export const getSegments = () => {
    return instance.get(`/segments`)
};

// Document Types
export const getDocumentTypes = () => {
    return instance.get(`/document-types`)
};