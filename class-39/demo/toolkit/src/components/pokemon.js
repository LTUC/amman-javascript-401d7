import {useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import  {add,remove,get} from '../store/pokemon'
function Pokemon() {
 const [name, setName] = useState('')
  const state = useSelector((state)=>{
    return {
      pokemon:state.pokemon
    }
  })
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(get())
  },[])

  const handleChange = (e)=>{
    setName(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(add(name))
  }
  return (<>
  <ul>
    {state.pokemon.map(poke =>{
      return(
        <li key={poke.name} onClick={()=>dispatch(remove(poke.name))}>{poke.name}</li>
      )
    })}
  </ul>
  <form onSubmit = {handleSubmit}>
    <input type="text"  placeholder="Enter poke name" onChange={handleChange}/>
    <button>Add</button>
  </form>
  </>)
}

export default Pokemon;
