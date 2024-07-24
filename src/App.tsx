import React from "react";

import "./App.css";
// import { useContext } from "react";
// import { GlobalContext } from "./context/context";
import Hero from "./components/Hero";
import Next from "./components/Next";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

function App() {
  return (
    <div className="App">
      <Hero containerVariants={containerVariants} />
      <Next title="Your Next Watch" id={1} />
      <Next title="Familiar Favourites" id={2} />
      <Next title="Your Top Movies" id={3} />
      <Next title="Best Comedies" id={4} />
    </div>
  );
}

export default App;
