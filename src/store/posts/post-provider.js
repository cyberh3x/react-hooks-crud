import React, { useContext, useReducer } from "react";
import PostReducer from "store/posts/post-reducer";
import PostState from "store/posts/post-state";

const PostContext = React.createContext();

const PostProvider = ({ children }) => {
  const contextValue = useReducer(PostReducer, PostState);
  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};
export default PostProvider;

export const usePosts = () => {
  const contextValue = useContext(PostContext);
  return contextValue;
};
