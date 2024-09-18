

import { useContext, useState } from "react"
import { SRenderDay, SRenderHeader } from "./RenderDay.styled"
import { GlobalContext } from "../../../context/GlobalContext";
export function RenderDay({day}) {
    const {currentWeek, setTasks} = useContext(GlobalContext);
    const [task, setTask] = useState("");
    function createNewTask() {
        const newTask = { name: task, weekId: currentWeek};
        setTasks((prev) => [...prev, newTask])
        setTask("");
    }
    
    return (
        <div className="RenderDayheder">
            <SRenderHeader>{day.name}</SRenderHeader>
            <SRenderDay>
                <input type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button onClick={createNewTask}>Task</button>
            </SRenderDay>
        </div>
    )
}