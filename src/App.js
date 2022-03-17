import './App.css';
import Landing from './Components/Landing/Landing'
import Slider from './Components/Landing/Slider'
import Navbar from './Components/Landing/Navbar'
import MujerPasajera from './Media/MujerPasajera.JPG'
import MujerLibre from './Media/mujerLibre.JPG'
import PulgarArriba from './Media/pulgarArriba.JPG'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing imageSrc={MujerPasajera} />
      <Slider imageSrc={MujerLibre} title={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} />
      <Slider imageSrc={PulgarArriba} title={'Ut enim ad minima veniam, quis nostrum exercitationem'} flipped={true} />
    </div>
  );
}

export default App;
