import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider, connect } from "react-redux";
import todos from "./components/todos";
import userTodo from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Layout, Menu, Breadcrumb } from "antd";

import "./styles.css";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userTodo, composeEnhancer(applyMiddleware(thunk)));

class RootContainerComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={todos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

let RootContainer = connect()(RootContainerComponent);

export default class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="titleCard">Todo App</div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="container">
            <Provider store={store}>
              <RootContainer />
            </Provider>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>3 May 2020</Footer>
      </Layout>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
