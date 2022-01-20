import './App.css';
import 'antd/dist/antd.css'
import { DatePicker } from 'antd';
import Header from './Components/Header/Header';
import Headermenu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Headermenu/>
      <Profile/>
    </div>
  );
}

export default App;
