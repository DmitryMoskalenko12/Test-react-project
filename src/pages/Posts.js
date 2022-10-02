import '../styles/App.scss';
import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
const [posts, setPosts] = useState([])

const [filter, setFilter] = useState({sort: '', query: ''});
const [modal, setModal] = useState(false);
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);

const [fetching, isLoading, error] = useFetching(async () =>{
  const response = await PostService.getAll(limit, page)
  setPosts(response.data);
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit))
});

const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() =>{
   fetching()
  },[page])

/* Создание */
const createPost = (newPost) =>{
   setPosts([...posts, newPost])
   setModal(false)
}


/* удаление */
const removePost = (post) =>{
  setPosts(posts.filter(p => p.id !== post.id))
}

const changePage = (page) => {
  setPage(page)
}

  return (
    <div className="App">
      <button onClick ={fetching}>Get Posts</button>
       <MyButton style ={{marginTop: 30}} onClick ={() => setModal(true)}>
        Створити користувача
       </MyButton>
      <MyModal visible ={modal} setVisible = {setModal}>
        <PostForm create = {createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter filter = {filter} setFilter = {setFilter}/>
      {
        error && <h1>`Виникла помилка ${error}`</h1>
      }
     
     {
      isLoading ? <div style ={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>  : <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = {'Список постів 1'}/>
     }
     
     <Pagination page = {page} changePage = {changePage} totalPages = {totalPages}/>
     
    </div>
  )
}

export default Posts;