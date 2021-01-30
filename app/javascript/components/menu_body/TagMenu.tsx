import * as React from "react";
import Popup from "reactjs-popup";
import AddTagForm from "./tag_menu_components/AddTagForm";
import TagComponent from "./tag_menu_components/TagComponent";
import Task from "../../types/Task";
import { Button } from "semantic-ui-react";

export const NUM_OF_TAGS_MAX = 10;

function TagMenu(props: Task): JSX.Element {
    return <Popup trigger={<Button className="button"> Manage Tags </Button>}
        modal
        nested>
        {(close: any) => (
            <div className="modal">
                <Button negative className="close" onClick={close} icon = "remove">
                </Button>
                <div className="header"> Tags </div>
                <div className="content">
                    {' '}
          You can add up to {NUM_OF_TAGS_MAX} tags for each task.
        </div>
                <div className="actions">
                    <AddTagForm id={props.id} attributes={props.attributes} type = {"tasks"}/>
                    <>{props.attributes["tag-list"].map(tagName => <TagComponent tagName={tagName} task = {props}/>)}</>
                </div>
            </div>
        )}
    </Popup>
}

export default TagMenu;