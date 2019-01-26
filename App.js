// @flow

import * as React from "react";
import { Router, Route, browserHistory } from "react-router";
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client";
import { withPhenomicApi } from "@phenomic/preset-react-app/lib/es6/src/phenomicPresetReactApp.bs.js";

import * as Home from "./lib/es6/src/components/Home.bs.js";
import * as Posts from "./lib/es6/src/components/Posts.bs.js";
import * as Post from "./lib/es6/src/components/Post.bs.js";
import * as About from "./lib/es6/src/components/About.bs.js";
import ErrorPage from "./lib/es6/src/components/ErrorPage.bs.js";

import "normalize.css";
import "./global.css";

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home.jsComponent} />
    <Route path="/about" component={About.jsComponent} />
    <Route
      path="/blog"
      component={withPhenomicApi(Posts.jsComponent, Posts.queries)}
    />
    <Route
      path="/blog/after/:after"
      component={withPhenomicApi(Posts.jsComponent, Posts.queries)}
    />
    <Route
      path="blog/*"
      component={withPhenomicApi(Post.jsComponent, Post.queries)}
    />
    <Route path="*" component={ErrorPage} />
    <Route path="404.html" component={ErrorPage} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
