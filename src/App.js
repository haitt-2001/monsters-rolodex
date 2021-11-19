import react, {Component} from 'react'
import './App.css';
import { CartList } from './component/card-list/Card-list'
import { SearchBox } from './component/search-box/SearchBox'

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(reponse => reponse.json())
    .then(users => this.setState({monsters:users}))
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
    const onChageHandler = (e) => {
       this.setState({searchField: e.target.value})
    }
    
    return(
      <div className="App">
        <h1> Monster rolodex </h1>

        <SearchBox 
        placeHolder="Search monsters" 
        OnChangeHandler={onChageHandler}
        />

        <CartList 
        monsters={filteredMonsters} 
        />
      </div>
        
    )
    
  };
}

export default App;
