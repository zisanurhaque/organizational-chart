import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// config the store
const store = configureStore({ reducer: rootReducer });

// export default the store

export default store;
