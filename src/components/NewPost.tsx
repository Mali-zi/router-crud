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
        <div>Публикация</div>
        <div>Фото/видео</div>
        <div>Прямой эфир</div>
        <div>Еще</div>
        <div>Закрыть</div>
      </div>
      <hr></hr>
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