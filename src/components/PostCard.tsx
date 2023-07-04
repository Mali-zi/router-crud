import { PostCardProps } from '../models/index';

export default function PostCard({ content, created }: PostCardProps) {
  const passTime = Date.now() - created;
  // alert(passTime);
  let currentTime = new Date(created).toLocaleString();
  if (passTime < 3600) {
    currentTime = new Date(passTime).getUTCMinutes() + 'мин.'
  };
  if (passTime >= 3600 && passTime < 86400) currentTime = new Date(passTime).getUTCHours() + 'час.';
  return (
    <div className='post'>
      <div className='post-top'>
        <div className='avatar'>
          <img src={require('../img/avatar.jpg')} alt='avatar' className='avatar-img'></img>
        </div>
        <div className='post-top-right'>
          <div className='name'>Ilnaz Gilyazov</div>
          <div className='status'>Основатель группы - {currentTime}</div>
        </div>
      </div>

      <div className='content'>{content}</div>
      <hr className='hr-line' />
      <div className='reaction'>
        <div className='reaction-left'>
          <div className='reaction-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
            </svg>
          </div>
          <div>Нравится</div>
        </div>
        <div className='reaction-left'>
          <div className='reaction-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 9h8" />
              <path d="M8 13h6" />
              <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
            </svg>
          </div>
          <div>Комментировать</div>
        </div>

      </div>
      <div className='comment'>
        <div className='avatar avatar-small'>
          <img src={require('../img/avatar.jpg')} alt='avatar' className='avatar-img avatar-img-small'></img>
        </div>
        <div className='comment-field'>
          <div>Напишите комментарий...</div>
          <div className='icons-field'>
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
            <div className='reaction-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 
                  2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 
                  3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
              </svg>
            </div>
            <div className='reaction-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px">
                <rect fill="none" height="24" width="24"/>
                <path d="M19,19H5V5h14V19z M5,3C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5z M11.5,14h1v-4h-1V14z M13.5,14h1v-1.5H16v-1h-1.5V11h2v-1h-3V14z M9.5,12v1h-1v-2h2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1h1 c0.55,0,1-0.45,1-1v-1H9.5z"/>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}