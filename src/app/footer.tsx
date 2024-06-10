import "./globals.css";


export default function Footer() {
  return (
    <div className="flex sm:flex-row flex-col flex-wrap w-full justify-around items-center mt-24 bg-gradient-to-r from-slate-900 to bg-black lg:p-24 sm:p-16">
      <div className="sm:mt-0 mt-10 text-center sm:mb-4 mb-8">
        <h1 className="lg:text-5xl sm:text-3xl text-3xl sm:mb-4 mb-0">Logo</h1>
        <p className="sm:text-sm text-sm">example example lala</p>
      </div>
      <div className="text-center sm:mb-0 mb-4">
        <p className=" sm:text-sm text-sm sm:mb-4 mb-0">438.5334.4324-00</p>
        <p className=" sm:text-sm mb-0 text-sm">@exampledesclala</p>
      </div>
      <div className="text-center sm:mb-0 mb-10">
        <p className=" sm:text-sm text-sm sm:mb-4 mb-0">example@company.com</p>
        <p className=" sm:text-sm sm:mb-0 text-sm">+55 11 9999-9999</p>
      </div>
    </div>
  );
}