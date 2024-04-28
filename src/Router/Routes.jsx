import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddCraftItem from "../Components/AddCraftItem";
import MyArtCraftList from "../Pages/MyArtCraftList";
import AllArtCraftItemsPage from "../Pages/AllArtCraftItemsPage";
import UpdateCraftItem from "../Pages/UpdateCraftItem";
import Home from "../Pages/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
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
            },
            {
                path: '/myartcraftlist',
                element: <MyArtCraftList />
            },
            {
                path: '/allartcraft',
                element: <AllArtCraftItemsPage />
            },
            {
                path: '/updateartcraft/:id',
                element: <UpdateCraftItem />,
                loader: ({ params }) => fetch(`http://localhost:5000/allArtCraft/id/${params.id}`)
            }
        ]
    }
])

export default Routes;