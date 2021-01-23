import * as React from "react";
import Popup from "reactjs-popup";
import AddTagForm from "./tag_menu_components/AddTagForm";
import TagComponent from "./tag_menu_components/TagComponent";

interface Tag {
    type: string,
    id: number,
    attributes: {
        name: string,
        "task-id": number;
    }
}

interface Task {
    taskid: number;
}

function TagMenu(props: Task): JSX.Element {
    const [tags, settags] = React.useState<Tag[]>([]);

    React.useEffect(() => {
        const requestTags = async () => {
            const response = await fetch("/api/v1/tasks/" + props.taskid + "/tags/");
            const { data } = await response.json();
            settags(data);
        };
        requestTags();
    }, []);

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
                    <AddTagForm taskid={props.taskid} />
                    <>{tags.map(tag => <TagComponent attributes={tag.attributes} id={tag.id} type={"tags"} />)}</>
                </div>
            </div>
        )}
    </Popup>
}

export default TagMenu;