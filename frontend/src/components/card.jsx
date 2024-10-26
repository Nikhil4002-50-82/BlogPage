import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

function Card({id,title,content,author}) {
  const [deleteButtonClick,setDeleteButtonClick]=useState(false);
  const navigate=useNavigate();
  const [bId,setBID]=useState();

  useEffect(()=>{
    const deleteReq=async()=>{
      try{
        const response=await axios.delete(`http://localhost:3000/delete/${bId}`);
        navigate(0);
      }
      catch(error){
        console.log(`error message : ${error.message}`);
      }
    }
    if(deleteButtonClick){
      deleteReq();
    }
    setDeleteButtonClick(false);
  },[deleteButtonClick]);

  return (
    <div className='w-[100%] h-auto flex-col px-10 '>
      <h3 className='my-3 font-bold text-[1.3em] text-[#052f0a]'>{title}</h3>
      <p>{content}</p>
      <h6 className='my-3 text-[0.8em] text-gray-500 font-semibold'>By: {author}</h6>
      <div className='h-11 flex mb-4'>
        <button id={id} className='p-2 h-[80%] w-[5.3em] mr-2 flex justify-center items-center bg-[#4444ff] text-white rounded' onClick={(event)=>{
            event.preventDefault();
            setBID(event.target.id);
            navigate(`/edit/${id}`);
        }}>Edit</button>   
        <button id={id} className='p-2 h-[80%] w-[5.3em] flex justify-center items-center bg-[#fe4242] text-white rounded' onClick={(event)=>{
          setDeleteButtonClick(true);
          setBID(event.target.id);
        }}>Delete</button>
      </div>
      <hr className='h-[0.1em] bg-slate-500'/>
    </div>   
  )
}

export default Card;

