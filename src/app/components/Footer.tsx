import Image from "next/image";
import logo from "@/app/assets/Logo (1).png"

export default function Footer() {
  return (
    <div className=" w-[1920px] h-[461px] bg-[#043873] flex px-[220px] pt-[140px] pb-[32px] gap-[100px] flex-col">
      <div className="intro w-[1480px] h-[169px]  flex gap-[100px] text-lg">
        <div className="whitepase  w-[295px] h-[169px] ">
          <Image src={logo} alt="" className="mb-[15px]" />
          <p className="font-normal text-lg leading-[30px] tracking-[-2%] w-60 text-white ">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div className=" product w-[295px] h-[127px] flex flex-col justify-between  text-white ">
          <div className="font-bold ">Product</div>
          <div className="font-normal text-[#FFE492]">Overview</div>
          <div className="font-normal">Pricing</div>
          <div className="font-normal">Customer stories</div>
        </div>
        
        <div className=" product w-[295px] h-[130px] flex flex-col justify-between  text-white ">
          <div className="font-bold ">Resources</div>
          <div className="font-normal ">Blog</div>
          <div className="font-normal">Guides & tutorials</div>
          <div className="font-normal">Help center</div>
        </div>
      
        <div className=" product w-[295px] h-[130px] flex flex-col justify-between  text-white ">
          <div className="font-bold ">Company</div>
          <div className="font-normal ">About us</div>
          <div className="font-normal">Careers</div>
          <div className="font-normal">Help center</div>
        </div>
      </div>
      <div className="btm w-[1480px] h-[20px]  mx-auto flex justify-center  text-white ">
        <p>©2021 Whitepace LLC.   |   Created by: Ayesha Sajid</p></div>
    </div>
  );
}