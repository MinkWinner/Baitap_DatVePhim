import * as ActionType from "../constant/constant";

export const slotChoosing = (ghe) => {
  return {
    type: ActionType.CHOOSING,
    ghe,
  };
};

export const deleteSlot = (ghe) => {
  return {
    type: ActionType.DELETE,
    ghe,
  };
};
