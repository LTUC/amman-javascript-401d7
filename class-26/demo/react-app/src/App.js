import React from 'react';
import './app.scss';
const Header = () => {
  return (
    <header>
      <h1>This is Header</h1>
    </header>
  );
};
// Footer Component (functional stateless component)
const Footer = () => <footer>&copy; 2021 ASAC</footer>;
// Main Component (stateful class component)
class Main extends React.Component {
  constructor(props) {
    super(props);
    //initial state of the component
    this.state = {
      words: 'nothing to see here',
    };
    // this line is needed if you create a function in the class without using arrow functions
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const words = this.state.words.split('').reverse().join('');
    this.setState({ words });
  }
  handleWords = (e) => {
    const words = e.target.value;
    // we never ever ever change the state directly
    // DONT DO THIS >>>>>> this.state = {words}
    this.setState({ words });
  };
  render() {
    return (
      <main>
        <h3>{this.state.words}</h3>
        <input id="words-input" type="text" onChange={this.handleWords} />
        <button onClick={this.handleClick}>click</button>
      </main>
    );
  }
}
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
