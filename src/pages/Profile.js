import { Changeprofile } from "../components/Changeprofile"
import { useContext } from "react"
import { AppContext } from "../App"

export const Profile = () =>{
    const {usernames} = useContext(AppContext)
    return(
        <div>
            <h1>Profile : current user is {usernames}</h1>
            <Changeprofile />
        </div>
    )
}