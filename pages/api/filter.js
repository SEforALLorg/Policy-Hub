import { instance } from './instance';

// countries
export const getCountries = () => {
    return instance.get(`/countries`)
};