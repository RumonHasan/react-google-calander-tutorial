import React,{useEffect, useMemo, useReducer, useState} from "react";
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
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [labels, setLabels] = useState([]); // contains all the labels
    // setting control for the smallCalenderMonth index to control the central calender

    // usereducer hook
    const [savedEvents, dispatchCallEvent] = useReducer(savedEventsReducer, [], initEvents);

    const filteredEvents = useMemo(()=>{
        return savedEvents.filter((event)=>
        labels
        .filter((lbl)=> lbl.checked)
        .map((lbl)=> lbl.label)
        .includes(event.label));
    },[savedEvents, labels])

    // saving the events to local storage everytime it changes
    useEffect(()=>{
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    },[savedEvents]);

    // saving labels
    useEffect(()=>{
        setLabels((prevLabels)=>{
            return [...new Set(savedEvents.map((event)=> event.label))].map((label)=>{
                const currentLabel = prevLabels.find((lbl)=> lbl.label === label);
                return {
                    label,
                    checked: currentLabel ? currentLabel.checked: true
                }
            })
        })
    },[savedEvents])

    useEffect(()=>{
        if(smallCalenderMonth !== null){
            setMonthIndex(smallCalenderMonth);
        }
    },[smallCalenderMonth]);

    // cleaning the selected event with every render
    useEffect(()=>{
        if(!showEventModal){
            setSelectedEvent(null);
        }
    },[showEventModal])

    const updateLabel = (label)=>{
        setLabels(labels.map((lbl)=>lbl.label === label.label ? label: lbl))
    }

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
            savedEvents,
            selectedEvent, 
            setSelectedEvent,
            setLabels,
            labels,
            updateLabel,
            filteredEvents
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}