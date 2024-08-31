function SmallCard({ data }) {
    const { iconBg, number, tittle, icon: Icon , darkMode} = data;
    return (
        <div className="rounded-lg shadow-lg bg dark:bg-slate-700 bg-white p-4 dark:text-white text-gray-800">
            <div className="flex space-x-5">
                <div
                    className={`w-12 h-12   ${darkMode} ${iconBg} rounded-full items-center flex justify-center`}
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
