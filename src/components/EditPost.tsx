import React, { useState } from 'react';
import { EditPostProps } from '../models/index';
import { EditPostIcons, IconDelete, IconSmile } from './Icons';
import axios from 'axios';


/** Компонент отображает карточку редактирования поста */
export default function EditPost({post, setPost, setEdit}: EditPostProps): React.ReactElement {
  const postId = post.id;
  const [message, setMessage] = useState(post.content);

  function handleUpdate() {
    axios
      .put(`http://localhost:7070/posts/${postId}`, {
        ...post,
        content: message,
      })
      .then(() => setPost({
        ...post,
        content: message,
      }))
      .then(() => setEdit(false))
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
        <button 
          className='create-post-btn new-post-btn'
          onClick={handleUpdate}
        >
          Сохранить
        </button>
    </div>
  </div>
  )
}