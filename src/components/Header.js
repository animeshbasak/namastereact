import { useState } from "react";

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
      src="http://lh3.googleusercontent.com/EbPS9tYwL3H8NkiYJPJbuRHmeIFVUYJs99IdfFT7ea6ZF9sw1Vhw9tiCFVCXqornHGKZyP8sy89up4G-yKqGzoLgPx8" />
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
            Home
          </li>
          <li>
            About us
          </li>
          <li>
            Contact us
          </li>
          <li>
            Cart
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