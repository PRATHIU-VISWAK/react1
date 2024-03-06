import { Link } from "react-router-dom";
export const NAVBAR = () => {
    return  (
        <div>
            
                <Link to="/">Home</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Items">Items</Link>
                <Link to="/Profile">Profile</Link>
           
        </div>
    )
}