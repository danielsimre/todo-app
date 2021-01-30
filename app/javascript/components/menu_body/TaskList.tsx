import * as React from "react";
import TaskComponent from './TaskComponent';
import Task from "../../types/Task";
import { Segment } from "semantic-ui-react";

interface TaskArr {
    tasks: Task[];
}

function TaskList(props: TaskArr): JSX.Element {
  //Fragments wrap around and 'convert' an Element[] to an Element
  return (<div className = "task-container">
    <Segment.Group stacked>
    {props.tasks.map(task => <TaskComponent attributes = {task.attributes} id = {task.id} type = {"tasks"}/>)}
    </Segment.Group>
    </div>);
}

export default TaskList;
