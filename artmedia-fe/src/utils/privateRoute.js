import { Outlet,Navigate } from "react-router-dom";
import { parseCookies } from 'nookies';
const PrivateRoute = ()=>{
 const { jwt } = parseCookies()

 return(
    jwt?<Navigate to="/dashboard"/>:<Outlet/>
 )
}
export default PrivateRoute