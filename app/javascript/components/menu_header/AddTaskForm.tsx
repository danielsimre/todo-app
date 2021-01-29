import * as React from "react";
import { Formik, Field, Form } from "formik";

interface Task {
    attributes: {
        title: string,
        description: string,
        status: boolean,
    }
}

function AddTaskForm(): JSX.Element {
    const handleSubmit = (values: Task) => {
        const requestTasks = async () => {
            const csrfToken = (document.querySelector("meta[name=csrf-token]") as HTMLMetaElement).content;
            const response = await fetch("/api/v1/tasks", {
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
        requestTasks();
    };

    return (
        <div>
            <h2>Add your task</h2>
            <Formik
                initialValues={{
                    type: "tasks",
                    attributes: {
                        title: "",
                        description: "",
                        status: false,
                    },
                }}
                onSubmit={handleSubmit}
                render={() => (
                    <Form>
                        <label htmlFor="title">  Title: </label>
                        <Field type="text" id="title" name="attributes.title" />
                        <label htmlFor="title">  Description: </label>
                        <Field type="text" id="description" name="attributes.description" />
                        <button type="submit">Create</button>
                    </Form>
                )}
            />
        </div>
    );
}

export default AddTaskForm;