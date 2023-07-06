import React from 'react';
import PostCard from './PostCard';
import { useLocation } from 'react-router-dom';
import { Link, redirect } from 'react-router-dom';

import axios from 'axios';

export default function ViewCard(): React.ReactElement {
  const location = useLocation();
  const {id, content, created } = location.state;

  function deletePost() {
    // alert(id);
    axios
      .delete(`http://localhost:7070/posts/${id}`)
      .then(() => {
        // alert("Post deleted!");
        redirect('/')
      });
  }

  return (
    <PostCard
      content={content}
      created={created}
    >
      <div className='new-post-bottom view-card-bottom'>
        <div className='view-card-btns'>
          <button className='view-card-btn'>Изменить</button>
          <Link to={"/"}>
            <button 
              className='view-card-btn view-card-btn-red'
              onClick={deletePost}
            >
              Удалить
            </button>
          </Link>
        </div>
      </div>
    </PostCard>
  )
}