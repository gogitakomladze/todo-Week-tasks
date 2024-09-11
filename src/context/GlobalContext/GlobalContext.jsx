import { createContext, useState } from "react";

const weeks_initial = [
    {
        id: "week-id-1",
        name: "პირველი კვირა",
    },
    {
        id: "week-id-2",
        name: "მეორე კვირა",
    },
];

const days_initial = [
        // Days for week 1
        {id: "day-1", weekId: "week-id-1", day: 1 },
        {id: "day-2", weekId: "week-id-1", day: 2 },
        {id: "day-3", weekId: "week-id-1", day: 3 },
        {id: "day-4", weekId: "week-id-1", day: 4 },
        {id: "day-5", weekId: "week-id-1", day: 5 },
    
        // Days for week 2
        {id: "day-6", weekId: "week-id-2", day: 1 },
        {id: "day-7", weekId: "week-id-2", day: 2 },
        {id: "day-8", weekId: "week-id-2", day: 3 },
        {id: "day-9", weekId: "week-id-2", day: 4 },
        {id: "day-10", weekId: "week-id-2", day: 5 },
        
];


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
    const [days, setDays] = useState(days_initial);
    const [tasks, setTasks] = useState([]);

    return (

     <GlobalContext.Provider
      value={{
        weeks,
        setWeeks,
        days,
        setDays,
        tasks,
        setTasks

      }}>{children}</GlobalContext.Provider>
    )
}