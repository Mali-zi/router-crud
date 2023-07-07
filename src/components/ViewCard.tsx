import React, { useState } from 'react';
import PostCard from './PostCard';
import EditPost from './EditPost';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Post } from '../models';

export default function ViewCard(): React.ReactElement {
  const location = useLocation();
  const data = location.state as Post;
  const [post, setPost] = useState(data);
  const id = post.id;
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  function handleDeletePost() {
    axios
      .delete(`http://localhost:7070/posts/${id}`)
      .then(() => navigate('/'))
  };

  const viewPost = () => {
  return (
    <PostCard
      post={post}
    >
      <div className='new-post-bottom view-card-bottom'>
        <div className='view-card-btns'>
            <button 
              className='view-card-btn'
              onClick={() => setEdit(true)}
            >
              Изменить
            </button>
            <button 
              className='view-card-btn view-card-btn-red'
              onClick={handleDeletePost}
            >
              Удалить
            </button>
        </div>
      </div>
    </PostCard>
  )};

  return (
    <>
      { edit ? <EditPost post={post} setEdit={setEdit} setPost={setPost} /> : viewPost() }
    </>
  )
}