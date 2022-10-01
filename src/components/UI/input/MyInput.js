import classes from './MyInput.module.scss';
                                   /* ссылка на дом элемент */
const MyInput = (props, ref) =>{
  return(
    <input  className={classes.myInput} {...props}/>
  )
}
export default MyInput;