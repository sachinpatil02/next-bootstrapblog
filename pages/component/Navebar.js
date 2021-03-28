import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from "next/router";

const Navbar = () => {

  const router = useRouter();

  return (
    // <nav>
    //   <div className="logo">
    //   <Image src="/logo.png" alt="site logo" width={128} height={77} />
    //   </div>
    //   <Link href="/"><a>Home</a></Link>
    //   <Link href="/about"><a>About</a></Link>
    //   <Link href="/ninjas/"><a>Ninja Listing</a></Link>
    // </nav>
    <header className="header">
      {/* <!-- Main Navbar--> */}
      <nav className="navbar navbar-expand-lg">
        <div className="search-area">
          <div className="search-area-inner d-flex align-items-center justify-content-center">
            <div className="close-btn"><i className="icon-close"></i></div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <form action="#">
                  <div className="form-group">
                    <input type="search" name="search" id="search" placeholder="What are you looking for?" />
                    <button type="submit" className="submit"><i className="icon-search-1"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <!-- Navbar Brand --> */}
          <div className="navbar-header d-flex align-items-center justify-content-between">
            {/* <!-- Navbar Brand --> */}
            <Link href="/" className="navbar-brand">Bootstrap Blog</Link>
            {/* <!-- Toggle Button--> */}
            <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span></span><span></span><span></span></button>
          </div>
          {/* <!-- Navbar Menu --> */}
          <div id="navbarcollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link active ">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link ">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/blogs" className="nav-link ">Blog</Link>
              </li>
              <li className="nav-item">
                <Link href="/post" className="nav-link ">Post</Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link ">Contact</Link>
              </li>
            </ul>
            <div className="navbar-text"><Link href="#" className="search-btn"><i className="icon-search-1"></i></Link></div>
            <ul className="langs navbar-text"><Link href="#" className="active">EN</Link><span>           </span><Link href="#">ES</Link></ul>
          </div>
        </div>
      </nav>
    </header>
);
}
 
export default Navbar;