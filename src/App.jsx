import "./Scss/main.scss";
import Card from "./Components/Card";
import Heading from "./Components/Heading";
import data from "./Components/data.js"

function App() {
const cards = data.map((exportData)=> {
  return(<Card id={exportData.id} {...exportData}/>)
})
  return(
    <>
      <Heading    
        heading="My travel journal"
      />
    <div className="main-content">
      {cards}
    </div>
    </>
  )
}

export default App;
