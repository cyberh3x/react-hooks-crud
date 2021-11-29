import { usePosts as usePostsContext } from "store/posts/post-provider";
import { _GET } from "services/http";
import { GET_POSTS } from "config/routes";
import {
  CREATE_POST,
  REMOVE_POST,
  STORE_POSTS,
  UPDATE_POST,
} from "config/actions-type";

const usePosts = () => {
  const [{ posts }, dispatch] = usePostsContext(),
    read = async () => {
      return await _GET(GET_POSTS)
        .then((response) => {
          dispatch({ type: STORE_POSTS, payload: response.reverse() });
        })
        .catch((erorr) => console.error(erorr));
    },
    remove = (postId) => {
      dispatch({ type: REMOVE_POST, payload: postId });
    },
    update = (postId) => {
      dispatch({ type: UPDATE_POST, payload: postId });
    },
    create = () => {
      dispatch({ type: CREATE_POST });
    };

  return {
    read,
    remove,
    update,
    create,
    posts,
  };
};

export default usePosts;
