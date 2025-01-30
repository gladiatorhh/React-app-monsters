import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchQuery: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => this.setState(
        () => {
          return { monsters: monsters }
        }));
  }

  searchFilter = (event) => {
    const searchQuery = event.target.value.trim().toLowerCase();
    this.setState(() => {
      return { searchQuery }
    });
  }

  render() {
    const { searchFilter } = this;
    const { searchQuery, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchQuery));

    return (
      <div className="App">
        <h1 className='main-title'>Monsters rolodex</h1>
        <SearchBox placeholder="Please search among the monsters" className="search" onChangeHandler={searchFilter} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
