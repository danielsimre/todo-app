import * as React from "react";
import { Formik, Field, Form } from "formik";

interface Tag {
    type: string,
    attributes: {
        name: string,
        "task-id": number;
    }
}

interface Task {
    taskid: number;
}

function AddTagForm(props: Task): JSX.Element {
    const handleSubmit = (values: Tag) => {
        const requestTags = async () => {
            const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
            const response = await fetch("/api/v1/tags", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/vnd.api+json",
                    "X-CSRF-Token": csrfToken
                },
                body: JSON.stringify({ data: values })
            });
            if (response.status === 201) {
                window.location.reload();
            }
        };
        requestTags();
    };

    return <Formik
    initialValues={{
        type: "tags",
        attributes: {
            name: "",
            "task-id": props.taskid,
        },
    }}
    onSubmit={handleSubmit}
    render={() => (
        <Form>
            <label htmlFor="name"> Tag Name: </label>
            <Field type="text" id="name" name="attributes.name" />
            <button type="submit">Create</button>
        </Form>
    )}
/>;
}

export default AddTagForm;