

const Card = ({ item }) => {
    console.log(item)
    const { thumbnail, title, authors } = item
    console.log()
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <div className="h-[150px]">
                <img src={thumbnail} className="h-full object-cover w-full" alt="Shoes" />
            </div>
            <div className="flex gap-2 p-2">
                <div className="w-[50px] h-[45px] ">
                    <img src={authors[0].profile_picture} className="w-full h-full rounded-full" alt="" />
                </div>
                <div className="">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>{authors[0].profile_name}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;