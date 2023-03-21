import React, {  useState } from 'react'
import "./card.css"

const Card = ({card =[]  }  ) => {
     
  const[value,setValue]=useState('')
  

      const Fill=card.filter((item)=>item.name.includes(value))
 
  return (
   <>
   <input type="text" placeholder='procure o card' onChange={(e)=>setValue(e.target.value)}  value={value} className="input"/>
    <div className='row'> {Fill ?   Fill.map((item,index)=>(
     <div className='col' key={index}>
         <div className='card'>
             <img src={item.image}  alt="iamgem do personagem"  className='img'/>
                

             <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">Species: {item.species}</p>
                <p className="card-text">Location: {item.location.name}</p>
              </div>

         </div>
     </div>
     )) :
     
     card.map((item,index)=>(
      <div className='col' key={index}>
          <div className='card'>
              <img src={item.image}  alt="iamgem do personagem"  className='img'/>
                 
 
              <div className="card-body">
                 <h5 className="card-title">{item.name}</h5>
                 <hr />
                 <p className="card-text">Species: {item.species}</p>
                 <p className="card-text">Location: {item.location.name}</p>
               </div>
 
          </div>
      </div>
      )) 
   
     } 
  
     </div>
     </>
  )
  }

export default Card
