import React, { useState,useEffect } from 'react';
import axios from "axios";
import Card from './card';
import CardHeading from "./cardHeading"

const RenderBlogs = () => {
  const [result,setResult]=useState([]);

  useEffect(()=>{
    const renderList=async()=>{
      try{
        const response=await axios.get("http://localhost:3000/");
        setResult(response.data);
      }
      catch(error){
        console.log(`error message : ${error.message}`);
      }
    }

    renderList();
  },[])

  function CreateCard(list){
    return(
      <Card 
          key={list.id}
          id={list.id}
          title={list.title}
          content={list.content}
          author={list.author}
        />
    );
  }
  
  return (
    <div className='w-[100%] min-h-[120vh] h-[auto] flex justify-center bg-slate-100'>
      <div className='w-[75%] min-h-[10rem] h-full flex-col justify-center items-center bg-white m-10 shadow-custom rounded-xl'>
        <CardHeading />
        {result.map(CreateCard)}
      </div>
    </div>
    
  )
}

export default RenderBlogs;
