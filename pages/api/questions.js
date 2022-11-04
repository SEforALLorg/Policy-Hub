import { instance } from './instance';

// Questions Lists
export const getQuestions = () => {
    const lang = localStorage.getItem("lang")
    return instance.get(`/question-lists?lang=${lang}`)
};