import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./routes/App";
import Create from "./routes/Create";
import Edit from "./routes/Edit";

ReactDOM.render(
  <Router>
    <Switch>
      <Redirect exact path="/" to="todo" />
      <Route exact path="/todo" component={App} />
      <Route exact path="/todo/create" component={Create} />
      <Route exact path="/todo/edit/:id" component={Edit} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
