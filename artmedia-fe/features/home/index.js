import { useEffect } from "react";
import nookies from 'nookies'
import { useRouter } from "next/router";

const Home = ()=>{
const router = useRouter()
    useEffect(()=>{
        const cookies = nookies.get('jwt')
        if(!cookies.jwt){
            router.push('/')
        }
    },[])
    return(
        <h1>home</h1>
    )
}
export default Home;