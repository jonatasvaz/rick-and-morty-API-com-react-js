
import { useEffect, useState } from 'react';

import './App.css';

import Card from './components/card';
import Navbar from './components/Navbar';
import Pagination from './components/pagination';
//pages



function App() {
       const [value,setValue]=useState([ ])
       const [info,setInfo]=useState({})
  

    const initialUrl="https://rickandmortyapi.com/api/character"

        const fetchGeral =(url)=>{
          fetch (url)
          .then((response)=> response.json())
          .then((data)=> {
            setValue(data.results)
            setInfo(data.info)
          } )
          .catch((err)=>{
            console.log("a aplcação deu erro",err)
          })
        }

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

     <Navbar/>
      
   <div className='container'>
       <Card card={value}/>
       <Pagination  prev={info.prev} next={info.next} onPrevios={onPrevios} onNext={onNext}/>
   </div>
 </>
  );
}

export default App;
