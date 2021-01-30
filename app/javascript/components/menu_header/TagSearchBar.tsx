import * as React from "react";
import { Formik, Field, Form, FormikState } from "formik";
import Task from "../../types/Task";
import { Button, Popup } from "semantic-ui-react";

interface Tag {
    name: string;
}

interface setTaskFunction {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const text = <div><p>To search for multiple tags, separate each word with commas. </p>
                <p> To search by exclusion, start your search with 'exclude', followed
                    by the tags you want to exclude separated by commas. </p>
                <p> For example, a valid search would be: exclude, tag1, tag2 </p>
                <p> To display all tasks (without filtering), type in clearsq to reset the task menu. </p></div>

function TagSearchBar(props: setTaskFunction): JSX.Element {
    const handleSubmit = (values: Tag, resetForm: (nextState?: Partial<FormikState<Tag>>) => void) => {
        const requestTasks = async () => {
            const response = await fetch("/api/v1/tasks?filter[tag_list]=" + values.name);
            const { data } = await response.json();
            props.setTasks(data);
        };
        requestTasks();
        resetForm({});
    };

    return <div>
        <Formik
            initialValues={{
                name: ""
            }}
            onSubmit={(values, {resetForm}) =>{
                handleSubmit(values, resetForm);}
            }
            render={() => (
                <Form>
                    <label htmlFor="name"> Search for a tag: </label>
                    <Field type="text" id="name" name="name" /> <br/> <br/>
                    <Button type="submit">Search</Button> 
                </Form>
            )}></Formik>
            <br/>
            <Popup content = {text}
                   on='click'
                   pinned 
                   trigger={<Button icon='question' />} />
    </div>
}

export default TagSearchBar;