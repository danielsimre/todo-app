import * as React from "react";
import AddTaskForm from "./menu_header/AddTaskForm";
import TagSearch from "./menu_header/TagSearchBar";

function TaskMenuHeader(): JSX.Element {
    return (<div><AddTaskForm/><br/><TagSearch/></div>)
}

export default TaskMenuHeader;