import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddCraftItem from "../Components/AddCraftItem";
import MyArtCraftList from "../Pages/MyArtCraftList";
import AllArtCraftItemsPage from "../Pages/AllArtCraftItemsPage";
import UpdateCraftItem from "../Pages/UpdateCraftItem";

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
                loader: ({ params }) => fetch(`https://art-craft-server.vercel.app/allArtCraft/${params.id}`)
            }
        ]
    }
])

export default Routes;