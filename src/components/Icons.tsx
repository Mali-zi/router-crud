export function IconDelete() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" className="icons" viewBox="0 0 24 24">
        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 
          20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 
          4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
      </svg>
  )
}

export function IconSmile() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <circle cx="15.5" cy="9.5" r="1.5"/>
      <circle cx="8.5" cy="9.5" r="1.5"/>
      <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 
        1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 
        2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    </svg>
  )
}

export function EditPostIcons() {
  return (
    <div className='edit-post-midle'>
      <div className='edit-post-item'>
        <img src={require('../img/photo.png')} alt='icon' className='edit-post-icon'></img>
        Фото/видео
      </div>
      <div className='edit-post-item'>
        <img src={require('../img/smile.png')} alt='icon' className='edit-post-icon'></img>
        Чувства/действия
      </div>
      <div className='edit-post-item'>
        <img src={require('../img/gif.png')} alt='icon' className='edit-post-icon'></img>
        GIF
      </div>
      <div className='edit-post-item'>
        <img src={require('../img/friends.png')} alt='icon' className='edit-post-icon'></img>
        Отметить друзей
      </div>
      <div className='edit-post-item'>
        <img src={require('../img/location_mark.png')} alt='icon' className='edit-post-icon'></img>
        Отметить посещение
      </div>
    </div>
  )
}