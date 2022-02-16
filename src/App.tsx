import './App.css';
import 'antd/dist/antd.css'
import { About, Biography, Contact, Events, Footer, Friends, Header, Headermenu, Profile, Pictures, ListContact } from './Components'
// import { useDispatch } from "react-redux";
// import { fetchUserThunk } from "./Components/ListContact/Thunk";
// import { useEffect } from "react";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUserThunk());
  // }, [dispatch]);
  return (
    <div className="App">
      <div className='header-app'>
        <Header />
        <Headermenu />
      </div>
      <Profile />
      <Contact />
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
