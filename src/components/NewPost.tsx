import { useState } from 'react';
import axios from 'axios';
import { NewPostProps } from '../models/index';
import { Link, redirect } from 'react-router-dom';

export default function NewPost({ setPosts }: NewPostProps): React.ReactElement {
  const [message, setMessage] = useState('');

  function handleClickSend() {
    if (message) {
      axios.post(`http://localhost:7070/posts`, {
        id: 0,
        content: message,
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
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px">
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 
                  20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 
                  4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
              </svg>
            </div>
          </Link>
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
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <circle cx="15.5" cy="9.5" r="1.5"/>
              <circle cx="8.5" cy="9.5" r="1.5"/>
              <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 
                1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 
                2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            </svg>
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