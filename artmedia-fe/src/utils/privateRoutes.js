import { Outlet,Navigate } from "react-router-dom";
import { parseCookies } from 'nookies';
const PrivateRoutes = ()=>{
 const { jwt } = parseCookies()

 return(
    !jwt?<Navigate to="/"/>:<Outlet/>
 )
}
export default PrivateRoutes