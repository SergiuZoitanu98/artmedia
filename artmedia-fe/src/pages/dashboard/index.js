import SideBar from "../../components/side-bar"
import { parseCookies } from 'nookies';
import jwt_decode from "jwt-decode";
import {useEffect,useState} from 'react'

const Dashboard = ()=>{
    const [user,setUser] = useState()
    useEffect(()=>{
        const { jwt } = parseCookies();
        const decoded = jwt_decode(jwt)
        setUser({name:decoded.name,surname:decoded.surname})
    },[])
    
    return(
        <SideBar user={user}/>
    )
}
export default Dashboard