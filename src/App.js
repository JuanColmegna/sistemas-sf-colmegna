import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar /> 
      <ItemListContainer itemList="Hola, aquí van a ir las cards" />
    </>
  );
}

export default App;
