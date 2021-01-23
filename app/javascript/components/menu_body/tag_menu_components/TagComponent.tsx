import * as React from "react";

interface Tag {
    type: string,
    id: number,
    attributes: {
        name: string,
        "task-id": number;
    }
}

function TagComponent(props: Tag): JSX.Element {
    const handleDelete = (id: number) => {
        const requestTags = async () => {
          const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
          const response = await fetch("/api/v1/tags/" + id, {
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
        requestTags();
      }

    return <div><form>
         {props.attributes.name} <button type="button" onClick={() => handleDelete(props.id)}>X</button>
    </form></div>;
}

export default TagComponent;