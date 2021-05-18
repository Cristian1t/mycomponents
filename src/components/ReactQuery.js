import React from 'react';
import { QueryClient, useMutation, useQuery } from 'react-query';

// Create a Qeury Client
export const MyQueryClient = new QueryClient();

// I placed the QueryClientProvider around my <App /> component in the index.js file

const fetchUsers = async () => {
  const response = await fetch('https://reqres.in/api/users');
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return response.json();
};

const addUser = async (user) => {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify({
      first_name: user.first_name,
      last_name: user.last_name,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  return response.json();
};

function ReactQuery() {
  // Grab all users
  const { data, isLoading, error, refetch } = useQuery('users', fetchUsers);

  // Create a mutation for adding a user

  // This is the synchronous version
  const {
    mutate,
    mutateAsync,
    isLoading: isAddingUser,
    error: addError,
  } = useMutation(addUser, {
    onSuccess: (data, variables, context) => {
      console.log(data);
      refetch();
    },
  });

  //This is the asynchronous version
  if (isLoading) return 'Loading...';
  if (error || addError) return 'An error has occurred: ' + error.message;

  const handleAddUser = async () => {
    const data = await mutateAsync({
      first_name: 'React Query',
      last_name: 'from async',
    });
    console.log('this worked');
    console.log(data);
    refetch();
  };

  return (
    <div>
      {isAddingUser ? <p>Adding user...</p> : null}
      <h3>These are all the users</h3>
      {data.data.map((user) => (
        <p key={user.id}>
          {user.first_name}
          {user.last_name}
        </p>
      ))}
      <button
        onClick={() =>
          mutate({ first_name: 'React Query', last_name: 'Rules!' })
        }
      >
        Click to with sync
      </button>
      <button onClick={handleAddUser}>Add user with async</button>
    </div>
  );
}

export default ReactQuery;
