import React from 'react';
import PropTypes from 'prop-types';
import { usePopularPosts } from '../hooks/usePopularPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({ children }) => {
  const [popularPosts] = usePopularPosts();

  return (
    <postsContext.Provider value={{ popularPosts }}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
