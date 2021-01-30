import * as React from "react";
import { Formik, Field, Form, FormikState } from "formik";
import { Button, Popup } from "semantic-ui-react";

interface Tag {
    name: string;
}

interface setFilterFunction {
    setFilterString: React.Dispatch<React.SetStateAction<string>>;
}

const text = <div><p>To search for multiple tags, separate each word with commas. </p>
                <p> To search by exclusion, start your search with 'exclude', followed
                    by the tags you want to exclude separated by commas. For example, a valid search would be: exclude, tag1, tag2 </p>
                <p> To display all tasks (without filtering), leave the search bar blank and click search to reset the task menu. </p></div>

function TagSearchBar(props: setFilterFunction): JSX.Element {
    /* Pass back the filter string to TaskMenu, which will then
       fetch from the api with the parameters given by the user.
    */
    const handleSubmit = (values: Tag, resetForm: (nextState?: Partial<FormikState<Tag>>) => void) => {
        props.setFilterString(values.name);
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