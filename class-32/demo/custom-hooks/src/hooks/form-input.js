import { useState } from 'react';
function useFormInput(type, initialValue, placeholder) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return { value, type, placeholder, onChange: handleChange };
}
export default useFormInput;
