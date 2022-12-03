import {ChangeEvent} from 'react';
import Skeleton from '../skeleton/Skeleton';
import User from '../user/User';
import {UsersType} from '../../types/users';

type UsersListComponentType = {
  isLoading: boolean,
  users: UsersType,
  searchValue: string,
  onSearchValueChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  invites: number[],
  onInviteClick: (id: number) => void,
}

function UsersList({
  isLoading,
  users,
  searchValue,
  onSearchValueChange,
  invites,
  onInviteClick,
}: UsersListComponentType): JSX.Element {
  
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>

        <input
          value={searchValue}
          onChange={onSearchValueChange}
          type="text"
          placeholder="Найти пользователя..."
        />
      </div>

      {
        isLoading
        ? <div className="skeleton-list">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          
        : <ul className="users-list">
            {users
              .filter(({email, firstName, lastName}) => {
                const fullName = (firstName + lastName).toLowerCase();

                return (
                  fullName.includes(searchValue.toLowerCase()) || 
                  email.toLowerCase().includes(searchValue.toLowerCase())
                );
              })
              .map((user) => 
                <User
                  item={user}
                  isInvited={invites.includes(user.id)}
                  onInviteClick={onInviteClick}
                />
              )
            }
          </ul>
      }

      <button className="send-invite-btn">Отправить приглашение</button>
    </>
  );
};

export default UsersList;
