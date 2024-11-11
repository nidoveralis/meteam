import axios from "axios";

// import {
//   reducerLoginStatus,
//   reducerUser,
// } from "../../reducer/user/reducers/reducerUser";
import { AppDispatch } from "../../reducer/store";
import { reducerUser } from "../../reducer/user/reducer/reducerUser";

import { BASE_URL, headers } from '../../../utils/constants';

export const actionRegisterUser = (email: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/registration/email`, {
      email,
      lang: 'en'
      // headers
      //         headers: {
      //           Authorization: `Basic ${token}`,
    }, {
      headers
    })
    console.log(response);
    dispatch(reducerUser(response.data))
  } catch (err) {
    console.log(err);
  }
};

// export const actionCheckTokenValidity =
//   (token: string) => async (dispatch: AppDispatch) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/registration/email`, {
//         headers: {
//           Authorization: `Basic ${token}`,
//         },
//       });
//       // dispatch(reducerUser({ ...response.data, token: token }));
//       // dispatch(reducerLoginStatus(response.status));
//     } catch (err) {
//       // dispatch(reducerUser({}));
//       // dispatch(reducerLoginStatus(0));
//     }
//   };
