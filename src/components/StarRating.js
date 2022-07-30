import React, { Component, useState } from 'react'
import { FaBook, FaStar } from "react-icons/fa"

const StarRating = ({ books})=> {
 const [rating , setRating]= useState(null);
 const [hover , setHover]= useState(null);

 return (
    <div className='star-rate'>
        {[ ...Array(5)].map((star,i)=>{
            const ratingValue = i + 1 ;
            return (
            <label  key={i}>
                <input     
                value={ratingValue} 
                className="star-input" 
                type="radio" 
                name="rating"
                onClick={()=>setRating(ratingValue)}/>
                <FaStar 
                color={ratingValue <=(hover ||rating) ?"#ffee00" :"#d4d4d4" }
                onMouseOver={() =>setHover(ratingValue)}
                onMouseOut={()=> setHover(null)}/>
            </label>
            );
        })}
         </div>
    );
};
export default StarRating