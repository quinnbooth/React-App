import './App.css';
import ReactPlayer from "react-player";
import Header from './components/Header.js';
import Main from './components/Main.js';
import Sidebar from './components/Sidebar.js';
import Btn from './components/Btn.js';
import MealsProvider from './providers/MealsProvider.js';
import MealsList from './components/MealsList.js';
import Counter from './components/Counter.js';
import logo from './assets/logo1.png';
import {Routes, Route, Link} from 'react-router-dom';

// Basically another component
function Logo(props) {
  const userPic = <img src={logo} alt="logo" />;
  return userPic;
}

function App() {
  const vidUrl = "https://www.facebook.com/facebook/videos/10153231379946729";
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/header" className="nav-item">Header Link</Link>
      </nav>
      <Routes>
        <Route path="/header" element={<Header name="New page." color="purple" />} />
      </Routes>
      <Main greet="Howdy" />
      <Sidebar greet="I'm a sidebar!" />
      <Logo />
      <Btn />
      <div>
        <MealsProvider>
          <MealsList />
          <Counter />
        </MealsProvider>
      </div>
      <div className='vidHolder'>
        <h1>react-player example</h1>
        <ReactPlayer 
          url={vidUrl}
          playing={false}
          volume={0.5}
        />
      </div>
    </div>
  );
}

export default App;
