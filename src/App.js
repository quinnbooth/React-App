import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Sidebar from './components/Sidebar.js';
import Btn from './components/Btn.js';
import MealsProvider from './providers/MealsProvider.js';
import MealsList from './components/MealsList.js';
import Counter from './components/Counter.js';
import logo from './logo1.png';

// Basically another component
function Logo(props) {
  const userPic = <img src={logo} />;
  return userPic;
}

function App() {
  return (
    <div>
      <Header name="hi" color="purple" />
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
    </div>
  );
}

export default App;
