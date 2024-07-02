import './App.css';
import NavBarone from './Components/NavBar';
import AboutImg from './Components/Aboutimage'
import Service from './Components/Service'
import Card from './Components/Card'
import Gallery from './Components/Gallery';
import SubContent from './Components/SubContent'
import CardCrousal from './Components/CardCrousal';
import ImgsiD from './Components/imgsid'
import SubCd from './Components/SubCd';
import BackGround from './Components/BackGround';
import Trend from './Components/Image/Trend';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
// import Blog from './Components/Blog/Blog';
  
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
            <ImgsiD/>
            <SubCd/>
            <BackGround/>
            <Trend/>
            <Contact/>
            <Footer/>
            {/* <Blog/> */}
    </div>
  );
}

export default App;
