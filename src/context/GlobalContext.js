import React from "react";

// creating context with default values for testing
export const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex: (index)=> {},
    smallCalenderMonth:0,
    setSmallCalenderMonth: (index)=>{},
    daySelected: null,
    setDaySelected: (day)=> {},
    showEventModal: false,
    setShowEventModal: ()=> {},
    dispatchCallEvent: ({type, payload})=>{},
    savedEvents:[],
    selectedEvent: null,
    setSelectedEvent: ()=>{},
    setLabels: ()=>{},
    labels: [],
    updateLabel: ()=>{},
    filteredEvents: []
});
