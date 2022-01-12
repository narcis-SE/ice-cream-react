import React from "react";
import './Ad.css'

function Ad({flavor,fontSize,darkTheme}: {flavor: string, fontSize: number, darkTheme: boolean}){
    
    let changeColor =""

    if(darkTheme){
        changeColor= "light";
    } else{
        changeColor = "dark"
    }
    
    return(
        <div className='storing'>
        <div className={"block " + changeColor}>
          <p>Vote for</p>
          <h2 style={{fontSize: fontSize}}>{flavor}</h2>
        </div>
      </div>

    )
}
export default Ad