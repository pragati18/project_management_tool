import { ADD_LIST } from "../constants/action-types";
import { OPEN_FORM } from "../constants/action-types";

export const addArticle = article => ({
  type: ADD_LIST,
  payload: article
});

export const openForm = showForm => ({
  type: OPEN_FORM,
  payload: showForm
});

