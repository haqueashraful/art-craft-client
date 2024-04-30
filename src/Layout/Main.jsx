import { Outlet } from "react-router-dom";
import Nav from "../partials/Nav";
import Footer from "../partials/Footer";

const Main = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Nav />
           <div className="mx-2 lg:mx-20">
           <Outlet />
           </div>
            <Footer />
        </div>
    );
};

export default Main;