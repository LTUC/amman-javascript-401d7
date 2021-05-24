import { connect } from 'react-redux';

const Status = (props) => {
  let currentLeader = { name: 'No Leader', votes: 0 };
  props.candidates.forEach((candidate) => {
    if (!candidate.disabled && candidate.votes !== 0) {
      if (candidate.votes > currentLeader.votes) {
        currentLeader.name = candidate.name;
        currentLeader.votes = candidate.votes;
      } else if (candidate.votes === currentLeader.votes) {
        currentLeader.name = currentLeader.name + ' & ' + candidate.name;
        currentLeader.votes = candidate.votes;
      }
    }
  });
  return (
    <p>
      Current Leader : {currentLeader.name} Votes Cast:{props.votes.totalVotes}
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    votes: state.votes,
    candidates: state.candidates,
  };
};

export default connect(mapStateToProps)(Status);
