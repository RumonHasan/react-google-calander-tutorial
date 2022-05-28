import dayjs from "dayjs";

// rendering the calender
export const getMonth =( month = dayjs().month())=> {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year,month, 1)).day();
    let currentMonthCounter = 0 - firstDayOfMonth;
    // creating days matrix
    const daysMatrix = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCounter++;
            return new dayjs(new Date(year, month, currentMonthCounter))
        })
    });
    return daysMatrix;
}