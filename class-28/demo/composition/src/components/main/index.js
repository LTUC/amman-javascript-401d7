import { Component } from 'react';
import superagent from 'superagent';
import List from '../list';
import Home from './home'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [] };
  }
  // state = {pokemons:[]};
  async componentDidMount() {
    let response = await superagent.get('https://pokeapi.co/api/v2/pokemon');
    this.setState({ pokemons: response.body.results });
    // this.setState({pokemons:[...this.state.pokemons]})
  }

  render() {
    return (
      <main>
        <Home/>
        <List pokemons={this.state.pokemons}/>
      </main>
    );
  }
}
export default Main;
