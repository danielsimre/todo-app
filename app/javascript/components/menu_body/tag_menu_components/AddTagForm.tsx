import * as React from "react";
import { Formik, Field, Form } from "formik";
import Task from "../../../types/Task";
import { NUM_OF_TAGS_MAX } from "../TagMenu";

interface Tag {
    tagName: string;
}

const TAGNAME_MINIMUM = 2;
const TAGNAME_MAXIMUM = 20;

function AddTagForm(props: Task): JSX.Element {
    const validateName = (tagName: string) => {
        let error: string = "";
        if (!tagName) {
            error = "You must input a title for the task."
        } else if (tagName.length < TAGNAME_MINIMUM || tagName.length > TAGNAME_MAXIMUM) {
            error = "Tag name length must be between " + TAGNAME_MINIMUM   
            + " and " + TAGNAME_MAXIMUM + " characters long."
        } else if (props.attributes["tag-list"].length == NUM_OF_TAGS_MAX) {
            error = "You have created the maximum amount of tags."
        }
        return error;
    }

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
    render={({errors, touched}) => (
        <Form>
            <label htmlFor="name"> Tag Name: </label>
            <Field type="text" id="name" name="tagName" validate={validateName}/>
            <button type="submit">Create</button>
            {errors.tagName && touched.tagName && <div>{errors.tagName}</div>}
        </Form>
    )}
/>;
}

export default AddTagForm;