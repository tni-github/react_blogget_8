import { Text } from '../../../UI/Text';
import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';
import { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const FormComment = ({ isFormCommentOpen, openFormComment }) => {
  const { auth } = useContext(authContext);
  const sendRef = useRef(null);
  const textRef = useRef(null);

  const handleSubmit = e => {
    const target = e.target;
    if (target === sendRef.current) {
      console.log(textRef.current.value);
      textRef.current.value = '';
      textRef.current.focus();
      // target.reset();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleSubmit);

    return () => {
      document.removeEventListener('click', handleSubmit);
    };
  }, []);

  return (
    <form className={style.form} ref={sendRef} onSubmit={handleSubmit}>
      {!isFormCommentOpen ?
        <button
          className={style.btn}
          onClick={openFormComment}>
          Написать комментарий
        </button> :
        <>
          <Text As='h3' size={14} tsize={18}>
            {auth.name}
          </Text>
          <textarea
            className={style.textarea}
            ref={textRef}
            autoFocus
          >
          </textarea>
          <button className={style.btn}>
            Отправить
          </button>
        </>
      }
    </form>
  );
};

FormComment.propTypes = {
  isFormCommentOpen: PropTypes.bool,
  openFormComment: PropTypes.func,
};
