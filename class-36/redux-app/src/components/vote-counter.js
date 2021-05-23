import { connect } from 'react-redux';
import { increment, reset } from '../store/votes';

const VotesCounter = (props) => {
  return (
     <>
      <ul>
        {
          props.candidates.map(candidate =>{
            return(
              <li onClick= {()=> props.increment(candidate.name)} key={candidate.name}>
                {candidate.name} : {candidate.votes}
              </li>
            )
          })
        }
      </ul>
    <button onClick={props.reset}>Reset</button>
  </>)
};
const mapStateToProps = (state) => {
  console.log(state);
  return { candidates: state.counter.candidates };
};
const mapDispatchToProps = { increment, reset };
// the order of (mapStateToProps,mapDispatchToProps have to be the same
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
