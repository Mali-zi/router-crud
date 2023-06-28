import React, { useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';
import { CreatePostsProps } from '../models/index';

/** 
 * Компонент CreatePosts выводит сообщения, введенные пользователем.
 * В качестве props принимает переменные состояния: posts и setPosts.
 */
export default function Main({ posts, setPosts }: CreatePostsProps): React.ReactElement{

  function handleClickCreate() {

  };

  useEffect(() => {
    axios.get(`http://localhost:7070/posts`)
        .then((response) => {
          setPosts(response.data);
        })
  }, [posts]);

  let postsList: JSX.Element[] = [<></>];
  if (posts) {
    postsList = posts.map(post => {
      return (
        <li 
          key={post.postId}
          className="mainList"
        >
          <Link to={`/posts/${post.postId}`}>
            <div className='textPlace'>
              <PostCard 
                content={post.content}
                created={post.created}
              />
            </div>
          </Link>
        </li>
      )
    });
  };

  return (
    <div className='postsStore'>
      <div>
        <Link to={"/posts/new"}>
          <button>Создать пост</button>
        </Link>
      </div>
      <ul className="mylist">
        {postsList}
      </ul>
    </div>
  )
}