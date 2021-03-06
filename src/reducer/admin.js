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
      title: "ABC XYZ",
      username:"Username",
      id: 0,
      date: "July 20, 2014",
      role: "admin",
      email: "pragati@coditation.com"
    },
    {
      title: "XYZ ABC",
      username:"Username",
      id: 1,
      date: "Jan 7, 2014",
      role: "Superadmin",
      email: "admin@coditataion.com"
    }
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
            return { ...list, title: action.payload.title, role: action.payload.role };
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
        var article = state.lists[check];
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

