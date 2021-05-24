import { useDispatch, useSelector } from 'react-redux';
import { increment, disable, reset } from '../store/actions';

const Votes = (props) => {
  // this will replace mapStateToProps
  const state = useSelector((state) => {
    return {
      candidates: state.candidates,
      votes: state.votes,
    };
  });

  // ~ mapDispatchToProps
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {state.candidates.map((candidate) => (
          <li key={candidate.name}>
            <button
              onClick={() => (candidate.disabled ? {} : dispatch(increment(candidate)))}
            >
              +
            </button>
            <span
              className={`${candidate.disabled ? 'disabled' : ''}`}
              onClick={() => dispatch(disable(candidate))}
            >
              {candidate.name} : {candidate.votes}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Votes;
