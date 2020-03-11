import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  dashboard  from "../components/content/Dashboard";
import project_add from "../components/content/Add/Projects/Projects";
import project_list from "../components/content/Details/Projects/Projects";
import add_employee_logs from "../components/content/Add/Logs/Logs";
import employee_list from "../components/content/Details/Employees/Employees";
import official from "../components/content/Leaves/Official/Oleaves";
import leaves_employee from "../components/content/Leaves/Empleaves/Eleaves";
import user_add from "../components/content/Add/User/User";
import admin_list from "../components/content/Details/Admin/Admin";
import logout from "../components/content/Pages/Login/Login";

export default function Routes() {
    return (
        <Switch>
            <Route path = "/" exact component = { project_list } />
            <Route path = "/add-project" component = {project_add} />
            <Route path = "/project-list" component = {project_list} />
            <Route path = "/add-employee-logs" component = {add_employee_logs} />
            <Route path = "/employee-list" component = {employee_list} />
            <Route path = "/official" component = {official} />
            <Route path = "/employee-leaves" component = {leaves_employee} />
            <Route path = "/user_add" component = {user_add} />
            <Route path = "/admin_list" component = {admin_list} />
            <Route path = "/logout" component = {logout} />
        </Switch>

    );
}
