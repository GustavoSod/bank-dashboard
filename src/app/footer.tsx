import "./globals.css";


export default function Footer() {
  return (
    <div className="flex sm:flex-row flex-col flex-wrap w-full justify-around items-center mt-24 bg-gradient-to-r from-slate-900 to bg-black lg:p-24 sm:p-16">
      <div className="sm:mt-0 mt-10 text-center sm:mb-4 mb-8">
        <h1 className=" text-3xl font-semibold p-5">Your<span className="text-green-500">Money</span></h1>
        <p className="sm:text-sm text-sm">YourMoney fácil</p>
      </div>
      <div className="text-center sm:mb-0 mb-4">
        <p className=" sm:text-sm text-sm sm:mb-4 mb-0">438.5334.4324-00</p>
        <p className=" sm:text-sm mb-0 text-sm">Rua exemplo 123 - Rio de Janeiro - RJ</p>
      </div>
      <div className="text-center sm:mb-0 mb-10">
        <p className=" sm:text-sm text-sm sm:mb-4 mb-0">example@company.com</p>
        <p className=" sm:text-sm sm:mb-0 text-sm">+55 11 9999-9999</p>
      </div>
    </div>
  );
}