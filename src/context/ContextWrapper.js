import React,{useEffect, useState} from "react";
import { GlobalContext } from "./GlobalContext";
import dayjs from "dayjs";

export const ContextWrapper = (props)=>{
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs()); // selected date on the small calender
    const [showEventModal, setShowEventModal] = useState(false);
    // setting control for the smallCalenderMonth index to control the central calender
    useEffect(()=>{
        if(smallCalenderMonth !== null){
            setMonthIndex(smallCalenderMonth);
        }
    },[smallCalenderMonth]);

    return (
        <GlobalContext.Provider value={{
            monthIndex,
            setMonthIndex,
            smallCalenderMonth,
            setSmallCalenderMonth,
            daySelected,
            setDaySelected,
            showEventModal,
            setShowEventModal
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}