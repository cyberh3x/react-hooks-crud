import {
  CREATE_POST,
  REMOVE_POST,
  STORE_POSTS,
  UPDATE_POST,
} from "config/actions-type";
import { generate } from "utility/lorem-ipsum-utility";
import { generateRandomNumber } from "utility/number-utility";

const PostReducer = (state, action) => {
  switch (action.type) {
    case STORE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    case UPDATE_POST:
      const post = state.posts.filter((item) => {
        return item.id === action.payload;
      });
      const updateSuffix = "Updated!";
      post[0].title = generate(undefined, "", updateSuffix);
      post[0].body = generate(5, "", updateSuffix);
      return {
        ...state,
      };
    case CREATE_POST:
      const createSuffix = "Created!";
      state.posts.unshift({
        id: generateRandomNumber(101),
        userId: generateRandomNumber(),
        title: generate(undefined, "", createSuffix),
        body: generate(10, "", createSuffix),
      });
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default PostReducer;
