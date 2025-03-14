import './App.css';
import Accordian from './component/Accordian/accordianIndex';
import ImageSlider from './component/ImageSlider';
import RandomColor from './component/RandomColor';
import StartRate from './component/StarRate';
function App() {
  return (
    <div className="App">


      {/* <Accordian/> */}


      {/* <RandomColor/> */}

{/* star rate  */}
      {/* <StartRate noOfStars={10}/> */}

    <ImageSlider url={"https://picsum.photos/v2/list"} limit={6}/>

    </div>
  );
}

export default App;
