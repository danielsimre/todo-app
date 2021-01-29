import * as React from "react";
import TaskMenuHeader from "./TaskMenuHeader";
import TaskList from "./menu_body/TaskList";

function TaskMenu(): JSX.Element {
    return (<div><TaskMenuHeader/> <br /> <TaskList/></div>)
}


export default TaskMenu;