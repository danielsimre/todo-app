import * as React from "react";
import { Formik, Field, Form } from "formik";
import Task from "../../../types/Task";
import TaskComponent from "../TaskComponent";

interface Tag {
    tagName: string;
}

function AddTagForm(props: Task): JSX.Element {
    const handleSubmit = (values: Tag) => {
        const requestTags = async () => {
            // Add the new tag to the task
            props.attributes["tag-list"].push(values.tagName);

            const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
            const response = await fetch("/api/v1/tasks/" + props.id, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "X-CSRF-Token": csrfToken
                },
                body: JSON.stringify({ data: props })
            });
            if (response.status === 200) {
                window.location.reload();
            }
        };
        requestTags();
    };

    return <Formik
    initialValues={{
        tagName: ""
    }}
    onSubmit={handleSubmit}
    render={() => (
        <Form>
            <label htmlFor="name"> Tag Name: </label>
            <Field type="text" id="name" name="tagName" />
            <button type="submit">Create</button>
        </Form>
    )}
/>;
}

export default AddTagForm;