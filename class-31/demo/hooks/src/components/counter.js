import { useState } from 'react';

function Counter(props) {
  const [clicks, setClicks] = useState(0);
  const [isEven, setIsEven] = useState(false);

  const updateCounter = ()=>{
    const newClicks = clicks + 1
    setClicks(newClicks)
    setIsEven(newClicks % 2 === 0)
  }
  return (<>
  <h2>Button has Clicked {clicks} time(s)</h2>
  <h2>Even? {isEven.toString()}</h2>
  <button onClick={updateCounter}>Update Clicks</button>
  </>);
}

export default Counter;
