import ACL from './components/acl'
import Login from './components/login'
import LoginProvider from './context/auth'

const EditLink = (props)=>{
  return(
    <ACL capability="update">
      <button>Edit</button>
    </ACL>
  )
}
const DeleteLink = (props)=>{
  return(
    <ACL capability="delete">
      <button>Delete</button>
    </ACL>
  )
}



function App() {
  return (
      <LoginProvider>
        <Login/>
        <EditLink/>
        <DeleteLink/>
      </LoginProvider>
  );
}

export default App;
