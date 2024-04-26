import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddCraftItem from "../Components/AddCraftItem";

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
            },
            {
                path: '/addcraftitem',
                element: <AddCraftItem />
            }
        ]
    }
])

export default Routes;