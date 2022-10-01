import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) =>{
  return(
    <div>
    <MyInput 
    placeholder ="Пошук..."
    value ={filter.query}
    onChange ={e => setFilter({...filter, query: e.target.value})}/>
    <MySelect value ={filter.sort} onChange ={selectedSort => setFilter({...filter, sort: selectedSort})} defaultValue="Сортування" options={[
      {value: 'title', name: 'По назві'},
      {value: 'body', name: 'По опису'}
    ]}/>
  </div>
  )
}
export default PostFilter;