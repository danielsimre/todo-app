import * as React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import TaskMenu from "./TaskMenu";


function App(): JSX.Element {
   return (
      <Router>
        <RouterPage path="/" 
                    render={<TaskMenu/>}/>
      </Router>
  );
}

const RouterPage = (
  props: { render: JSX.Element } & RouteComponentProps
) => props.render;

export default App;
