import * as React from "react";
import TaskMenuHeader from "./TaskMenuHeader";
import TaskList from "./menu_body/TaskList";
import Task from "../types/Task"
import { Pagination, PaginationProps } from "semantic-ui-react";

function TaskMenu(): JSX.Element {
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [activePage, setActivePage] = React.useState(1);
    const [filterString, setFilterString] = React.useState("");

    React.useEffect(() => {
        const requestTasks = async () => {
            const response = await fetch("/api/v1/tasks?page[number]=" + activePage 
                                        + "&page[size]=5&filter[tag-list]=" + filterString);
            const { data } = await response.json();
            setTasks(data);
        };
        requestTasks();
    }, [activePage, filterString]);
    

    const onChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
                        pageInfo: PaginationProps) => {
        // Change internal state to keep track of active page on component
        setActivePage(Number(pageInfo.activePage));
    }

    /* Pass down setFilterString function to TagSearchBar so that when
       user searches, the filter string here will be updated,
       and the api will be called with the new parameters.
    */
    return (<div className = "task-menu"><TaskMenuHeader setFilterString = {setFilterString}/> <br /> 
            <TaskList tasks = {tasks} />
            <div className = "paginator">
                <Pagination 
                activePage={activePage}
                onPageChange={onChange}
                totalPages={10} 
                />
            </div>
            </div>)
}


export default TaskMenu;