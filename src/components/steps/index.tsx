export default function Steps({title, subTitle}:{title: string, subTitle: string}){
    return(
        <div className="flex w-full justify-around items-center mt-20 ml-5 flex-wrap">
            <div>
                <h2 className="text-5xl text-white-400 font-medium">{title}</h2>
                <h2 className="text-5xl text-white-400 font-medium text-green-500">{subTitle}</h2>
            </div>
            <div className="bg-gradient-to-r from-slate-800 to bg-gray-900 w-5/12 rounded-xl p-10 hover:bg-gray-800 justify-between">
                <div className="flex justify-around mb-10">
                    <p>Tax 4,99%</p>
                    <p>2 days</p>
                    <p>tax declarations</p>
                </div>
                <div className="flex justify-around">
                    <p>3 months free</p>
                    <p>Cashback</p>
                    <p>Support 24 hours</p>
                </div>
            </div>
        </div>
        
    );
}