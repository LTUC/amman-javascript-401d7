import React from 'react';
import './modal.scss'
// we don't need class in this component this is for demonstration purpose only
class Modal extends React.Component {
  render() {
    return(
      <div className="overlay">
        <div className="modal">
          <div className="header">
              <span className="title">{this.props.title}</span>
              <button onClick={this.props.close}>X</button>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
