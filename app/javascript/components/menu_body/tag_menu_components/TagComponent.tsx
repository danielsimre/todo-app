import * as React from "react";
import Task from "../../../types/Task"


interface Tag {
    tagName: string;
    task: Task;
}

function TagComponent(props: Tag): JSX.Element {
  const handleDelete = () => {
    const requestTasks = async () => {
      // Remove the selected tag from the tag list
      props.task.attributes["tag-list"] =
      props.task.attributes["tag-list"].filter(tag => tag !== props.tagName);
      const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
      const response = await fetch("/api/v1/tasks/" + props.task.id, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({ data: props.task })
      });
      if (response.status === 200) {
        window.location.reload();
      }
    };
    requestTasks();
  }

    return <div><form>
         {props.tagName} <button type="button" onClick={() => handleDelete()}>X</button>
    </form></div>;
}

export default TagComponent;