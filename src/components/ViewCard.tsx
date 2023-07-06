import React from 'react';
import PostCard from './PostCard';
import { useLocation } from 'react-router-dom';

export default function ViewCard( ): React.ReactElement {
  const location = useLocation();
  const state = location.state;
  return (
    <PostCard
      content={state.content}
      created={state.created}
    >
      <div className='view-card-bottom'>
        <div className='view-card-btns'>
          <button className='create-post-btn'>Создать пост</button>
          <button className='create-post-btn'>Создать пост</button>

        </div>
      </div>
    </PostCard>
  )
}