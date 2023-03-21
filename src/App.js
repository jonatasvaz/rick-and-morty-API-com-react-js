
import { useEffect, useState } from 'react';

import './App.css';

import Card from './components/card';
import Navbar from './components/Navbar';
import Pagination from './components/pagination';
//pages



function App() {
       const [value,setValue]=useState([ ])
       const [info,setInfo]=useState({})
       const [filter,setFilter]=useState('')
       const[filterEnd,SetfilterEnd]=useState([])
        
    const initialUrl="https://rickandmortyapi.com/api/character"
   // console.log(filterEnd)

        const fetchGeral =(url)=>{
          
          fetch (url)
          .then((response)=> response.json())
          .then((data)=> {
            setValue(data.results)
            setInfo(data.info)
           // console.log(data)
      //SetfilterEnd(data.results.filter((data)=>  data.name.includes(filter.toUpperCase())))
          } )
          .catch((err)=>{
            console.log("a aplcação deu erro",err)
          })
        }

//console.log(fetchGeral)

        const onPrevios=()=>{
          fetchGeral(info.prev)
        }
        const onNext=()=>{
              fetchGeral(info.next)
        }



       useEffect(()=>{
           fetchGeral(initialUrl)
       },[])

    
  

 
  return (
 <>

     <Navbar />
      
   <div className='container'>
       <Card card={value} />
       <Pagination  prev={info.prev} next={info.next} onPrevios={onPrevios} onNext={onNext}/>
   </div>
 </>
  );
}

export default App;
