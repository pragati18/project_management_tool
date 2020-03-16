import { ADD_LIST } from "../constants/action-types";
import { UPDATE_LIST } from "../constants/action-types";
import { SELECT_LIST} from "../constants/action-types";
import { DELETE_LIST } from "../constants/action-types";

import { OPEN_FORM } from "../constants/action-types";
import { CLOSE_FORM } from "../constants/action-types";
import { OPEN_EDIT_FORM } from "../constants/action-types";
import { CLOSE_EDIT_FORM } from "../constants/action-types";
const initialState = {
  //Read
  lists: [
    {
      title: "Nitin Nande",
      projectName:"Tapclicks",
      id: 0,
      skills: "PHP, Core Java",
      totalLogs: "10"
    },
    {
      title: "Prajakta Shinde",
      projectName:"Andapt",
      id: 1,
      skills: "Javascript, ReactJs",
      totalLogs: "10"
    },
  ],
  uiState: {
    //Create
    openFormDialog: false,
    //Update
    openEditDialog: false,
    listToEdit: {},
    //Delete
    checked: []
  }
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //-----------------CREAT----------------------------

    case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, action.payload]
      };

    case OPEN_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openFormDialog: true
        }
      };

    case CLOSE_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openFormDialog: false
        }
      };
    //----------------UPDATE-------------------
    case UPDATE_LIST:
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id !== action.payload.id) {
            return list;
          } else {
            return { ...list, title: action.payload.title, projectName: action.payload.projectName,skills: action.payload.skills,totalLogs:action.payload.totalLogs };
          }
        })
      };

    case OPEN_EDIT_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: true,
          listToEdit: action.payload
        }
      };

    case CLOSE_EDIT_FORM:
      return {
        ...state,
        uiState: {
          ...state.uiState,
          openEditDialog: false
        }
      };

    //-----------------DELETE-------------
    case SELECT_LIST:
      const currentIndex = state.uiState.checked.indexOf(action.payload);
      if (currentIndex === -1) {
        state.uiState.checked.push(action.payload);
      } else {
        state.uiState.checked.splice(currentIndex, 1);
      }
      return state;

    case DELETE_LIST:
      // for (var article in state.articles) {
      for (var check in state.uiState.checked) {
        //remove article
        var list = state.lists[check];
        state.lists.splice(check, 1);

        //Remove Index
        var index = state.uiState.checked.indexOf(check);
        if (index > -1) {
          state.uiState.checked.splice(index, 1);
        }
      }
      state.uiState.checked = [];
      return state;

    default:
      return state;
  }
};
export default rootReducer;

