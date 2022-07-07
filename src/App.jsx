import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textTransform: 'uppercase'}}>🍔 Tito's Burgers</h1>
        <ItemListContainer name="HAMBURGUESAS"/>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;