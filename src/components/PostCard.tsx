import { Post } from '../models/index';

export default function PostCard({ content, created }: Post) {
  return (
    <div className='post'>
      <div className='post-top'>
        <div className='avatar'>
          <img src={require('../img/avatar.jpg')} alt='avatar' className='avatar-img'></img>
        </div>
      </div>
        {/* <img
  src="clock-demo-200px.png"
  alt="Clock"
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" /> */}

{/* <img width="100" height="200" src="https://picsum.photos/200/301"></img> */}

      <div className='name'>Ilnaz Gilyazov</div>
      <div className='status'>Основатель группы</div>
      <div className='created'>{new Date(created).toLocaleString()}</div>
      <div className='content'>{content}</div>
      <hr></hr>
      <div className='reaction'>
        <div>Нравится</div>
        <div>Комментировать</div>
      </div>
      <hr></hr>
      <div className='comment'>
        <div className='avatar'>
          <img src='' alt='avatar'></img>
        </div>
        <div className='comment=field'>
          <div>Напишите комментарий</div>
          <div className='icons-field'></div>
        </div>
      </div>
    </div>
  )
}