import React from 'react';
import { Switch, Route } from 'react-router-dom';
import project_list from "../components/content/Details/Projects/Projects";
import employee_list from "../components/content/Details/Employees/Employees";
import official from "../components/content/Leaves/Official/Oleaves";
import leaves_employee from "../components/content/Leaves/Empleaves/Eleaves";
import admin_list from "../components/content/Details/Admin/Admin";
import login from "../components/content/Pages/Login/Login";

export default function Routes() {
    return (
        <Switch>
            <Route path = "/" exact component = { project_list } />
            <Route path = "/project-list" component = {project_list} />
            <Route path = "/employee-list" component = {employee_list} />
            <Route path = "/official" component = {official} />
            <Route path = "/employee-leaves" component = {leaves_employee} />
            <Route path = "/admin_list" component = {admin_list} />
            <Route path = "/login" component = {login} />
        </Switch>

    );
}
