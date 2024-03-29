import { useState } from "react";
import Button from "./Button";
import Box from "./Box";

function App() {
  const [player, setPlayer] = useState("No one");


  const getPlayerNamer = (player_name) => {
    setPlayer(player_name);
  }


  return (
    <div className="container">
      <h3 className="text-center my-4">{player} is playing</h3>
      <div className="row">
        <Box handler={getPlayerNamer} name="Divya" gender="F" player={player} />
        <Box handler={getPlayerNamer} name="Bhagirath" gender="M" player={player} />
        <Box handler={getPlayerNamer} name="Rohit" gender="M" player={player} />
        <Box handler={getPlayerNamer} name="Nikita" gender="F" player={player} />
      </div>
    </div>
  );
}

export default App;
