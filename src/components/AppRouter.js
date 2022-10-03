import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

return(
  isAuth ? <Routes>
  { 
  publicRoutes.map(route =>
   <Route key={route.path} element ={route.component} path={route.path}>
    
   </Route>
  )} 
  
</Routes>
  :
  <Routes>
  {privateRoutes.map(route =>
   <Route key={route.path} element ={route.component} path={route.path}>
    
   </Route>
  )}
  
 </Routes>

  
)
}
export default AppRouter;