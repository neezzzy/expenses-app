import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../pages/ExpenseDashboardPage";
import AddExpensePage from "../pages/AddExpensePage";
import HelpPage from "../pages/HelpPage";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../components/Header";


const AppRouter = () => (
  <BrowserRouter>
    <div >
      <Header className="container-fluid"/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
