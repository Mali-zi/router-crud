import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import { Post } from './models/index';
import NewPost from './components/NewPost';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div className="App">
      <div className="container">
      <Routes>
          <Route path="/" element={
            <Main 
              posts={posts}
              setPosts={setPosts}
            />} />
          <Route path="/posts/new" element={
            <NewPost 
              setPosts={setPosts}
            />} />
          {/* <Route path="/posts/:id" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} /> */}
        </Routes>



      </div>
    </div>
  );
}

export default App;