import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Conedy = () => {
    const lcalData=useLoaderData()
    const musicData=lcalData.data
    console.log(lcalData)
    return (
        <div className="grid grid-cols-4 gap-10">
            {
            musicData.map(item=><Card key={item.category_id} item={item}></Card>)
            }
        </div>
    );
};

export default Conedy;