
import './App.css';
import MainCanvas from './Components/Maincanvas/MainCanvas';
import StatsComponent from './Components/Stats';

function App() {
  return (
    <div className="App">
     <MainCanvas/>
     <div className='top-0'>

     <StatsComponent/>
     </div>
    </div>
  );
}

export default App;
