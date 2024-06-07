import Image from "next/image";

export default function Presentation() {
  return (
    <div className="flex items-center w-full justify-evenly flex-wrap mb-28 mt-10">
      <div className="relative h-[60vh] w-[70vh]">
        <Image
          src="/manmachine.png"
          alt="Bank logo"
          fill={true}
          objectFit="cover" 
          priority
        />
      </div>
      <div className=" w-2/5">
        <h1 className=" text-5xl font-semibold p-5">Your <span className="text-green-500">Money Fast</span></h1>
        <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, beatae repellat magni aliquid et voluptates esse aspernatur ipsum aperiam illum accusantium vero! Repellendus corrupti repudiandae molestiae fugiat, cumque ullam minus. illum accusantium vero! Repellendus corrupti</p>
        <button className=" bg-green-500 p-4 rounded-lg m-5 text-lg hover:bg-green-800">Get Started</button>
      </div>
    </div>
  );
}