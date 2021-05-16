import { useState, useEffect } from 'react';

function Effects(props) {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    name && setPeople([...people,name])
    // condition? true:false
  }
  const handleChange = (e)=>{
    setName(e.target.value)
  }
  // when we use effect without any [] that means it will run on 
  // init and on every update
  // componentDidMount 
  // componentDidUpdate
 useEffect(() => {
   console.log('EveryTime????')
 })
 // run only 1 time
 useEffect(() => {
  console.log('DidMount????')
  document.title = `React hooks`
},[])
// run on a specific state change
useEffect(()=>{
console.log('Name changed!!')
},[name])
// run on a specific state change
useEffect(()=>{
  
  people.length && console.log(`welcome ${name}`)
  },[people])
// when we return a function in useEffect that means any logic needed to be run to cleanup before removing the component
  useEffect(() => {

    return () => {
      console.log('Component Will unmount')
    }
  }, [])
  return (<div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}/>
    </form>
    {
      people.map((person)=>{
        return <p key={person}>{person}</p>
      })
    }
  </div>);
}

export default Effects;
