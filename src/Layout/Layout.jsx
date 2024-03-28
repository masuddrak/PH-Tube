import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header></Header>
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;