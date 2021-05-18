import React, { useState } from 'react';

function ApiRequestFetch() {
  const [joke, setJoke] = useState('');
  const getJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_joke').then(
      (response) =>
        response
          .json()
          .then((data) => {
            console.log(data);
            setJoke(`${data.setup} ${data.punchline}`);
          })
          .catch((e) => console.log(e))
    );
  };

  return (
    <div>
      <h2>
        Press button to get random joke from
        <a href="https://official-joke-api.appspot.com/random_joke">
          https://official-joke-api.appspot.com/random_joke
        </a>
      </h2>
      <button onClick={getJokes}> Get Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default ApiRequestFetch;
