import { instance } from './instance';

// Reports
export const getReports = (query) => {
    return instance.get(`/reports/?${query}`)
};

// Post newsletters
export const postNewsletters = (payload) => {
    return instance.post(`/newsletters`, payload)
};

// Post User Details
export const postUserDetails = (payload) => {
    return instance.post(`/user-infos`, payload)
};

//  Download Reports
export const downloadReports = (payload) => {
    return instance.post(`/v1/download-csv`, payload)
};

//  Send Reports
export const sendReports = (payload) => {
    return instance.post(`/v1/send-csv`, payload)
};

//  Post Journey step
export const postJourney = (payload) => {
    return instance.post(`/user-journeys/`, payload);
}

//  Put Journey step
export const putJourney = (payload) => {
    let postId = localStorage.getItem("postId");
    return instance.put(`/user-journeys/${postId}`, payload);
}
