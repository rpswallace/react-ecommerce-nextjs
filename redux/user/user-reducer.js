import { userActionTypes } from './user-types'


const INITIAL_STATE = {
  currentUser: null
};

// https://hangarworldwide.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15234654#overview
// ES6 function fallback assignation
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
