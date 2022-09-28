import React from "react"
import "./pagination.css"


const Pagination=({onPrevios,onNext, prev,next})=>{


       const handlePrevios = ()=>{
        onPrevios()
       }

       const handleNext= ()=>{
        onNext()
       }

    return(
        <>
        <ul className="btns">
            <li>
                {prev ? (
          <button onClick={handlePrevios}>anterior</button>
                ) : null}
      
            </li>
            <li>
               {next ? (
               <button onClick={handleNext}>proxima</button>
               ):null} 
               
            </li>
        </ul>
        </>
    )
}


export default Pagination