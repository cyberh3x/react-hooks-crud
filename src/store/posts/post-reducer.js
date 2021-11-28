import { STORE_POSTS } from "config/actions-type";

const PostReducer = (state, action) => {
  switch (action.type) {
    case STORE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default PostReducer;
