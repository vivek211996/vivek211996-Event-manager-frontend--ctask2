import React, { useState } from "react";
import "./app.css"

import Login from "./Login";
import Homepage from "./Components/homepage.js";


function App() {
  const [state, setstate] = useState("Login");
  const [name, setName] = useState("");

  return (
    <div>
      
        {state === "Login" ? (
          <Login setName={setName} setstate={setstate} />
        ) : (
          <Homepage name={name} setstate={setstate} />
        )}
    </div>
  );
}

export default App;