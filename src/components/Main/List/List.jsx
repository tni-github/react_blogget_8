import { useContext } from 'react';
import { postsContext } from '../../../context/postsContext';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const { popularPosts } = useContext(postsContext);
  // const postsData = [
  //   {
  //     thumbnail: '',
  //     title: 'Title1',
  //     author: 'Nickname1',
  //     ups: 77,
  //     date: '2022-11-04T09:45:00.000Z',
  //     id: '121',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title2',
  //     author: 'Nickname2',
  //     ups: 24,
  //     date: '2022-10-29T03:15:21.000Z',
  //     id: '504',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title3',
  //     author: 'Nickname3',
  //     ups: 50,
  //     date: '2022-10-20T00:01:15.000Z',
  //     id: '739',
  //   },
  //   {
  //     thumbnail: '',
  //     title: 'Title4',
  //     author: 'Nickname4',
  //     ups: 33,
  //     date: '2022-09-25T11:37:00.000Z',
  //     id: '949',
  //   },
  // ];

  return (
    <ul className={style.list}>
      {popularPosts.map((postData) => (
        <Post key={postData.data.id} dataPost={postData.data} />
      ))}
    </ul>
  );
};
