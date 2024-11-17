import Link from "next/link"
import Image from "next/image"
import logo from "@/app/assets/Logo (1).png"

export default function Navbar() {
  return (
    <div className="containter w-[1920px] h-[92px] flex justify-between items-center py-4 px-[220px]  bg-[#043873] font-[inter]">
        <div className="logo w-[191px] h-[34px]"><Link href="/"><Image src={logo} alt="" /></Link></div>
      <div className=" w-[737.5px] h-[60px] flex justify-start items-center">

        
       
        <div className="w-[549px] h-[23px]  my-[18.5] flex items-center justify-start font-medium text-lg gap-[32px]  text-white ">
           <Link href="/" className="hover:text-[#dac27c]">Products</Link> 
           <Link href="/" className="hover:text-[#dac27c]">Solutions</Link> 
           <Link href="/" className="hover:text-[#dac27c]">Resources</Link> 
           <Link href="/" className="hover:text-[#dac27c]">Pricing</Link> 
           
        </div>
        <div className=" w-[126px] h-[60px] flex gap-6 bg-[#FFE492] hover:bg-[#dac27c] cursor-pointer rounded-lg py-4 px-10 text-[#043873] font-medium ml-[60px] text-lg"><Link href="/login">Login</Link></div>
      </div>
    </div>
  )
}