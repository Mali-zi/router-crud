import { PostCardProps } from '../models/index';
import { IconComment, IconLike } from './Icons';

/** Выводит карточку поста. Содержит дочерние элементы {children} 
 * для отображения карточки просмотра отдельного поста
 */
export default function PostCard({ post, children }: PostCardProps) {

  let currentTime = new Date(post.created).toLocaleTimeString();

  const nowTime = Date.now();
  const passTime = nowTime - post.created;
  if (passTime < 3600000) {
    currentTime = Math.floor(passTime / 1000 / 60) + ' мин.'
  } else {
    if (passTime < 86400000) {
      currentTime = Math.floor(passTime / 3600000) + ' час.'
    };
  };

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

      <div className='content'>{post.content}</div>
      <hr className='hr-line' />
      <div className='reaction'>
        <div className='reaction-left'>
          <div className='reaction-icon'>
            <IconLike />
          </div>
          <div>Нравится</div>
        </div>
        <div className='reaction-left'>
          <div className='reaction-icon'>
            <IconComment />
          </div>
          <div>Комментировать</div>
        </div>
      </div>
      {children}
    </div>
  )
}