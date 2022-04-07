import React from "react";
import "./App.css";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 222.13,
      date: new Date(2022, 2, 21),
    },
    {
      id: "e2",
      title: "Dor Lock",
      amount: 346.53,
      date: new Date(2022, 2, 23),

    },
    {
      id: "e3",
      title: "toilet cleaner",
      amount: 256.83,
      date: new Date(2022, 2, 18),

    },
    {
      id: "e4",
      title: "toilet brushs",
      amount: 238.03,
      date: new Date(2022, 2, 15),

    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;