import  { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class People extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       email:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleSubmit(e){
e.preventDefault()
console.log('hi',e)
console.log(this.state);
  }
  handleNameChange(e){
    this.setState({name:e.target.value})
  }
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  // this will work for x number of inputs
  handleChange = (e)=>{
    console.log('hi',e)
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <section>
        <h2>Class Component</h2>
        <Form onSubmit={this.handleSubmit}>
          <legend>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control name="name" type="text" placeholder="Enter name"  onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control name="email" type="email" placeholder="ahmad@ltuc.com" onChange={this.handleChange}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </legend>
</Form>
        <p>user name {'=>'} {this.state.name}</p>
        <p>email {this.state.email}</p>
      </section>
    )
  }
}
