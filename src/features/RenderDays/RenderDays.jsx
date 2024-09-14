import React, {useContext} from "react"
import { GlobalContext } from "../../context/GlobalContext"


export function RenderDays() {
    const {days, currentWeek} = useContext(GlobalContext)
    const currentWeekDays = days.filter((day) => day.weekId === currentWeek)
    
    return (
        <div>
            {currentWeekDays?.map((currentWeekDay) => {
                return <div>{currentWeekDay.name}</div>
            })}
        </div>
    )
}