// import React from 'react'
import React from 'react'
import '../Meme.css';
export default function Textbox(){
    return (
        <div>
        <div className="krsna">   
        <input type="text" placeholder='TopText' name='top'/>
        <input type='text' placeholder='BottomText' name='bottom'/>
        </div>
        <div className="buttonn">
        <button className="new">Get a new MEME Image</button>
        </div>
        </div>
    )
}