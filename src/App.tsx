import './App.css';
import 'antd/dist/antd.css'
import Header from './Components/Header/Header';
import Headermenu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';
import Contact from './Components/Contact/Contact';
import Friends from './Components/Friends/Friends';
import Pictures from './Components/Pictures/Pictures';
import About from './Components/About/About';
import Biography from './Components/Biography/Biography';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Headermenu/>
      <Profile/>
      <Contact/>
      <Friends/>
      <Pictures/>
      <About/>
      <Biography/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
