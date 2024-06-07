
import './globals.css'
import { Inter } from 'next/font/google'
import BootstrapClient from '@/components/BootstrapClient.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '@/components/Home/Footer';
import Navbar from '@/components/NavBar';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SKMAbroad | student visa |tourist visa | ilets in bikaner",
  description: "Foregin Visa | studnet visa | travel visa",
  icons:{
icon:'/logo1.png'
  }
};

export default function RootLayout({ children  }) {
  return (
    <html lang="en">
     
      <body className={inter.className }>
        <Navbar/>
       <div className='bgimage'>{children}</div> 
      <Footer/>
      <BootstrapClient />
      </body>
    </html>
  );
}
