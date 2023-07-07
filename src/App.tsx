import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import { Post } from './models/index';
import NewPost from './components/NewPost';
import ViewCard from './components/ViewCard';


/** В компоненте App создаются маршруты для переключения и маршрутизации страниц */
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/posts/:id" element={<ViewCard />} />
          <Route path="/posts/new" element={
            <NewPost 
              setPosts={setPosts}
            />} 
          />
          <Route path="/" element={
            <Main 
              posts={posts}
              setPosts={setPosts}
            />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;