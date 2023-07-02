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
        // redirect('/')
      });
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
          <div className='reaction-icon'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px">
              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 
                20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 
                4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
            </svg>
          </div>
        </div>

      </div>
      <hr className='hr-line' />
      <label htmlFor='message'>Tell us your story:</label>
      <textarea
        id='message'
        name='textarea'
        className='inputPlace'
        value={message} 
        autoFocus
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className='new-post-bottom'>
        <Link to='/'>
          <button onClick={handleClickSend}>Опубликовать</button>
        </Link>
      </div>
    </div>
  )
}