import { Outlet } from "react-router-dom";
import CatagoryHeader from "../components/CatagoryHeader";


const HomeLayout = () => {
    return (
        <div>
            <CatagoryHeader></CatagoryHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;