import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const labelsClasses =["indigo", "gray", 'green', 'blue', 'red', 'purple'];

const EventModal = () => {
  const {setShowEventModal, daySelected} = useContext(GlobalContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState([]);

  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
        <form className='bg-white rounded-lg shadow-2xl w-1/4'>
            <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                <span className='material-icons-outlined text-gray-400'>
                    drag_handle
                </span>
                <button onClick={()=> setShowEventModal(false)}>
                    <span className='material-icons-outlined text-gray-400'>
                        close
                    </span>
                </button>
            </header>
            <div className='p-3'>
                <div className='grid grid-cols-1/5 items-end gap-y-7'>
                    <div></div>
                    <input 
                    type='text' 
                    required
                    name='title' 
                    placeholder='Add Title' 
                    value={title} 
                    className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200
                    focus:outline-none focus:ring-0 focus:border-blue-500'
                    onChange={(e)=>setTitle(e.target.value)}></input>
    
                <span className='material-icons-outlined text-gray-400'>
                    schedule
                </span>
                <p>
                    {daySelected.format('ddd, MMM DD')}
                </p>
                <span className='material-icons-outlined text-gray-400'>
                    segment
                </span>
                <input 
                    type='text' 
                    required
                    name='Description' 
                    placeholder='Add Description' 
                    value={description} 
                    className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200
                    focus:outline-none focus:ring-0 focus:border-blue-500'
                    onChange={(e)=>setDescription(e.target.value)}></input>
                </div>
                <span className='material-icons-outlined text-gray-400'>
                    bookmark_border
                </span>
                <div className='flex gap-x-2'>
                    {labelsClasses.map((labelClass, index)=>{
                        console.log(labelClass);
                        return (
                            <span key={index} className={`bg-${labelClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}>
                                <span className='material-icons-outlined text-white text-sm'>
                                    check
                                </span>
                            </span>
                        )
                    })}
                </div>
            </div>
        </form>
    </div>
  )
};

export default EventModal;
