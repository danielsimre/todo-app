import * as React from "react";
import { Formik, Field, Form } from "formik";
import Task from "../../types/Task";

interface Tag {
    name: string;
    id: number;
}

interface setTaskFunction {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TagSearchBar(props: setTaskFunction): JSX.Element {
    const handleSubmit = (values: Tag) => {
        const requestTasks = async () => {
            const response = await fetch("/api/v1/tasks/");
            const { data } = await response.json();
            props.setTasks(data);
        };
        requestTasks();
    };

    return <Formik
        initialValues={{
            id: 0,
            name: ""
        }}
        onSubmit={handleSubmit}
        render={() => (
            <Form>
                <label htmlFor="name"> Search for a tag: </label>
                <Field type="text" id="name" name="attributes.tag-list[0]" />
                <button type="submit">Search</button>
            </Form>
        )}></Formik>
}

export default TagSearchBar;