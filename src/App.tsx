import React, { useState, useEffect } from 'react';
import './App.css';
import { IPost } from './models/index';
import CreatePosts from './components/CreatePosts';
import InputForm from './components/InputForm';
import ButtonUpdate from './components/ButtonUpdate';
import axios from 'axios';

function App() {
  const [massage, setMassage] = useState('');
  const [posts, setPosts] = useState<IPost[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (massage) {
      axios.post(`https://64945f8a0da866a95367a781.mockapi.io/posts`, {
        massage,
      });
      event.preventDefault();
      setMassage('');
    }
  };

  function handleUpdate() {
    axios.get(`https://64945f8a0da866a95367a781.mockapi.io/posts`)
        .then((response) => {
          setPosts(response.data);
        })
  };

  useEffect(() => {
    axios.get(`https://64945f8a0da866a95367a781.mockapi.io/posts`)
        .then((response) => {
          setPosts(response.data);
        })
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div>
          <header className='header'>
            <h1>Notes</h1>
            <ButtonUpdate 
              handleUpdate={handleUpdate}
            />
          </header>
          <CreatePosts 
            posts={posts}
            setPosts={setPosts}
          />
          <InputForm 
            massage={massage}
            setMassage={setMassage}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;