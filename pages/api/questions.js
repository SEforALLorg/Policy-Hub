import { instance } from "./instance";

// Questions Lists
export const getQuestions = (query) => {
  return instance.get(`/question-lists?locale=${"en"}&${query}`);
};
