import React, { useState } from 'react';
import Axios from 'axios';

function ApiRequestAxios() {
  const [jokes, setJokes] = useState([]);
  const getJokes = () => {
    Axios.get('https://official-joke-api.appspot.com/random_ten')
      .then((response) => {
        console.log(response.data);
        setJokes(response.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2>
        Press button to get 10 random jokes from
        <a href="https://official-joke-api.appspot.com/random_ten">
          https://official-joke-api.appspot.com/random_ten
        </a>
      </h2>
      <button onClick={getJokes}> Get 10 Jokes</button>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiRequestAxios;
