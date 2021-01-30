import * as React from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "semantic-ui-react";

/* This task definition excludes user-id and task id, which are not known
   before creating a task
*/
interface Task {
    type: "tasks";
    attributes: {
      title: string,
      description: string;
      status: boolean;
      "tag-list": string[];
    }
}

const TITLE_MINIMUM = 4;
const TITLE_MAXIMUM = 50;

function AddTaskForm(): JSX.Element {
    // Ensures titles are between 4 to 50 characters long
    const validateTitle = (title: string) => {
        let error: string = "";
        if (!title) {
            error = "You must input a title for the task."
        } else if(title.length < TITLE_MINIMUM || title.length > TITLE_MAXIMUM) {
            error = "Title length must be between " + TITLE_MINIMUM   
            + " and " + TITLE_MAXIMUM + " characters long."
        }
        return error;
    }

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
            <h2>Create a task</h2>
            <Formik
                initialValues={{
                    type: "tasks",
                    attributes: {
                        title: "",
                        description: "",
                        status: false,
                        "tag-list": []
                    },
                }}
                onSubmit={handleSubmit}
                render={({errors, touched}) => (
                    <Form>
                        <label htmlFor="title" style={{marginRight: '125px'}}>  Title: </label>
                        <Field type="text" id="title" name="attributes.title" validate={validateTitle}/> <br/>
                        {errors.attributes && touched.attributes && <div>{errors.attributes.title}</div>}
                        <label htmlFor="title">  Description (Optional): </label> 
                        <Field type="text" id="description" name="attributes.description" /> <br/> <br/>
                        <Button type="submit">Create</Button>
                    </Form>
                )}
            />
        </div>
    );
}

export default AddTaskForm;