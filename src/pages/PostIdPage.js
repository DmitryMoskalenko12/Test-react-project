import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () =>{
  const params = useParams()
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
 
  const [fetching, isLoading, error] = useFetching( async() => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fethcComents, isComLoading, comError] = useFetching( async() => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() =>{
   fetching()
   fethcComents()
   
  },[])

  return(
    <div>
   <h1>Ви відкрили сторінку поста з id = {params.id}</h1>
   {isLoading ? <Loader/> : <div>{post.id}. {post.title}</div>}
  <h2>Коментарі</h2>
  {isComLoading ? <Loader/> : 
  <div>
    {comments.map(comm => 
    <div style={{marginTop: 15}}>
      <h5>{comm.email}</h5>
      <div>{comm.body}</div>
    </div>)}
  </div>}
    </div>
  )
}
export default PostIdPage;