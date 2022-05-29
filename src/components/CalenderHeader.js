import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { GlobalContext } from '../context/GlobalContext';

const CalenderHeader = () => {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext);
  const handlePrevMonth = ()=>{
    setMonthIndex((currentMonthIndex)=> currentMonthIndex - 1);
  }
  const handleNextMonth = ()=>{
    setMonthIndex((currentMonthIndex)=> currentMonthIndex + 1);
  }
  return (
    <header className='px-4 py-2 flex items-center'>
      <img src={logo} alt='' className='mr-2 w-12 h-12'/>
      <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calender</h1>
      <button className='border rounded py-2 px-4 mr-5'>
         Today
      </button>
      <button className=''>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'
        onClick={handlePrevMonth}>
          chevron_left
        </span>
        <span onClick={handleNextMonth} className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_right
        </span>
      </button>
    </header>
  )
}

export default CalenderHeader;
