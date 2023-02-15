import nookies from 'nookies'
export async function customFetch(url,options={}){
    const cookies = nookies.get('jwt')
    const headers = new Headers({
        'Content-Type':'application/json',
        Authorization:`Bearer ${cookies}`
    })
    const response = await fetch(url,{headers,...options})
    return response.json()
}

export const login=(url,data)=>{
return customFetch(url,{
    method:'POST',
    body:JSON.stringify(ata)
})
}