import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Sidebar from './components/Sidebar.js'

function App() {
  return (
    <div>
      <Header name="hi" color="purple" />
      <Main greet="Howdy" />
      <Sidebar greet="Hi" />
    </div>
  );
}

export default App;
