import React, { useState } from "react";

import "./Votes.css"

let x = 0;
let y = 0;
let z = 0;

function Votes(){
    const[choco, setChoco] = useState<number>(0)
    const[vanil, setVanil] = useState<number>(0)
    const[straw, setStraw] = useState<number>(0)

    const chocoAverage = Math.round(((choco)/(choco + vanil + straw)) * 100 )
    const vanilAverage = Math.round((vanil)/(choco + vanil + straw) * 100 )
    const strawAverage = Math.round((straw)/(choco + vanil + straw) * 100 )
    

    return(
        <div className="Votes">
        <h2>Vote Here</h2>

        <button onClick={() => setChoco(x++)}>Chocolate</button>
        <button onClick={() => setVanil(y++)}>Vanilla</button>
        <button onClick={() => setStraw(z++)}>Strawberry</button>
        {choco ? 
        <p>Chocolate: {choco + " " + "(" + chocoAverage +"%" + ")"}</p>:
        <p> No Votes Yet for Chocolate yet</p>
        }
        <div className="chocolate" style={{width: choco}}>

        </div>
    
        {vanil ? 
        <p>Vanilla: {vanil + " " + "(" + vanilAverage +"%" + ")"}</p>:
        <p> No Votes for Vanilla yet</p>
        }

        <div className="vanilla" style={{width: vanil}}>

        </div>

        {straw ? 
        <p>Strawberry: {straw + " " + "(" + strawAverage +"%" + ")"}</p>:
        <p> No Votes for Strawberry Yet</p>
        }
        <div className="straw" style={{width: straw}}>

        </div>  


        </div>
    )
}

export default Votes;