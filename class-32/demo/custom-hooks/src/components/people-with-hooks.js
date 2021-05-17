import useForm from '../hooks/form';
function People(props) {
  const [values, handleChange, handleSubmit] = useForm(handleForm);

  function handleForm(data) {
    console.log(data); // {name::"adsasd",email:"asdasd@sdasd.com"}
  }

  return (
    <section>
      <h2>function Component with hooks</h2>
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
        user name {'=>'} {values.name}
      </p>
      <p>email {values.email}</p>
    </section>
  );
}

export default People;
