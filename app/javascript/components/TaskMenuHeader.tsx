import * as React from "react";
import AddTaskForm from "./menu_header/AddTaskForm";
import TagSearch from "./menu_header/TagSearchBar";
import Task from "../types/Task"

interface setTaskFunction {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskMenuHeader(props: setTaskFunction): JSX.Element {
    return (<div><AddTaskForm/><br/><TagSearch setTasks = {props.setTasks}/></div>)
}

export default TaskMenuHeader;