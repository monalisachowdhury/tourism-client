import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div>
            <div className="h-20">
            <Nav></Nav>
            </div>
            <div className="w-full">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;