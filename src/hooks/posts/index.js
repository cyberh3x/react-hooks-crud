import { usePosts as usePostsContext } from "store/posts/post-provider";
import { _GET } from "services/http";
import { GET_POSTS } from "config/routes";
import { STORE_POSTS } from "config/actions-type";

const usePosts = () => {
  const [{ posts }, dispatch] = usePostsContext(),
    get = () => {
      return _GET(GET_POSTS)
        .then((response) => {
          dispatch({ type: STORE_POSTS, payload: response });
        })
        .catch((erorr) => console.error(erorr));
    };

  return {
    get,
    posts,
  };
};

export default usePosts;
