import { useContext} from 'react';
import './App.css';
import { AppContext } from './AppContext';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import SearchInput from './components/SearchInput/SearchInput';
import ShowHeroes from './components/ShowHeroes/ShowHeroes';

function App() {

  const {input} = useContext(AppContext);
  
 
  return (
      <div className="App">
        <Header />
        <SearchInput/>
        {input === "" ? null : <Pagination />}
        <ShowHeroes />
        {input === "" ? null : <Pagination />}
      </div>
    

  );
}

export default App;
