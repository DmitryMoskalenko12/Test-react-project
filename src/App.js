import './styles/App.scss';
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
function App() {
const [posts, setPosts] = useState([
  {id: 1, title: 'JavaScript', body: 'Description'},
  {id: 2, title: 'JavaScript 2', body: 'Description'},
  {id: 3, title: 'JavaScript 3', body: 'Description'}
])

const [filter, setFilter] = useState({sort: '', query: ''});
const [modal, setModal] = useState(false);

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

/* Создание */
const createPost = (newPost) =>{
   setPosts([...posts, newPost])
   setModal(false)
}
/* удаление */
const removePost = (post) =>{
  setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">
       <MyButton style ={{marginTop: 30}} onClick ={() => setModal(true)}>
        Створити користувача
       </MyButton>
      <MyModal visible ={modal} setVisible = {setModal}>
        <PostForm create = {createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter filter = {filter} setFilter = {setFilter}/>
      
    <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = {'Список постів 1'}/>
     
       
     
    </div>
  )
}

export default App;
