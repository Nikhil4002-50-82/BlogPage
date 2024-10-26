import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const EditPage = ({name}) => {
    const navigate=useNavigate();
    const [editButtonClick,setEditButtonClick]=useState(false);
    const {bId}=useParams();
    const [editObj,setEditObj]=useState({
        title:"",
        content:"",
        author:""    
    });
    
    useEffect(()=>{
        const EditPost=async()=>{
            try{
                const response=await axios.patch(`https://blogpage-m1bj.onrender.com/edit/${bId}`,editObj);
                navigate("/");
                setEditButtonClick(false); 
            }
            catch(error){
                console.log(`error message: ${error.message}`);
            }
        }
        if(editButtonClick){
            EditPost();
        }
        
    },[editButtonClick])

    function handleEditChange(event){
        event.preventDefault();
        const {name,value}=event.target;
        setEditObj({
            ...editObj,
            [name]:value
        });
    }

    return (
        <div className='w-[100%] min-h-[110vh] h-[auto] flex justify-center items-center bg-slate-100'>
            <div className='w-[75%] h-full flex-col justify-center items-center bg-white m-12 shadow-custom rounded-xl'>
                <div className='w-[100%] px-10 pt-4 pb-0 mb-10'>
                    <h1 className='text-[2em] font-bold text-[#052f0a] mb-3'>{name}</h1>
                    <form action="">
                        <input className="w-[100%] border border-gray-400 p-2 font-medium mb-5 rounded-md" type="text" name='title' placeholder='Title' onChange={handleEditChange} />
                        <textarea className="w-[100%] border border-gray-400 p-2 font-medium mb-4 rounded-md" name="content" rows="8" placeholder='Content'onChange={handleEditChange} />
                        <input type="text" name='author' className='w-[100%] border border-gray-400 p-2 font-medium mb-4 rounded-md' placeholder='Author' onChange={handleEditChange} />
                        <button className='w-[100%] h-9 flex justify-center items-center bg-[#4444ff] text-white rounded' onClick={(event)=>{
                            event.preventDefault();
                            setEditButtonClick(true);
                            console.log("clciked");
                        }}>Edit Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPage;
