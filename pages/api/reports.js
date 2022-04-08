import { instance } from './instance';

// Reports
export const getReports = (query) => {
    return instance.get(`/reports/?${query}`)
};

// Post newsletters
export const postNewsletters = (payload) => {
    return instance.post(`/newsletters`, payload)
};


//  Download Reports
export const downloadReports = (payload) => {
    return instance.post(`/v1/download-csv`, payload)
};

//  Send Reports
export const sendReports = (payload) => {
    return instance.post(`/v1/send-csv`, payload)
};
