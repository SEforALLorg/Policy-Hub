import { instance } from './instance';

// Reports
export const getReports = () => {
    return instance.get(`/reports`)
};