import * as React from "react";
import { render } from "react-dom";
import { Router, RouteComponentProps } from "@reach/router";
import TaskMenu from "./TaskMenu";
import { isPropertySignature } from "typescript";

interface User {
     current_user: {
       id: number;
     }
  };

function App(props: User): JSX.Element {
   return (
      <Router>
        <RouterPage path="/" 
                    render={<TaskMenu userid = {props.current_user.id}/>}/>
      </Router>
  );
}

const RouterPage = (
  props: { render: JSX.Element } & RouteComponentProps
) => props.render;

export default App;
