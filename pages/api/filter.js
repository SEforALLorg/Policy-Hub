import { instance } from './instance';

// Filters
export const getFilters = () => {
    return instance.get(`v1/filters`)
};
