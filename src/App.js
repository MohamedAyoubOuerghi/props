import Data from "./Profile/Component";
import Image from "src\ayoub.png"

function App() {
  
  let fun = {fullname:"mohamed ayoub ouerghi",bio:"engineers spark community ",profession:"chairman of engineers spark "}
  
  return (
    <div className="App">
      <Data data={fun}>
        <img src={Image}/>
        </Data>
      
    </div>
  );
}

export default App;