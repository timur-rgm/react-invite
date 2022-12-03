import Success from '../success/Success';
import UsersList from '../users-list/Users-list';

function App() {
  return (
    <div className="App">
      <UsersList isLoading={false} />
      {/* <Success /> */}
    </div>
  );
}

export default App;