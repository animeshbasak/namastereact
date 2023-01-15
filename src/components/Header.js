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
    </div>
  )
}

export default Header; 