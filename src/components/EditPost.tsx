import React, { useState, useEffect } from 'react';
import { Post, LinkProps } from '../models/index';
import { EditPostIcons, IconDelete, IconSmile } from './Icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function EditPost({post, setEdit}: Post | any): React.ReactElement {
  const postId = post.id;
  const [message, setMessage] = useState(post.content);
  const navigate = useNavigate();


  function handleSave() {
    axios
      .put(`http://localhost:7070/posts/${postId}`, {
        ...post,
        content: message,
      })
      // .then(() => )
      .then(() => navigate(`/posts/${postId}`))
  }

  return (
    <div className='new-post'>
    <div className='new-post-top'>
      <div className='new-post-top-item edit-post-top'>Редактировать публикацию</div>
    <div className='reaction-icon-edit'>
      <button
        type="button"
        className='delete'
        onClick={() => setEdit(false)}
      >
        <IconDelete />
      </button>
      </div>
    </div>
    <hr className='hr-line' />
    <div className='new-post-midle'>
      <div className='avatar'>
        <img src={require('../img/avatar.jpg')} alt='avatar' className='avatar-img'></img>
      </div>
      {/* <label htmlFor='message'>Tell us your story:</label> */}
      <textarea
        id='message'
        name='textarea'
        className='inputPlace'
        value={message} 
        autoFocus
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
      <div className='new-post-midle-bottom'>
        <div className='reaction-icon'>
          <IconSmile />
        </div>
    </div>
    <EditPostIcons />
    <div className='new-post-bottom'>
      {/* <Link to='/'> */}
        <button 
          className='create-post-btn new-post-btn'
          onClick={handleSave}
        >
          Сохранить
        </button>
      {/* </Link> */}
    </div>
  </div>

  )
}