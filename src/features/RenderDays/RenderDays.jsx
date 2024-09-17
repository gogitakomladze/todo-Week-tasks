import React, {useContext} from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { SRenderDay, SOneRenderday } from "./RenderDay.styled"

export function RenderDays() {
    const {days, currentWeek} = useContext(GlobalContext)
    const currentWeekDays = days.filter((day) => day.weekId === currentWeek)
    
    return (
        <SRenderDay>
            {currentWeekDays?.map((currentWeekDay) => {
                return <SOneRenderday>{currentWeekDay.name}</SOneRenderday>
            })}
        </SRenderDay>
    )
}