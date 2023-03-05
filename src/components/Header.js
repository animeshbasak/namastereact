import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png"
const loggedInUser = () => {
  //API call to check authentication
  return true;
}


export const Title = () => (
  // <h1 id="title" key="h1">Food Villa</h1>
  <a href="/" >
    <img
      className="title"
      alt="logo"
      src={Logo} />
  </a>
)

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" >
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" >
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/" >
              Cart
            </Link>
          </li>
        </ul>
      </div>
      {
        (isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)} > Login</button>)
      }
    </div >
  )
}

export default Header; 