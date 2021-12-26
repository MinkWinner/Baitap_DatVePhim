import data from "../../data/danhSachGhe.json";
import * as ActionType from "../constant/constant";

let initialState = {
  listGhe: data,
  listChoosing: [],
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHOOSING: {
      let list = [...state.listChoosing];
      const index = list.findIndex((ds) => ds.soGhe === action.ghe.soGhe);
      if (index === -1) {
        list.push(action.ghe);
      } else {
        list.splice(index, 1);
      }
      state.listChoosing = list;
      return { ...state };
    }
    case ActionType.DELETE: {
      let list = [...state.listChoosing];
      const index = list.findIndex((ds) => ds.soGhe === action.ghe);
      if (index !== -1) {
        list.splice(index, 1);
      }
      state.listChoosing = list;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
