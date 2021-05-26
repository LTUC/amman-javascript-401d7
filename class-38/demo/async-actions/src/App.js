import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getRemoteData } from './store/actions';
function App() {
  const state = useSelector((state) => {
    return {
      digimons: state.results,
    };
  });
  const dispatch = useDispatch();
  return (
   <>
   <button onClick={()=> dispatch(getRemoteData('https://digimon-api.vercel.app/api/digimon'))}> Get Digimons</button>
   <section>
     {state.digimons.map(digimon=>{
       return(
         <article key={digimon.name}>
           <h3>{digimon.name}</h3>
           <img src={digimon.img} alt="" />
           <p>{digimon.level}</p>
         </article>
       )
     })}
   </section>
   </>
  );
}

export default App;
