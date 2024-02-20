// import logo from './logo.svg';
import './App.css';
import './Style/main.scss'
import MainPage from './Components/MainPage';
import NewPage from './Components/NewPage';
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import { ItemsProvider } from './Components/Context/ItemsContext';


function App() {
  return (
    <BrowserRouter>
    <ItemsProvider>
      <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/new-page" element={<NewPage/>} />
      </Routes>
      </div>
      </ItemsProvider>
    </BrowserRouter>
  );
}

export default App;
