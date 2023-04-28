import "./App.css";
import Card from "./card";
import Loader from "./Loader";
import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
import { useState } from "react";
import "./spinkit.min.css";

let cardArray = [];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  async function fetchUserData() {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((result) => result.json())
      .then((sampleData) => {
        console.log(sampleData.length);
        for (let i = 0; i < sampleData.length; i++) {
          cardArray.push(
            <Card
              name={sampleData[i].name}
              email={sampleData[i].email}
              phone={sampleData[i].phone}
              website={sampleData[i].website}
              imageSrc={`https://api.dicebear.com/6.x/adventurer/svg?seed=${sampleData[i].name}`}
            />
          );
        }
        console.log(cardArray);
        setIsLoaded(true);
      });
  }

  fetchUserData();
  return (
    <div>
      {isLoaded ? null : <Loader />}
      <div className="container">{cardArray}</div>
    </div>
  );
}

export default App;
