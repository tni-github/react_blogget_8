import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './imgModal/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Text } from '../../UI/Text';
import Comments from './Comments';
import FormComment from './FormComment';

export const Modal = ({ id, closeModal }) => {
  const [isFormCommentOpen, setIsFormCommentOpen] = useState(false);

  const [commentsData] = useCommentsData(id);
  const [post, comments] = [...commentsData];

  const overlayRef = useRef(null);
  const iconRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current || (target === iconRef.current)) {
      closeModal();
    }
  };

  const handleKeyDown = e => {
    const key = e.key;
    if (key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (commentsData.length === 0) {
    return (
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          <div className={style.loader_container}>
            <div className={style.loader}></div>
            <div className={style.loader_text}>Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <Text As='h2' className={style.title}>
          {post.title}
        </Text>

        <Text As='p' className={style.author}>
          Author: {post.author}
        </Text>

        <FormComment isFormCommentOpen={isFormCommentOpen}
          openFormComment={() => {
            setIsFormCommentOpen(true);
          }}
        />

        <Comments comments={comments} />

        <button className={style.close}>
          <CloseIcon ref={iconRef}/>
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
