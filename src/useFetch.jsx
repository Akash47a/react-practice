import { useEffect, useState } from "react"


const useFetch=(url)=>{

        const [data,setData]=useState(null);
    const [error,setError]=useState(null)


    useEffect(()=>{
        setTimeout(()=>{
        fetch(url)
        .then((respond)=>{
            if(!respond.ok){
                throw Error("Couldn't retrive data");
                
            }
            return respond.json()})
        .then((data)=>{setData(data)})
        .catch((error)=>{setError(error.message)})
        },1000)
    })
    return [data,error]
}

export default useFetch