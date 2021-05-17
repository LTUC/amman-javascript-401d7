import { useState } from 'react';

export default function People(props) {
  const [state, setState] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  // this will work for x number of inputs
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h2>function Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" placeholder="username?" onChange={handleChange} />
        <input
          type="email"
          name="email"
          placeholder="ahmad@ltuc.com"
          onChange={handleChange}
        />
        <button>add user</button>
      </form>
      <p>
        user name {'=>'} {state.name}
      </p>
      <p>email {state.email}</p>
    </section>
  );
}
