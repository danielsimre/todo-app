import * as React from "react";

type Task = {
  type: string;
  id: string;
  attributes: {
    title: string,
    description: string;
    status: boolean;
  }
}

function TaskComponent(props: Task): JSX.Element {
  // Delete selected entry
  const handleDelete = (id: string) => {
    const requestTasks = async () => {
      const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
      const response = await fetch("/api/tasks/" + id, {
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
    values.attributes.status = !values.attributes.status;
    const requestTasks = async () => {
      const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
      const response = await fetch("/api/tasks/" + values.id, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({ data: values })
      });
      if (response.status === 200) {
        window.location.reload();
      }
    };
    requestTasks();
  }

  return (<div className="taskcontainer">
    <form>
      <h2>
        {props.attributes.title}
        <input type="checkbox" onChange={() => handleChange(props)} defaultChecked={props.attributes.status} />
      </h2>
      <p>{props.attributes.description}</p>
      <button type="button" onClick={() => handleDelete(props.id)}>Delete</button>
    </form>
  </div>);
}

export default TaskComponent;