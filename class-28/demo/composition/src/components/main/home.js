import React, { Component } from 'react';
import { If, Then, Else } from '../if'; //'react-if'
import Modal from '../modal';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
    // if(this.state.isOpen){
    //   this.setState({isOpen:false})
    // }else {
    //   this.setState({isOpen:true})
    // }
  };
  render() {
    return (
      <section>
        <If condition={this.state.isOpen}>
          <Then>
            <Modal title="Pop Up" close={this.toggleModal}>
              <div>THis is my dynamic Modal!</div>
            </Modal>
          </Then>
          <Else>
            <button onClick={this.toggleModal}>Open Modal</button>
          </Else>
        </If>
      </section>
      /*
The ugly way of doing conditions
{
  this.state.isOpen?
  (
       <Modal title="Pop Up" close={this.toggleModal}>
          <div>THis is my dynamic Modal!</div>
       </Modal>
  ):(
      <button onClick={this.toggleModal}>Open Modal</button>
  )
}
*/
    );
  }
}
export default Home;
