import * as React from "react";
import { Formik, Field, Form } from "formik";
import Task from "../../types/Task";

interface Tag {
    name: string;
}

interface setTaskFunction {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TagSearchBar(props: setTaskFunction): JSX.Element {
    const handleSubmit = (values: Tag) => {
        const requestTasks = async () => {
            const response = await fetch("/api/v1/tasks?filter[tag_list]=" + values.name);
            const { data } = await response.json();
            props.setTasks(data);
        };
        requestTasks();
    };

    return <Formik
        initialValues={{
            name: ""
        }}
        onSubmit={handleSubmit}
        render={() => (
            <Form>
                <label htmlFor="name"> Search for a tag: </label>
                <Field type="text" id="name" name="name" />
                <button type="submit">Search</button>
            </Form>
        )}></Formik>
}

export default TagSearchBar;