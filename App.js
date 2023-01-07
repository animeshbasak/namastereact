import React from "react";
import ReactDOM from "react-dom/client"

//JSX
const Heading = () => (
  <h1 id="title" key="h1">Namaste React</h1>
)

//React component
//Functional component

const HeaderComponent = () => {
  return (
    <div>
      {<Heading />}
      <h1>Namaste react functional component </h1>
      <h2>This is h2 tag</h2>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
//passing the react element inside the root element
root.render(<HeaderComponent />);