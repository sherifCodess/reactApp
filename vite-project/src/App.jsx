import { useState } from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
import StudentList from "./components/StudentList";
import Timer from "./components/Timer";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <Header />

      <Counter />

      <StudentList />

      <Button
        text={showTimer ? "Hide Timer" : "Show Timer"}
        onClick={() => setShowTimer(!showTimer)}
      />

      {showTimer && <Timer />}
    </>
  );
}

export default App;
