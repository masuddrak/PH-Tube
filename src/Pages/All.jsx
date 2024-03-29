import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const All = () => {
    const localData=useLoaderData()
    const allData=localData.data
    return (
        <div className="grid grid-cols-4 gap-10">
            {
            allData.map(item=><Card key={item.category_id} item={item}></Card>)
            }
        </div>
    );
};

export default All;