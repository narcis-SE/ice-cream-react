import React from "react";
import './header.css'

function Header({user}:{user: string}){
    return(
        <div className="Header">
            <header>
                <div className="child"><h1>Ice Cream Wars</h1></div>
                <div className="child"><p>Welcome {user}</p></div>
                
            </header>
        </div>
    )
}

export default Header;