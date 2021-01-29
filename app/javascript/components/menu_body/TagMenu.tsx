import * as React from "react";
import Popup from "reactjs-popup";
import AddTagForm from "./tag_menu_components/AddTagForm";
import TagComponent from "./tag_menu_components/TagComponent";
import Task from "../../types/Task";

function TagMenu(props: Task): JSX.Element {
    return <Popup trigger={<button className="button"> Manage Tags </button>}
        modal
        nested>
        {(close: any) => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
        </button>
                <div className="header"> Tags </div>
                <div className="content">
                    {' '}
          You can add up to ten tags for each task.
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