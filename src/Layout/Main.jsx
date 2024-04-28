import { Outlet } from "react-router-dom";
import Nav from "../partials/Nav";
import Footer from "../partials/Footer";

const Main = () => {
    return (
        <div>
            <Nav />
           <div className="mx-5 lg:mx-20">
           <Outlet />
           </div>
            <Footer />
        </div>
    );
};

export default Main;