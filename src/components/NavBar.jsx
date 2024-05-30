// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo1.png'
const Navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg --bs-danger-bg-subtle justify-content-center">
      <div className="container-fluid ">
        <Link className="navbar-brand" href="/"><Image src={logo}  width={70}
      height={60}
      alt="site logo"></Image></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/file/aboutus">About Us</Link>
            </li>
            <li className="nav-item  dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Study Abroad
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/file/countries/uk">UK</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" href="/file/countries/us">USA</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" href="/file/countries/aus">Austrila</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" href="/file/countries/ca">Canada</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" href="/file/countries/china">China</Link></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link href='/file/services' className="nav-link active" >Services</Link>
            </li>
            <li className="nav-item">
              <Link href='/file/blog' className="nav-link active" >Blogs</Link>
            </li>
            <li className="nav-item">
              <Link href={'/file/contact'} className="nav-link active" >Contact Us</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Book Test
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://www.ieltsidpindia.com/" target='_blank'>ILETS</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" href="https://www.pearsonpte.com/" target='_blank'>PTE</Link></li>
  
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
