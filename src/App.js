
import Chatboat from "./components/Chatboat"
const style = {
  marginTop: "10px", 
  fontSize: "25px", 
  color: "rgb(15, 206, 228)", 
  display: "flex", 
  flexDirection: "column", 
  justifyContent: "center", 
  alignContent: "center", 
  alignItems: "center"
}; 

function App() {
  return (
    <div className="App">
      <div style={style} className="">
        <span>Hi👋 there!</span>
        <span>I'm a chatboat</span>
        <span >Ask me about <span style={{fontWeight: "bold", filter: "drop-shadow(2px 2px 2px gray)"}}>SciAstra</span></span>
      </div>
      <Chatboat />
    </div>
  );
}

export default App;
