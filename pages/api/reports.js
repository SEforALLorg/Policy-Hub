import { instance } from './instance';

// Reports
export const getReports = (query) => {
    return instance.get(`/reports/?${query}`)
};