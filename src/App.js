import './App.css';
import Accordian from './component/Accordian/accordianIndex';
import ImageSlider from './component/ImageSlider';
import RandomColor from './component/RandomColor';
import StartRate from './component/StarRate';
import LoadMoreData from './component/LoadMoreData';
import SideMenu from './component/SideMenu';
import menus from './component/SideMenu/data';
import QRCodeGenerator from './component/QRGenerate'
import LightDarkSwitch from './component/LightDarkSwitch'
function App() {
  return (
    <div className="App">


      {/* <Accordian/> */}

      {/* <PracAccordian /> */}


      {/* <RandomColor/> */}

{/* star rate  */}
      {/* <StartRate noOfStars={10}/> */}

    {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10}/> */}


{/* <LoadMoreData/> */}

{/* <SideMenu menuList={menus}/> */}
{/* <QRCodeGenerator/> */}


<LightDarkSwitch/>   

 </div>
  );
}

export default App;
