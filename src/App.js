import './App.css';
import NavBarone from './Components/NavBar';
import AboutImg from './Components/Aboutimage'
import Service from './Components/Service'
import Card from './Components/Card'
import Gallery from './Components/Gallery';
import SubContent from './Components/SubContent'
import CardCrousal from './Components/CardCrousal';
function App() {
  return (
    <div className="App">
            <NavBarone />
            <AboutImg/>
            <Service />
            <Card/>
            <Gallery/>
            <SubContent/>
            <CardCrousal/>
    </div>
  );
}

export default App;
