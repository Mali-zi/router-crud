import { IconGif, IconPhoto, IconSmile } from "./Icons";

/** Вспомогательный компонент, отображает заглушки */
export default function CommentField() {
  return (
    <div className='comment'>
    <div className='avatar avatar-small'>
      <img src={require('../img/avatar.jpg')} alt='avatar' className='avatar-img avatar-img-small'></img>
    </div>
    <div className='comment-field'>
      <div>Напишите комментарий...</div>
      <div className='icons-field'>
        <div className='reaction-icon'>
          <IconSmile />
        </div>
        <div className='reaction-icon'>
          <IconPhoto />
        </div>
        <div className='reaction-icon'>
          <IconGif />
        </div>
      </div>
    </div>
  </div>
  )
}