import React, {useState } from "react";
import './AdDesigner.css'

import Ad from './Ad'



let x = 25;
function AdDesigner(){
    const[flavor, setFlavor] = useState<string>("");
    const[color, setColor] = useState<boolean>(false);
    const[font, setFont] = useState<number>(25);

    let changeColor = "";

    if(color){
        changeColor = "light"

    } else{
        changeColor = "dark"
    }


    return(
        <div className="AdDesigner ">
            <div className="box">
            {/* <h1>Ad Designer</h1>
            <div className={"container " + changeColor}>
            <p>Vote for</p>
            <h2 style={{fontSize: font}}>{flavor}</h2>
            </div> */}
            <Ad flavor={flavor} fontSize={font} darkTheme={color}/>
            <p>What to Support</p>
            <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
            <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
            <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            <p>Color Theme</p>
            <button onClick={() => setColor(true)}> Light</button>
            <button onClick={() => setColor(false)}> Dark</button>
            <p> Font Size</p>
            <div className="buttonBox">
            <button onClick={() => setFont(x--)}>Down</button>
            <p>{font}</p>
            <button onClick={() => setFont(x++)}>Up</button>
            </div>
            </div>
            

        </div>
    )
}

export default AdDesigner;