import { instance } from './instance';

// Reports
export const getReports = (query) => {
    return instance.get(`/reports/?${query}`)
};

// Post newsletters
export const postNewsletters = (payload) => {
    return instance.post(`/newsletters`, payload)
};
