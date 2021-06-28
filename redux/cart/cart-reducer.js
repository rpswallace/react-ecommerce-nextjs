import { cartActionTypes } from './cart-types'

const INITIAL_STATE = {
  hidden: true
};

// https://hangarworldwide.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15234654#overview
// ES6 function fallback assignation
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
