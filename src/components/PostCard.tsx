import { PostCardProps } from '../models/index';
import React, { useState, useEffect } from 'react';
// import { Children } from 'react';


export default function PostCard({ content, created, children }: PostCardProps) {

  let currentTime = new Date(created).toLocaleTimeString();

  const nowTime = Date.now();
  const passTime = nowTime - created;
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
      {children}
    </div>
  )
}