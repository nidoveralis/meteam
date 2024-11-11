import { configureStore } from "@reduxjs/toolkit";

import UserStore from "./user/index";

const store = configureStore({
  reducer: {
    user: UserStore,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
