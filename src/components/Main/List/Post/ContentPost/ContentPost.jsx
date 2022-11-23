import style from './ContentPost.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';
import { useState } from 'react';
import Modal from '../../../../Modal';

export const ContentPost = ({ id, title, author }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content} onClick={() => {
      setIsModalOpen(true);
    }}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
        >
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'
      >
        {author}
      </Text>
      {isModalOpen &&
      <Modal
        id={id}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />}
    </div>
  );
};

ContentPost.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
