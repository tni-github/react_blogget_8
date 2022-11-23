import { useState, useContext } from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as AuthIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';

export const Auth = () => {
  const { delToken } = useContext(tokenContext);
  const [isActiveLogout, setIsActiveLogout] = useState(false);
  const { auth, clearAuth } = useContext(authContext);

  const handleClick = () => {
    setIsActiveLogout(!isActiveLogout);
  };

  const handleClickLogout = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ?
      <>
        <button className={style.btn} onClick={handleClick}
          data-tooltip={auth.name}>
          <img className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар пользователя ${auth.name}`}
          />
        </button>
        {isActiveLogout ?
          <button
            className={style.logout}
            onClick={handleClickLogout}
          >
          Выйти
          </button> :
          <></>}
      </> :
        <Text className={style.authLink} As='a' href={urlAuth}>
          <AuthIcon className={style.svg} width="128" height="128" />
        </Text>
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
