import React from 'react';
import PropTypes from 'prop-types';
import { useCommentsData } from '../hooks/useCommentsData';

export const commentsContext = React.createContext({});

export const CommentsContextProvider = ({ id, children }) => {
  const [commentsData] = useCommentsData(id);

  return (
    <commentsContext.Provider value={{ commentsData, id }}>
      {children}
    </commentsContext.Provider>
  );
};

CommentsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};
