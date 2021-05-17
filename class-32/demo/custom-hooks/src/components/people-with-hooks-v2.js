import useFormInput from '../hooks/form-input';
function People(props) {
  const nameInput = useFormInput('text', '', 'username?');
  const emailInput = useFormInput('email', '', 'ahmad@ltuc.com');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value, emailInput.value);
  }

  return (
    <section>
      <h2>function Component with hooks v2</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input {...nameInput} />
        <input {...emailInput} />
        <button>add user</button>
      </form>
      <p>
        user name {'=>'} {nameInput.value}
      </p>
      <p>email {emailInput.value}</p>
    </section>
  );
}

export default People;
