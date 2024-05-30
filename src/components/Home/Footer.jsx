import Image from 'next/image';
import logo from '../../../public/logo1.png'
import Link from 'next/link';
function Footer() {
  return (
   
      <div className="justify-content-center">
        <br />
        <footer
          className="text-center text-lg-start text-white"
          style={{"background-color": "#45526e"}}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    SKM ABROAD
                  </h6>
                  <Link href='/'>

                  <Image src={logo} width={200} height={200}   alt='image'></Image>
                  </Link>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Our Services</h6>
                  <p>
                    <a href=''  className="text-white">ILETS</a>
                  </p>
                  <p>
                    <a href=''  className="text-white">PTE</a>
                  </p>
                  <p>
                    <a  href='' className="text-white">Tourist Visa</a>
                  </p>
                  <p>
                    <a  href='' className="text-white">Study Visa</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <a className="text-white">Your Account</a>
                  </p>
                  <p>
                    <a className="text-white">Become an Affiliate</a>
                  </p>
                  <p>
                    <a className="text-white">Shipping Rates</a>
                  </p>
                  <p>
                    <a className="text-white">Help</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> <a 
                     className='text-light' href='mailto:navneetyadav.4444@gmail.com'>navneetyadav.4444@gmail.com</a>
                  </p>
                 
                  <p>
                    <i className="fas fa-print mr-3"></i> <a className='text-light' href='tel:+91 9997835388'>+91 9997835388</a>
                    
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3 ">
                    © 2024 Copyright:
                    <a className="text-white" href="https://skmabroad.com/">
                      SKM ABROAD
                    </a>
                    <hr />
                    <p >CREATED BY -  <a className='text-light' href='https://api.whatsapp.com/send?phone=+916367032851&text=Hello'>AASHISH KALWANIYA 6367032851</a></p>
                  </div>
                </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                   <i className="bi bi-facebook"></i>
                  </a>

                  

                 

                  <a
                    className="btn btn-outline-light btn-floating m-1 text-white"
                    role="button"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    
  );
}

export default Footer;
