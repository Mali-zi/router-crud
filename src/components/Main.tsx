import React, { useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';
import { CreatePostsProps } from '../models/index';
import CommentField from '../components/CommentField';

/** 
 * Компонент Main выводится на главную страницу "/" 
 * Отображается список существующих постов в виде карточек 
 */
export default function Main({ posts, setPosts }: CreatePostsProps): React.ReactElement{

  useEffect(() => {
    axios.get(`http://localhost:7070/posts`)
        .then((response) => setPosts(response.data))
  }, []);

  let postsList: JSX.Element[] = [<></>];
  if (posts) {
    postsList = posts.map(post => {
      if (post) {
        return (
          <li 
            key={post.id}
            className="mainList"
          >
            <Link to={`/posts/${post.id}`} state={post}>
              <div className='textPlace'>
                <PostCard 
                  post={post}
                >
                  <CommentField />
                </PostCard>
              </div>
            </Link>
          </li>
      )} else {
        return <></>
      }
    });
  };

  return (
    <div className='postsStore'>
      <div className='create-post'>
        <div className='create-post-place'></div>
          <Link to={"/posts/new"}>
            <button className='create-post-btn'>Создать пост</button>
          </Link>
        </div>
      <ul className="mylist">
        {postsList}
      </ul>
    </div>
  )
}