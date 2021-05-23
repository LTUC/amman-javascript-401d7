import { connect } from 'react-redux';
const Status = (props) => {
  return <p>Total Votes :{props.totalVotes}</p>;
};

const mapStateToProps = (state) => {
  return { totalVotes: state.counter.totalVotes };
};

export default connect(mapStateToProps)(Status);
