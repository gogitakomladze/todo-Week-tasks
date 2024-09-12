import React, {useContext} from "react"
import { GlobalContext } from "../../context/GlobalContext"

import { SContainer } from "@src/components/SContainer"

export function RenderDays() {
    const {days, currentWeek} = useContext(GlobalContext)
    const currentWeekDays = days.filter((day) => day.weekId === currentWeek)
    
    return (
        <SContainer>
            {currentWeekDays?.map((currentWeekDay) => {
                return <div>{currentWeekDay.name}</div>
            })}
        </SContainer>
    )
}