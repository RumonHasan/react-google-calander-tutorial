import React,{useContext, useEffect, useState} from 'react'
import dayjs from 'dayjs';
import { getMonth } from '../utils';
import { GlobalContext } from '../context/GlobalContext';

const SmallCalender = () => {
const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
const [currentMonth, setCurrentMonth] = useState(getMonth());
    // local calander state
    useEffect(()=>{
      setCurrentMonth(getMonth(currentMonthIndex));
    },[currentMonthIndex]);
  const handlePrevMonth = ()=>{
    setCurrentMonthIndex((currentMonth)=> currentMonth - 1)
  }
  const handleNextMonth = ()=>{
    setCurrentMonthIndex((currentMonth)=> currentMonth + 1);
  }
  // context
  const {monthIndex} = useContext(GlobalContext);

  useEffect(()=>{
    setCurrentMonthIndex(monthIndex);
  },[monthIndex]);

  // current day class highlighter
  const getDayClass = (day)=>{
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    // specifying class for the current day
    if(nowDay === currentDay){
        return 'bg-blue-500 rounded-full text-white'
    }else{
        return '';
    }
  };
  return (
    <div className='mt-9'>
        <div>
            <header className='flex justify-between'>
                <p className='text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}
                </p>
                <button>
                    <span onClick={handlePrevMonth} className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                        chevron_left
                    </span>
                    <span onClick={handleNextMonth} className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                        chevron_right
                    </span>
                </button>
            </header>
            <div className='grid grid-cols-7 grid-rows-6'>
                {currentMonth[0].map((day, index)=>{
                    return (
                        <span className='text-sm py-1 text-center' key={index}>
                            {day.format('dd').charAt(0)}
                        </span>
                    )
                })}
                {currentMonth.map((row, index)=>{
                    return (
                        <React.Fragment key={index}>
                            {row.map((day,idx)=>{
                                return (
                                    <button key={idx} className={`py-1 w-full ${getDayClass(day)}`}>
                                        <span className='text-sm'>
                                            {day.format('D')}
                                        </span>
                                    </button>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    </div>
  )
};

export default SmallCalender;
