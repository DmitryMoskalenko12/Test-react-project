import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.scss';
import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
function App() {
const [posts, setPosts] = useState([
  {id: 1, title: 'JavaScript', body: 'Description'},
  {id: 2, title: 'JavaScript 2', body: 'Description'},
  {id: 3, title: 'JavaScript 3', body: 'Description'}
])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Назва посту"/>
        <input type="text" placeholder="Опис посту"/>
        <MyButton disabled >Створити пост</MyButton>
      </form>
      <PostList posts = {posts} title = {'Список постів 1'}/>
    </div>
  )
}

export default App;
