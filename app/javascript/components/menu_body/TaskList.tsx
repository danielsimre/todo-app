import * as React from "react";
import TaskComponent from './TaskComponent';
import Task from "../../types/Task";

interface TaskArr {
    tasks: Task[];
}

function TaskList(props: TaskArr): JSX.Element {
  //Fragments wrap around and 'convert' an Element[] to an Element
  return (<>{props.tasks.map(task => <TaskComponent attributes = {task.attributes} id = {task.id} type = {"tasks"}/>)}</>);
}

export default TaskList;
