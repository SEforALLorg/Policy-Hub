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
    return instance.post(`/add-journey`, payload)
};

//  Download Reports
export const downloadReports = (payload) => {
    return instance.post(`/v1/download-csv`, payload)
};

//  Send Reports
export const sendReports = (payload) => {
    return instance.post(`/v1/send-csv`, payload)
};

//  Repeated User
export const repeatUser = (payload) => {
    let UserId = localStorage.getItem("UserId");
    return instance.put(`user-journeys/${UserId}`, payload);
}

//  Put Journey step
export const putJourney = (payload) => {
    let UserId = localStorage.getItem("UserId");
    return instance.put(`/user-journeys/${UserId}`, payload);
}
