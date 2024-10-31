import { combineReducers } from "@reduxjs/toolkit";

import reducerUser from "./reducer/reducerUser";

const UserStore = combineReducers({
  user: reducerUser,
});

export default UserStore;