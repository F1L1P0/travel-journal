import logo from "../assets/logo-react.svg";

export default function Header() {
    return (
      <>
      <div className='navbar'>
        <div className="navbar__logo">
          <img src={logo} alt="My projects" width="80px"/>
        </div>
        <div className="navbar__links">
          <a className='navbar__link' href="">price</a>
          <a className='navbar__link' href="">about</a>
          <a className='navbar__link' href="">contact</a>
        </div>
      </div>
        <header>
          <nav className='content'>
            <h1 className='content__head'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, placeat?</h1>
            <ol>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur officiis iste labore in excepturi? Quibusdam quidem nam ipsa unde.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur officiis iste labore in excepturi? Quibusdam quidem nam ipsa unde.</li>
            </ol>
          </nav>
        </header>
      </>
    )
  }
