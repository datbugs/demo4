import './App.css';
import 'antd/dist/antd.css'
import { About, Biography, Contact, TableUser, Events, Footer, Friends, Header, Headermenu, Profile, Pictures, ListContact } from './Components'
import DemoChart from 'Components/Chart';
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { fetchDataThunk } from 'Components/Table/tableThunk';

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDataThunk(true));
  // }, [dispatch]);
  return (
    <div className="App">
      <div className='header-app'>
        <Header />
        <Headermenu />
      </div>
      <Profile />
      <Contact />
      <DemoChart />
      <TableUser />
      <ListContact />
      <Friends />
      <Pictures />
      <About />
      <Biography />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
