import * as React from "react";
import TagMenu from "./TagMenu";
import Task from "../../types/Task";
import { Segment, Button, Checkbox } from "semantic-ui-react";

function TaskComponent(props: Task): JSX.Element {
  const [task, setTask] = React.useState<Task>(props);
  // Delete selected entry
  const handleDelete = (id: number) => {
    const requestTasks = async () => {
      const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
      const response = await fetch("/api/v1/tasks/" + id, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "X-CSRF-Token": csrfToken
        },
      });
      if (response.status === 204) {
        window.location.reload();
      }
    };
    requestTasks();
  }

  // Update database when task has been marked as complete/incomplete
  const handleChange = (values: Task) => {
    // Deep copy the previous state of task
    let newValues = JSON.parse(JSON.stringify(values));
    newValues.attributes.status = !values.attributes.status;
    const requestTasks = async () => {
      const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
      const response = await fetch("/api/v1/tasks/" + values.id, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({ data: newValues })
      });
      if (response.status === 200) {
        // Updates the checkbox accordingly. Will only work with a deep copy
        setTask(newValues);
      }
    };
    requestTasks();
  }

  return (<Segment color = "blue">
    <form style={{textAlign: "center"}}>
      <h2>
        {props.attributes.title + " "} 
        <Checkbox type="checkbox" onChange={() => handleChange(task)} checked={task.attributes.status} />
      </h2>
      <p>{props.attributes.description}</p>
      <Button type="button" onClick={() => handleDelete(task.id)}>Delete</Button>
    </form>
    <div style={{textAlign: "center"}}>
    <TagMenu attributes = {task.attributes} id = {task.id} type = {task.type} />
    </div>
  </Segment>);
}

export default TaskComponent;