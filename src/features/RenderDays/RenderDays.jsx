import React, {useContext} from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { SRenderDay } from "./RenderDay.styled"

export function RenderDays() {
    const {days, currentWeek} = useContext(GlobalContext)
    const currentWeekDays = days.filter((day) => day.weekId === currentWeek)
    
    return (
        <SRenderDay>
            {currentWeekDays?.map((currentWeekDay) => {
                return <div>{currentWeekDay.name}</div>
            })}
        </SRenderDay>
    )
}