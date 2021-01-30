import * as React from "react";
import AddTaskForm from "./menu_header/AddTaskForm";
import TagSearch from "./menu_header/TagSearchBar";
import {Segment} from "semantic-ui-react"

interface setFilterFunction {
    setFilterString: React.Dispatch<React.SetStateAction<string>>;
}

function TaskMenuHeader(props: setFilterFunction): JSX.Element {
    return (<div className = "task-header"><Segment raised color ="blue" textAlign ="center" size ={"large"}>
        <AddTaskForm/><br/><TagSearch setFilterString = {props.setFilterString}/></Segment></div>)
}

export default TaskMenuHeader;