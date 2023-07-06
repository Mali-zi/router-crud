import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';
import { CreatePostsProps, Post } from '../models/index';
import CommentField from '../components/CommentField';
import { Route, Routes, useParams } from 'react-router-dom';

/** 
 * Компонент CreatePosts выводит сообщения, введенные пользователем.
 * В качестве props принимает переменные состояния: posts и setPosts.
 */
export default function Main({ posts, setPosts }: CreatePostsProps): React.ReactElement{
  function handleClickCreate() {

  };

  useEffect(() => {
    axios.get(`http://localhost:7070/posts`)
        .then((response) => setPosts(response.data))
  }, []);

  

  let postsList: JSX.Element[] = [<></>];
  if (posts) {
    postsList = posts.map(post => {
      if (post) {
        const { id, content, created }: Post = post;
        return (
          <li 
            key={id}
            className="mainList"
          >
  {/* <Link to={{pathname:`/posts/${postId}`, someData:{content}}}></Link> */}
            <Link to={`/posts/${id}`} state={post}>
              <div className='textPlace'>
                <PostCard 
                  content={content}
                  created={created}
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