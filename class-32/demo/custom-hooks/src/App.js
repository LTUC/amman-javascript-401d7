import logo from './logo.svg';
import './App.css';
import PeopleWithClass from './components/people-with-class';
import PeopleWithFunction from './components/people-with-function';
import PeopleWithHooks from './components/people-with-hooks';
import PeopleWithHooksV2 from './components/people-with-hooks-v2';
function App() {
  return (
    <div className="App">
      <PeopleWithClass />
      <PeopleWithFunction />
      <PeopleWithHooks />
      <PeopleWithHooksV2 />
    </div>
  );
}

export default App;
