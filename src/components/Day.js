import dayjs from 'dayjs';
import React,{useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext';
const Day = (props) => {
  const {day, rowIndex} = props;
  const {setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent} = useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(()=>{
    // updating the events based on the proper filter with date of entry
    const events = filteredEvents.filter(event=> dayjs(event.day).format('DD-MM-YY') === day.format("DD-MM-YY"));
    setDayEvents(events); // updating the day events
  },[filteredEvents, day]) // changes when the day changes

  // highlight current date
  const getCurrentDayClass = ()=>{
    return day.format('DD-MM-YY') === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7' : "";
  }

  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        {rowIndex === 0 &&  <p className='text-sm mt-1'>
          {day.format('ddd').toUpperCase()}
        </p>}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div className='flex-1 cursor-pointer' onClick={()=>{
        setDaySelected(day);
        setShowEventModal(true);
      }}>
          {dayEvents.map((event, index)=>{
              return (
                <div onClick={()=> setSelectedEvent(event)} key={index} className={`bg-${event.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}>
                  {event.title}
                </div>
              )
          })}
      </div>
    </div>
  )
}

export default Day;
