import {useState, ChangeEvent} from 'react';
import Success from '../success/Success';
import UsersList from '../users-list/Users-list';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  fetch('https://6353e24dccce2f8c02fe8dcd.mockapi.io/users')
    .then((response) => response.json())
    .then((users) => setUsers(users))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));

  const onSearchValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className="App">
      <UsersList
        users={users}
        isLoading={isLoading}
        searchValue={searchValue}
        onSearchValueChange={onSearchValueChange}
      />
      {/* <Success /> */}
    </div>
  );
}

export default App;