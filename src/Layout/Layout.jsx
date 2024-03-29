import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header></Header>
            </div>
            <div className="container mx-auto min-h-screen">
                <Outlet></Outlet>

            </div>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;