import React,{useEffect, useReducer, useState} from "react";
import { GlobalContext } from "./GlobalContext";
import dayjs from "dayjs";

// main reducer for saving the updating and pushing events
export const action = {
    PUSH: 'push',
    UPDATE: 'update',
    DELETE: 'delete'
}
function savedEventsReducer (state, {type, payload}){
    switch(type){
        case action.PUSH:
            return [...state, payload]
        case action.UPDATE:
            return state.map((event)=> event.id === payload.id ? payload : event)
        case action.DELETE:
            return state.filter((event)=> event.id !== payload.id);
        default:
            throw new Error()
    }
}
// for getting events from local storage
function initEvents(){
    const storageEvents = localStorage.getItem('savedEvents');
    const parsedEvents = storageEvents ? JSON.parse(storageEvents): [];
    return parsedEvents;
}

export const ContextWrapper = (props)=>{
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs()); // selected date on the small calender
    const [showEventModal, setShowEventModal] = useState(false);
    // setting control for the smallCalenderMonth index to control the central calender

    // usereducer hook
    const [savedEvents, dispatchCallEvent] = useReducer(savedEventsReducer, [], initEvents);

    // saving the events to local storage everytime it changes
    useEffect(()=>{
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    },[savedEvents])

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
            setShowEventModal,
            dispatchCallEvent,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}