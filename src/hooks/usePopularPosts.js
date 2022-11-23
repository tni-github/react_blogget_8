import { useState, useEffect, useContext } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const usePopularPosts = () => {
  const { token, delToken } = useContext(tokenContext);
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      if (response.status === 401) {
        throw new Error(response.status);
      }
      return response.json();
    })
      .then(({ data }) => {
        setPopularPosts(data.children);
      })
      .catch((err) => {
        console.error(err);
        delToken();
        setPopularPosts([]);
      });
  }, [token]);

  return [popularPosts];
};

