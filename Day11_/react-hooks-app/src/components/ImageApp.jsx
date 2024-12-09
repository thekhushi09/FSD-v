import React, { useState } from 'react'
import "./ImageApp.css";
import pic from "../images/images.jpg";

const ImageApp = () => {
    const [width,setWidth]=useState(200);
    const [height,setHeight]=useState(200);
    const[rotation,setRotation]=useState(0);
  return (
    <div>
        <img src={pic}
        style={{
        width:width,
        height:height,
        transform:`rotate(${rotation}deg)`,
        }}/>
        <button onClick={()=>{
            setWidth(width+10);
        }}
        >
            Increase width</button>
        <button onClick={()=>{
            setWidth(width-10);
        }}>Decrease width</button>
        <button onClick={()=>{
            setHeight(height+10);
        }}>Increase Height</button>
        <button onClick={()=>{
            setHeight(height-10);
        }}
        >Decrease Height</button>
        <button onClick={()=>{
            setRotation(rotation+10);
        }}>Rotate Clockwise</button>
        <button onClick={()=>{
            setRotation(rotation-10);
        }}
        >Rotate Anticlockwise</button>
    </div>
       
  )
}

export default ImageApp