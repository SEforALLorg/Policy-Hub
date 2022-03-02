import { instance } from './instance';

// Questions Lists
export const getQuestions = () => {
    return instance.get(`/question-lists`)
};