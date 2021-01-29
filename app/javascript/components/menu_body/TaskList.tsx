import * as React from "react";
import TaskComponent from './TaskComponent';

interface Task {
  id: number;
  attributes: {
    title: string,
    description: string;
    status: boolean;
    user_id: number;
  }
}

function TaskList(): JSX.Element {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  React.useEffect(() => {
    const requestTasks = async () => {
      const response = await fetch("/api/v1/tasks");
      const { data } = await response.json();
      setTasks(data);
    };
    requestTasks();
  }, []);
  //Fragments wrap around and 'convert' an Element[] to an Element
  return (<>{tasks.map(task => <TaskComponent attributes = {task.attributes} id = {task.id} type = {"tasks"}/>)}</>);
}

export default TaskList;
