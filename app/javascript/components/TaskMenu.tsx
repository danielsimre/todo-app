import * as React from "react";
import TaskMenuHeader from "./TaskMenuHeader";
import TaskList from "./menu_body/TaskList";

interface User {
    userid: number;
}

function TaskMenu(props: User): JSX.Element {
    return (<div><TaskMenuHeader userid = {props.userid}/> <br /> <TaskList userid = {props.userid}/></div>)
}


export default TaskMenu;