import ButtonDelete from './ButtonDelete';
import { IProps2 } from '../models/index';
import axios from 'axios';

/** 
 * Компонент CreatePosts выводит сообщения, введенные пользователем.
 * В качестве props принимает переменные состояния: posts и setPosts.
 */
export default function CreatePosts({posts, setPosts}: IProps2): React.ReactElement{
  function handleDelete(id: number): void {
    let answer = window.confirm('Are you sure?');
    if (answer) {
      axios.delete(`https://64945f8a0da866a95367a781.mockapi.io/posts/${id}`)
      .then(() => {
        axios.get(`https://64945f8a0da866a95367a781.mockapi.io/posts`)
        .then((response) => {
          setPosts(response.data);
        });
      });
    }
  };

  let postsList: JSX.Element[] = [<></>];
  if (posts) {
    postsList = posts.map(post => {
      return (
        <li 
          key={post.id}
          className="mainList"
        >
            <ButtonDelete 
              handleDelete={() => handleDelete(post.id)}
            />
          <div className='textPlace'>
            {post.massage}
          </div>
        </li>
      )
    });
  };

  return (
    <div className='postsStore'>
      <ul className="mylist">
        {postsList}
      </ul>
    </div>
  )
}