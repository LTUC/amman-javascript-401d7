import React from 'react';
import {Link} from 'react-router-dom'
function Home() {
  return(
    <section>
      <h3>Home Page!</h3>
      <Link to={{
        pathname:'/details',
        user:{
          name:"test",
          course:"401d7"
        }
      }}>
      go to Details
      </Link>
    </section>
  );
}

export default Home;
