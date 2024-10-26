import React ,{useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostPage = ({name}) => {
  const navigate = useNavigate();
  const [postButtonClick,setPostButtonClick]=useState(false);
  const [obj,setObj]=useState({
    title:"",
    content:"",
    author:""
  });

  useEffect(()=>{
    const postData=async()=>{
      try{
        const response=await axios.post("http://localhost:3000/post",obj);
        navigate("/");
        setPostButtonClick(false);
      }
      catch(error){
        console.log(`error message : ${error.message}`);
      }
    };
    if(postButtonClick){
      postData();
    }
  },[postButtonClick]);

function handleChange(event){
  const {name,value}=event.target;
  setObj({
    ...obj,
    [name]:value
  })
}

  return (
    <div className='w-[100%] min-h-[110vh] h-[auto] flex justify-center bg-slate-100'>
        <div className='w-[75%] h-full flex-col justify-center items-center bg-white m-12 shadow-custom rounded-xl'>
            <div className='w-[100%] px-10 pt-4 pb-0 mb-10'>
                <h1 className='text-[2em] font-bold text-[#052f0a] mb-3'>{name}</h1>
                <form action="">
                    <input className="w-[100%] border border-gray-400 p-2 font-medium mb-5 rounded-md" type="text" name='title' placeholder='Title' onChange={handleChange} value={obj.title} required />
                    <textarea className="w-[100%] border border-gray-400 p-2 font-medium mb-4 rounded-md" name="content" rows="8" placeholder='Content' onChange={handleChange} value={obj.content} required />
                    <input type="text" name='author' className='w-[100%] border border-gray-400 p-2 font-medium mb-4 rounded-md' placeholder='Author' onChange={handleChange} value={obj.author} required />
                    <button className='w-[100%] h-9 flex justify-center items-center bg-[#4444ff] text-white rounded' onClick={(event)=>{
                      event.preventDefault();
                      setPostButtonClick(true);
                    }}>Create Post</button>
                </form>
            </div>
        </div>
    </div>
    
    
  );
}

export default PostPage;
