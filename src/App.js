import { useState } from 'react';
import { useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => setMonsters(monsters));
  })

  useEffect(() => {
    const filteredMonstersBySearch = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchQuery));

    setFilteredMonsters(filteredMonstersBySearch)
  }, [searchQuery, monsters])


  const searchFilter = (event) => {
    const searchQueryValue = event.target.value.trim().toLowerCase();
    setSearchQuery(searchQueryValue);
  }

  return (
    <div className="App">
      <h1 className='main-title'>Monsters rolodex</h1>
      <SearchBox placeholder="Please search among the monsters" className="search" onChangeHandler={searchFilter} />
      <CardList monsters={filteredMonsters} />
    </div>);
}

export default App;
