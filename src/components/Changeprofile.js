import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"

export const Changeprofile = () =>{
    const {setUsername} = useContext(AppContext)
     
    const [newusername , setnewusername ] = useState("")
    return(
        <div>
        <input type="text" onChange={(event)=>{
            setnewusername(event.target.value)
        }}/>

        <button onClick={()=>{
            setUsername(newusername)
        }}>change name</button>
        </div>
    )
}