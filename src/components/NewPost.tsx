import { useState } from 'react';
import axios from 'axios';
import { NewPostProps } from '../models/index';
import { Link, redirect } from 'react-router-dom';
import { IconDelete, IconSmile } from './Icons';

/** Компонент отображает карточку создания нового поста */
export default function NewPost({ setPosts }: NewPostProps): React.ReactElement {
  const [message, setMessage] = useState('');

  function handleClickSend() {
    const newPost = message.trim();
    if (newPost) {
      axios.post(`http://localhost:7070/posts`, {
        id: 0,
        content: newPost,
      })
      .then((response) => {
        setPosts(response.data);
        setMessage('');
        redirect('/')
      })
    }
  };
  
  return (
    <div className='new-post'>
      <div className='new-post-top'>
        <div className='new-post-top-left'>
          <div className='new-post-top-item'>Публикация</div>
          <b className='new-post-top-item'>|</b>
          <div className='new-post-top-item'>Фото/видео</div>
          <b className='new-post-top-item'>|</b>
          <div className='new-post-top-item'>Прямой эфир</div>
          <b className='new-post-top-item'>|</b>
          <div className='new-post-top-item'>Еще</div>
        </div>
        <div className='new-post-top-left'>
          <Link to={"/"}>
            <div className='reaction-icon'>
              <IconDelete />
            </div>
          </Link>
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
      <div className='new-post-bottom'>
        <Link to='/'>
          <button className='create-post-btn new-post-btn' onClick={handleClickSend}>Опубликовать</button>
        </Link>
      </div>
    </div>
  )
}