import { Outlet } from "react-router-dom";
import CatagoryHeader from "../components/CatagoryHeader";


const Layout = () => {
    return (
        <div className="container mx-auto">
            <CatagoryHeader></CatagoryHeader>
            <Outlet></Outlet>
       
        </div>
    );
};

export default Layout;