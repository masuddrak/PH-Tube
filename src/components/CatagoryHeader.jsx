import { NavLink } from "react-router-dom";


const CatagoryHeader = () => {
    return (
        <div className="flex justify-center my-10">
            <div className="flex gap-4 ">
                <NavLink to='/' className={({ isActive}) =>
                      isActive
                        ? "bg-red-500  px-4 rounded"
                        : "bg-gray-200 px-4 rounded"
                    }
                  >All</NavLink>
                <NavLink to="music" className={({ isActive}) =>
                      isActive
                        ? "bg-red-500  px-4 rounded"
                        : "bg-gray-200 px-4 rounded"
                    } activeClassName="text-red-500"
                >Music</NavLink>
                <NavLink to='comedy' className={({ isActive}) =>
                      isActive
                        ? "bg-red-500  px-4 rounded"
                        : "bg-gray-200 px-4 rounded"
                    }>Comedy</NavLink>
                <NavLink to='drawing' className={({ isActive}) =>
                      isActive
                        ? "bg-red-500  px-4 rounded"
                        : "bg-gray-200 px-4 rounded"
                    }>Drawing</NavLink>
            </div>
        </div>
    );
};

export default CatagoryHeader;