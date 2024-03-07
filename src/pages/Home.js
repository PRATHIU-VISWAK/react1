import { useContext } from "react"
import { AppContext } from "../App"
import { useQuery } from "@tanstack/react-query"
import Axios from "axios"

export const Home = () =>{
    const {data} = useQuery({ 
        queryKey : ["cat"] , 
        queryFn :  () => {
       return Axios.get("https://catfact.ninja/fact").then((res) => {
        return res.data })
    }})
    const {usernames} = useContext(AppContext)
    //console.log(data?.fact)
    return(
        <div>
            <h1>Home : the user is {usernames}</h1>
            <h2>{data?.fact}</h2>
        </div>
    )
}