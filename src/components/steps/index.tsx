export default function Steps({title, subTitle}:{title: string, subTitle: string}){
    return(
        <div className="lg:flex lg:flex-row flex flex-col w-full justify-around items-center lg:mt-20">
            <div className="mb-10 mt-10 lg:mt-10 lg:mb-0 sm:ml-10 lg:text-start text-center">
                <h2 className="lg:text-5xl text-4xl text-white-400 font-medium mr-auto">{title}</h2>
                <h2 className="lg:text-5xl text-4xl text-white-400 font-medium text-green-500">{subTitle}</h2>
            </div>
            <div className=" flex flex-wrap justify-around bg-gradient-to-r from-slate-800 to bg-gray-900 lg:w-5/12 w-11/12 items-center rounded-xl hover:bg-gray-800">
                <div className="flex flex-col justify-evenly h-48">
                    <p className="lg:text-base sm:text-base text-sm flex-wrap">Tax 4,99%</p>
                    <p className="lg:text-base sm:text-base text-sm">2 days</p>
                </div>
                <div className="flex flex-col justify-evenly h-48">
                    <p className="lg:text-base sm:text-base text-sm">3 months free</p>
                    <p className="lg:text-base sm:text-base text-sm">Cashback</p>
                </div>
                <div className="flex flex-col justify-evenly h-48">
                    <p className="lg:text-base sm:text-base text-sm">tax declarations</p>
                    <p className="lg:text-base sm:text-base text-sm">Support 24 hours</p>
                </div>
            </div>
        </div>
    );
}