import { createContext, useEffect, useState } from "react";

const weeks_initial = [
    {
        id: "week-id-1",
        name: "პირველი კვირა",
    },
    {
        id: "week-id-2",
        name: "მეორე კვირა",
    },
    {
        id: "week-id-3",
        name: "მესამე კვირა",
    },
    {
        id: "week-id-4",
        name: "მეოთხე კვირა",
    },
    {
        id: "week-id-5",
        name: "მეხუთე კვირა",
    },
    {
        id: "week-id-6",
        name: "მეექვსე კვირა",
    },
    {
        id: "week-id-7",
        name: "მეშვიდე კვირა",
    },
];

// const days_initial = [
//         // Days for week 1
//         {id: "day-1", weekId: "week-id-1", day: "1 Exsample" },
//         {id: "day-2", weekId: "week-id-1", day: "2 Exsample" },
//         {id: "day-3", weekId: "week-id-1", day: "3 Exsample" },
//         {id: "day-4", weekId: "week-id-1", day: "4 Exsample"},
//         {id: "day-5", weekId: "week-id-1", day: "5 Exsample" },
    
//         // Days for week 2
//         {id: "day-6", weekId: "week-id-2", day: "6 Exsample" },
//         {id: "day-7", weekId: "week-id-2", day: "7 Exsample" },
//         {id: "day-8", weekId: "week-id-2", day: "8 Exsample" },
//         {id: "day-9", weekId: "week-id-2", day: "9 Exsample" },
//         {id: "day-10", weekId: "week-id-2", day: "10 Exsample" },
        
// ];


export const GlobalContext = createContext({
    weeks: [],
    setWeeks: undefined,
    days: [],
    setDays: undefined,
    tasks: [],
    setTasks:undefined
});

export function GlobalProvider({ children }) {
    const [weeks, setWeeks] = useState(weeks_initial);
    const [days, setDays] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [currentWeek, setCurrentWeek] = useState();

    console.log(days);
    

    // useEffect(() => {
    //     if(currentWeek) {
    // setDays(days_initial.filter( (day) => day.weekId === currentWeek));
    // }
    // },[currentWeek]) 
         
    return (

     <GlobalContext.Provider
      value={{
        weeks,
        setWeeks,
        days,
        setDays,
        tasks,
        setTasks,
        currentWeek,
        setCurrentWeek
      }}>{children}</GlobalContext.Provider>
    )
}