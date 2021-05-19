import React, { Component } from 'react'
import cookie from 'react-cookies'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import superagent from 'superagent'
dotenv.config();
console.log(process.env.API_SERVER)
const API = "https://auth-server-401.herokuapp.com" //process.env.API_SERVER;
const SECRET = "supersecret"//process.env.JWT_SECRET;
export const LoginContext = React.createContext();
export default class LoginProvider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loggedIn:false,
       login:this.login,
       logout:this.logout,
       user:{}
    }
  }
  componentDidMount(){
    const token = cookie.load('auth');
    this.validateToken(token)

  }
  validateToken = (token)=>{
    try {
      // const user = jwt.verify(token,SECRET);
      const user = jwt.decode(token)
      console.table(user)
      this.setLoginState(true,token,user)
    } catch (error) {
      this.setLoginState(false,null,{})
      console.log(`Token Validation Error ${error.message}`)
    }
  }
  setLoginState = (loggedIn,token,user)=>{
    cookie.save('auth',token);
    this.setState({token,loggedIn,user})
  }
  login = async(username,password)=>{
    try {
      const response = await superagent.post(`${API}/signin`).set('authorization',`Basic ${btoa(`${username}:${password}`)}`);
      this.validateToken(response.body.token)
    } catch (error) {
      console.error('Signin Error',error.message)
    }

  }
  logout= ()=>{
    this.setLoginState(false,null,{})
  }
  
  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}
