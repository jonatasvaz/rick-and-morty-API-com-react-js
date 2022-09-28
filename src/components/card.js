import React from 'react'
import "./card.css"

const Card = ({card =[]}) => {
  return (
    <div className='row'>
     {card.map((item,index)=>(
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
     ))}
  
     </div>
  )
}

export default Card
