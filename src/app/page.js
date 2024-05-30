import Footer from "@/components/Home/Footer";
import HomePage from "@/components/Home/HomePage";
import NavBar from "@/components/NavBar";
import Image from "next/image";

import whatsapp from '../../public/images/whatsapp.png'
export default function Home() {
  return (
    <>

    
   <HomePage/>
   <a className="w-10 h-10 position-fixed bottom-0"   href="https://api.whatsapp.com/send?phone=+919997835488&text=Hello"><Image src={whatsapp} width={70} height={70}></Image></a>
  
    </>
  );
}
