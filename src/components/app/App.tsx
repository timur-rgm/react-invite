import {useState, ChangeEvent, useEffect} from 'react';
import Success from '../success/Success';
import UsersList from '../users-list/Users-list';
import {UserType} from '../../types/users';

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');
  const [invites, setInvites] = useState<number[]>([]);

  useEffect(() => {
    fetch('https://6353e24dccce2f8c02fe8dcd.mockapi.io/users')
    .then((response) => response.json())
    .then((users) => setUsers(users))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, []);
  
  const onSearchValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const onInviteClick = (id: number) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id))
    } else {
      setInvites((prev) => [...prev, id])
    }
  };

  return (
    <div className="App">
      <UsersList
        users={users}
        isLoading={isLoading}
        searchValue={searchValue}
        onSearchValueChange={onSearchValueChange}
        invites={invites}
        onInviteClick={onInviteClick}
      />
      {/* <Success /> */}
    </div>
  );
}

export default App;