import './App.css';
import LeftBar from './leftBar/LeftBar';
import Horloge from './horloge/Horloge';

function App() {
  return (
    <div className="App flex flex-row gap-4">
      <LeftBar />
      <Horloge />
    </div>
  );
}

export default App;
