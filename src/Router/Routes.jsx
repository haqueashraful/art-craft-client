import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddCraftItem from "../Components/AddCraftItem";
import MyArtCraftList from "../Pages/MyArtCraftList";
import AllArtCraftItemsPage from "../Pages/AllArtCraftItemsPage";
import UpdateCraftItem from "../Pages/UpdateCraftItem";
import Home from "../Pages/Home";
import ViewDetails from "../Pages/ViewDetails";
import UnderSubCategory from "../Pages/UnderSubCategory";
import PrivateRoute from "../Components/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
                element: <PrivateRoute><AddCraftItem /></PrivateRoute>
            },
            {
                path: '/myartcraftlist',
                element: <PrivateRoute><MyArtCraftList /></PrivateRoute>
            },
            {
                path: '/allartcraft',
                element: <AllArtCraftItemsPage />
            },
            {
                path: '/updateartcraft/:id',
                element: <UpdateCraftItem />,
                loader: ({ params }) => fetch(`https://art-craft-server.vercel.app/allArtCraft/id/${params.id}`)
            },
            {
                path: '/viewdetails/:id',
                element: <PrivateRoute><ViewDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://art-craft-server.vercel.app/allArtCraft/id/${params.id}`)
            },
            {
                path: 'categorywise/:category',
                element: <UnderSubCategory />,
                loader: ({ params }) => fetch(`https://art-craft-server.vercel.app/allArtCraft/subcategoryName/${params.category}`)
            }
        ]
    }
])

export default Routes;