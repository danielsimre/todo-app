import * as React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function App(): JSX.Element {
  return (
    <Router>
      <RouterPage path="/" pageComponent={<><AddTask /> <br /> <TaskList /></>} />
    </Router>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
