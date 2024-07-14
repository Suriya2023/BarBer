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
import Trend from './Components//Trend';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import BlogTrend from './Components/BlogTrend';
import SBlog from './Components/SBlog';
import NavSection from './Components/navSvc'
import Masterone from './Components/masterone';
import Aboutcard from './Components/aboutcard';
import ContactNav from './Components/ContactNav';
import C1 from './Components/C1';
import C2Map from './Components/C2Map';
// rugf
// import C1 from './Components/C1';
// import C2Map from './Components/C2Map';

function App() {
  return (
    <div className="App">
      <NavBarone />
      <AboutImg />
      <Service />
      <Card />
      <Gallery />
      <SubContent />
      <CardCrousal />
      <ImgsiD />
      <SubCd />
      <BackGround />
      <Trend />
      <Contact />
      <Footer />
      {/* blog star */}
      <Blog />
      <BlogTrend />
      <SBlog />
      {/* blog end */}
      {/* service start */}
      <NavSection />
      <Masterone />
      <Aboutcard />
      {/* service end */}

      {/* contact nav  */}
      <ContactNav />
      <C1 />
      <C2Map />
    </div>
  );
}

export default App;
