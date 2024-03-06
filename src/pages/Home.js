import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () =>{
    const {usernames} = useContext(AppContext)
    return(
        <div>
            <h1>Home : the user is {usernames}</h1>
        </div>
    )
}