import { LOGIN } from "../constans";

const initialState = {
    login: {},
    fetchingLogin: false
  };

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
          return {
            ...state,
            login: action.payload, fetchingLogin: true
          };
          default:
            return state;
        }

}