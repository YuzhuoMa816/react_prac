import './App.css';
import Accordian from './component/Accordian/accordianIndex';
import RandomColor from './component/RandomColor';
import StartRate from './component/StarRate';
function App() {
  return (
    <div className="App">


      {/* <Accordian/> */}
      {/* <RandomColor/> */}

      <StartRate noOfStars={10}/>
    </div>
  );
}

export default App;
