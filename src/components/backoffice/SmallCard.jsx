function SmallCard({ data }) {
    const { iconBg, number, tittle, icon: Icon } = data;
    return (
        <div className="rounded-lg shadow-lg bg bg-slate-700 p-4">
            <div className="flex space-x-5">
                <div
                    className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}
                >
                    <Icon className="" />
                </div>
                <div className="">
                    <p>{tittle}</p>
                    <h3 className="text-2xl font-bold">{number}</h3>
                </div>
            </div>
        </div>
    );
}

export default SmallCard;
