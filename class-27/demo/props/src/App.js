import { Component } from 'react';
import Form from './Form';
import People from './People';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }
  handleForm = (results) => {
    console.log(results);
    this.setState({ people: results });
  };
  render() {
    return (
      <>
        <Form prompt="Get Star Wars People" handler={this.handleForm} />
        <People people={this.state.people} />
      </>
    );
  }
}
