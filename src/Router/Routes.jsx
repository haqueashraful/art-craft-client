import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])

export default Routes;