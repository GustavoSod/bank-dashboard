import Image from "next/image";

export default function Presentation() {
  return (
    <div className="flex lg:flex-row lg:justify-evenly flex-col-reverse items-center w-full justify-center lg:mb-22 mb-16 mt-12">
      <div className="relative lg:h-[70vh] lg:w-[70vh] sm:h-[50vh] sm:w-[55vh] h-[50vh] w-[40vh] lg:mt-0 mt-20 object-contain">
        <Image
          src="/manmachine.png"
          alt="Bank logo"
          fill={true}
          objectFit="cover" 
          priority
        />
      </div>
      <div className=" lg:w-2/5 w-11/12 lg:text-start text-center lg:mt-0 mt-20">
        <h1 className=" text-5xl font-semibold p-5">Your <span className="text-green-500">Money Fast</span></h1>
        <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, beatae repellat magni aliquid et voluptates esse aspernatur ipsum aperiam illum accusantium vero! Repellendus corrupti repudiandae molestiae fugiat, cumque ullam minus. illum accusantium vero! Repellendus corrupti</p>
        <button className=" bg-green-500 p-4 rounded-lg m-5 text-lg hover:bg-green-800">Get Started</button>
      </div>
    </div>
  );
}