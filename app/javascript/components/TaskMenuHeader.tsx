import * as React from "react";
import AddTaskForm from "./menu_header/AddTaskForm";
import TagSearch from "./menu_header/TagSearchBar";

interface User{
    userid: number;
}

function TaskMenuHeader(props: User): JSX.Element {
    return (<div><AddTaskForm userid = {props.userid}/><br/><TagSearch/></div>)
}

export default TaskMenuHeader;