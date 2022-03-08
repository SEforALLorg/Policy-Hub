import { instance } from './instance';

// Filters
export const getFilters = () => {
    return instance.get(`/filters`)
};

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

// CoAuthors
export const getCoAuthors = () => {
    return instance.get(`/co-authors`)
};

// Publishing Organizations
export const getPublishingOrganizations = () => {
    return instance.get(`/publishing-organizations`)
};