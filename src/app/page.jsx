
import HomePage from "@/components/Home/HomePage";

import Image from "next/image";

import whatsapp from '../../public/images/whatsapp.png'
export default function Home() {
  return (
    <>

    
   <HomePage/>
   <a className="w-10 h-10 position-fixed bottom-0 whatsapp"   href="https://api.whatsapp.com/send?phone=+919997835488&text=Hello"><Image src={whatsapp} width={70} height={70}   alt='image'></Image></a>
  
    </>
  );
}
