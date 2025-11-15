function SmallCard({ data }) {
    const { iconBg, number, tittle, icon: Icon , darkMode} = data;
    return (
        <div className="rounded-lg shadow-md dark:shadow-lg bg-card dark:bg-card border border-border p-4 text-card-foreground transition-shadow duration-200 hover:shadow-lg dark:hover:shadow-xl">
            <div className="flex space-x-5">
                <div
                    className={`w-12 h-12 ${darkMode} ${iconBg} rounded-full items-center flex justify-center shadow-sm`}
                >
                    <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-sm text-muted-foreground">{tittle}</p>
                    <h3 className="text-2xl font-bold">{number}</h3>
                </div>
            </div>
        </div>
    );
}

export default SmallCard;
