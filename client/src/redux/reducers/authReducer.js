import { SET_AUTH, LOGOUT } from '../types/types';

// eslint-disable-next-line default-param-last
export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH:
      return payload;

    case LOGOUT:
      return null;

    default:
      return state;
  }
};
