import {useState} from 'react';
import Success from '../success/Success';
import UsersList from '../users-list/Users-list';

function App() {
  const [users, setUsers] = useState([]);

  fetch('https://6353e24dccce2f8c02fe8dcd.mockapi.io/users')
    .then((response) => response.json())
    .then((users) => setUsers(users))
    .catch((err) => console.log(err));

  return (
    <div className="App">
      <UsersList
        users={users}
        isLoading={false}
      />
      {/* <Success /> */}
    </div>
  );
}

export default App;