import { connect } from 'react-redux';
import { increment, disable, reset } from '../store/actions';

const Votes = (props) => {
  return(
    <>
    <ul>
      {props.candidates.map((candidate) => (
        <li key={candidate.name}>
          <button onClick={() => (candidate.disabled ? {} : props.increment(candidate))}>
            +
          </button>
          <span className={`${candidate.disabled ? 'disabled' : ''}`} onClick ={()=>props.disable(candidate)}>
            {candidate.name} : {candidate.votes}
          </span>
        </li>
      ))}
    </ul>
    <button onClick={props.reset}>Reset</button>
  </>
  )
};

const mapStateToProps = (state) => ({
  candidates: state.candidates,
  votes: state.votes,
});

const mapDispatchToProps = { increment, disable, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
