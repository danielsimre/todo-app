import * as React from "react";
import AddTaskForm from "./menu_header/AddTaskForm";
import TagSearch from "./menu_header/TagSearchBar";
import Task from "../types/Task"
import {Segment} from "semantic-ui-react"

interface setTaskFunction {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskMenuHeader(props: setTaskFunction): JSX.Element {
    return (<div className = "task-header"><Segment raised color ="blue" textAlign ="center" size ={"large"}>
        <AddTaskForm/><br/><TagSearch setTasks = {props.setTasks}/></Segment></div>)
}

export default TaskMenuHeader;