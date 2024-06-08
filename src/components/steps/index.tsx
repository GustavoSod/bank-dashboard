export default function Steps({title, subTitle}:{title: string, subTitle: string}){
    return(
        <div className=" flex lg:flex lg:flex-row flex-col w-full justify-around items-center lg:mt-20 mt-5">
            <div className="flex-col mb-10 mt-10 lg:mt-10 lg:mb-0 sm:ml-10 lg:text-start text-center">
                <h2 className="lg:text-5xl text-4xl text-white-400 font-medium mr-auto">{title}</h2>
                <h2 className="lg:text-5xl text-4xl text-white-400 font-medium text-green-500">{subTitle}</h2>
            </div>
            <div className=" flex sm:flex-row flex-col justify-around bg-gradient-to-r from-slate-800 to bg-gray-900 lg:w-5/12 sm:w-11/12 w-3/4 items-center rounded-xl">
                <div className="flex flex-col justify-evenly sm:h-48 h-36 font-semibold text-center">
                    <p className="lg:text-base sm:text-base flex-wrap font-semibold">Tax 4,99%</p>
                    <p className="lg:text-base sm:text-base font-semibold">2 days</p>
                </div>
                <div className="flex flex-col justify-evenly sm:h-48 h-36 font-semibold text-center">
                    <p className="lg:text-base sm:text-base font-semibold">3 months free</p>
                    <p className="lg:text-base sm:text-base font-semibold">Cashback</p>
                </div>
                <div className="flex flex-col justify-evenly sm:h-48 h-36 font-semibold text-center">
                    <p className="lg:text-base sm:text-base font-semibold">tax declarations</p>
                    <p className="lg:text-base sm:text-base font-semibold">Support 24 hours</p>
                </div>
            </div>
        </div>
    );
}