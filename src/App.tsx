import './App.css';
import 'antd/dist/antd.css'
import Header from './Components/Header/Header';
import Headermenu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';
import Contact from './Components/Contact/Contact';
import Friends from './Components/Friends/Friends';

function App() {
  return (
    <div className="App">
      <Header/>
      <Headermenu/>
      <Profile/>
      <Contact/>
      <Friends/>
    </div>
  );
}

export default App;
