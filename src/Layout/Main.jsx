import { Outlet } from "react-router-dom";
import Nav from "../partials/Nav";
import Footer from "../partials/Footer";

const Main = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;