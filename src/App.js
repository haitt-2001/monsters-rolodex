import react, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import { CartList } from './component/card-list/card-list';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(reponse => reponse.json())
    .then(users => this.setState({monsters:users}))
  }

  render(){
    return(
      <div className="App">
        <CartList>
          {this.state.monsters.map(monster => (<h1 key={monster.id}>{monster.name}</h1>))}
        </CartList>
      </div>
        
    )
    
  };
}

export default App;
