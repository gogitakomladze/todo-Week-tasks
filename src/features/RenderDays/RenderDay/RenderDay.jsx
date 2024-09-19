import { v4 as uuidv4 } from 'uuid';

import { useContext, useState } from "react"
import { SRenderDay, SRenderHeader, ScurrentDayTask } from "./RenderDay.styled"
import { GlobalContext } from "../../../context/GlobalContext";

export function RenderDay({day}) {
    const {setTasks, tasks} = useContext(GlobalContext);
    const [name, setName] = useState("");


    function createNewTask() {
        const newTask = { id: uuidv4(),name: name, dayId: day.id};
        setTasks((prev) => [...prev, newTask])
        setName("");
    }
    const currentDayTasks = tasks.filter((task) => task.dayId === day.id)
    return (
        <div className="RenderDayheder">
            <SRenderHeader>{day.name}</SRenderHeader>
            <SRenderDay>
                <input type="text" placeholder="Enter Task" value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={createNewTask}>Task</button>
            </SRenderDay>
            <ScurrentDayTask>
            {currentDayTasks?.map((currentDayTask) => {
                return(
                    <h4>{currentDayTask.name}</h4>
                )
            })}
            </ScurrentDayTask>
        </div>
    )
}