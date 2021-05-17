import { useState } from 'react';
const useForm = (cb) => {
  const [state, setState] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    // if you are ready call your component with data
    cb(state);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return [state, handleChange, handleSubmit];
};

export default useForm;
