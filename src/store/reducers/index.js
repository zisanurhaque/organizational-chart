import { combineReducers } from "redux";
import themeColorSlice from "./themeColorSlice";
import hideAvatar from "./hideAvatar";
import hideDesignation from "./hideDesignation";
import getCSVdata from "./getCSVdata";
import cardSizeSlice from "./cardSizeSlice";
import borderRadiusSice from "./borderRadiusSice";
import zoomRangeSlice from "./zoomRangeSlice";

const rootReducer = combineReducers({
  themeColor: themeColorSlice,
  hideAvatar: hideAvatar,
  hideDesignation: hideDesignation,
  getCSVdata: getCSVdata,
  cardSize: cardSizeSlice,
  borderRadius: borderRadiusSice,
  zoomRange: zoomRangeSlice,
});

export default rootReducer;
