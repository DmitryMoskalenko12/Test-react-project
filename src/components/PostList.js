import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const PostList = ({posts, title, remove}) =>{
  if (!posts.length) {
    return(
      <h1 style ={{textAlign : 'center'}}> Постів немає</h1>
    )
  }
  return(
    <div>
    <h1 style = {{textAlign: 'center'}}> {title} </h1>
    <TransitionGroup>
    {
        posts.map((post, i) => 
          <CSSTransition key = {post.id} timeout={500} classNames='post'>
           <PostItem remove ={remove} number = {i + 1} post = {post} />
          </CSSTransition>
        
        )}
    </TransitionGroup>
    </div>
  )
}
export default PostList;