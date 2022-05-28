import React from 'react';
import Day from './Day';
 const Month = ({month}) => {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
        {month.map((row, index)=>{
            return (
                <React.Fragment key={index}>
                    {row.map((day, idx)=>{
                        return (
                            <Day
                                day={day}
                                key={idx}
                            />
                        )
                    })}
                </React.Fragment>
            )
        })}
    </div>
  )
}

export default Month;