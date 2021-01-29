import * as React from "react";
import TaskMenuHeader from "./TaskMenuHeader";
import TaskList from "./menu_body/TaskList";
import Task from "../types/Task"

function TaskMenu(): JSX.Element {
    const [tasks, setTasks] = React.useState<Task[]>([]);

    React.useEffect(() => {
        const requestTasks = async () => {
            const response = await fetch("/api/v1/tasks");
            const { data } = await response.json();
            setTasks(data);
        };
        requestTasks();
    }, []);
    return (<div><TaskMenuHeader setTasks = {setTasks}/> <br /> <TaskList tasks = {tasks} /></div>)
}


export default TaskMenu;