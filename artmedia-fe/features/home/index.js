import { useEffect, useState } from "react";
import nookies from 'nookies'
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import Dashboard from "@/components/dashboard";

const Home = ()=>{
    const [name,setName] = useState('')
    const [surname,setSurname] =useState('')
const router = useRouter()
    useEffect(()=>{
        let cookies =""
        try {
             cookies = nookies.get('jwt')
        var decoded = jwt_decode(cookies?.jwt);
         
        setName(decoded.name)
        setSurname(decoded.surname)
        } catch (error) {
            
        }
       
        if(!cookies.jwt){
            router.push('/')
        }
    },[])
    return(
        <Dashboard name={name} surname={surname}/>
    )
}
export default Home;